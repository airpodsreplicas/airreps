#!/usr/bin/env python3
"""Check public buying links in every guide locale and the quiz (stdlib only)."""

import argparse
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import html
from html.parser import HTMLParser
from http.client import HTTPException
from http.cookiejar import CookieJar
import json
import os
from pathlib import Path
import re
import time
from urllib.error import HTTPError, URLError
from urllib.parse import urldefrag, urlsplit
from urllib.request import HTTPCookieProcessor, Request, build_opener


ROOT = Path(__file__).resolve().parents[1]
URL_PATTERN = re.compile(r"https?://[^\s<>\"'`\[\]{}]+")
BLOCKED_TITLE = re.compile(
    r"just a moment|access denied|attention required|captcha|"
    r"security (?:check|verification)|verify (?:you are|you're)|"
    r"robot check|checking your browser", re.I
)
MISSING_TITLE = re.compile(r"\b404\b|page not found|product not found|page doesn't exist", re.I)
USER_AGENT = "Mozilla/5.0 (compatible; AirRepsLinkChecker/1.0; +https://github.com/airpodsreplicas/airreps)"


class PageTitle(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.parts = []

    def handle_starttag(self, tag, attrs):
        if tag == "title":
            self.in_title = True

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.parts.append(data)


def discover_links(root):
    """Read source files, including generation files included by family pages."""
    docs = root / "docs"
    files = set(docs.glob("links/**/*.md"))
    files.update(docs.glob("*/links/**/*.md"))
    files.update(docs.glob("introduction/sellers.md"))
    files.update(docs.glob("*/introduction/sellers.md"))
    quiz = docs / ".vitepress/components/Quiz.vue"
    if not quiz.is_file():
        raise ValueError("Quiz.vue is missing; cannot verify quiz coverage")
    files.add(quiz)
    links = {}
    for path in sorted(files, key=lambda path: (len(path.parts), path.as_posix())):
        for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            for match in URL_PATTERN.finditer(line):
                url = html.unescape(match.group()).rstrip(".,;:!?")
                # Markdown destinations and prose can add unbalanced closing parentheses.
                while url.endswith(")") and url.count(")") > url.count("("):
                    url = url[:-1]
                url = urldefrag(url)[0]
                if urlsplit(url).hostname in {"airpodsreplicas.com", "www.airpodsreplicas.com"}:
                    continue  # Already covered by the internal link audit.
                source = {"file": path.relative_to(root).as_posix(), "line": number}
                sources = links.setdefault(url, [])
                if source not in sources:
                    sources.append(source)
    if not links:
        raise ValueError("No buying links found; refusing to report an empty check as healthy")
    return links, len(files)


def fetch(url, timeout):
    request = Request(url, headers={"User-Agent": USER_AGENT, "Accept": "text/html,*/*;q=0.8"})
    # Some referral redirects need a session cookie to avoid redirect loops.
    # Keep cookies only for this request chain, never shared between workers.
    opener = build_opener(HTTPCookieProcessor(CookieJar()))
    try:
        response = opener.open(request, timeout=timeout)
    except HTTPError as error:
        response = error
    with response:
        title = ""
        content_type = response.headers.get("Content-Type", "").lower()
        if "html" in content_type:
            parser = PageTitle()
            charset = response.headers.get_content_charset() or "utf-8"
            raw_body = response.read(131072)
            try:
                body = raw_body.decode(charset, errors="replace")
            except LookupError:
                body = raw_body.decode("utf-8", errors="replace")
            parser.feed(body)
            title = " ".join("".join(parser.parts).split())[:300]
        return response.status, response.geturl(), title


def classify(status, title):
    if status in {401, 403, 429} or BLOCKED_TITLE.search(title):
        return "blocked", "Automated access blocked or rate limited; verify in a browser"
    if status in {404, 410}:
        return "broken", f"HTTP {status}: page missing"
    if 200 <= status < 300:
        if MISSING_TITLE.search(title):
            return "broken", "Page title reports a missing page despite HTTP success"
        return "healthy", "Responded successfully"
    return "unreachable", f"HTTP {status}: persistent HTTP or redirect error"


def check_link(url, sources, *, timeout=15, attempts=3, backoff=2):
    history = []
    for attempt in range(1, attempts + 1):
        try:
            status, final_url, title = fetch(url, timeout)
            state, reason = classify(status, title)
            result = {"state": state, "reason": reason, "http_status": status,
                      "final_url": final_url, "title": title}
        except (URLError, OSError, HTTPException, ValueError) as error:
            result = {"state": "unreachable", "reason": str(error)[:300],
                      "http_status": None, "final_url": None, "title": ""}
        history.append(result)
        if result["state"] == "healthy":
            break
        if attempt < attempts:
            time.sleep(backoff * attempt)
    return {"url": url, "sources": sources, **result, "attempts": attempt, "history": history}


def markdown_report(report):
    counts = report["counts"]
    lines = ["# Weekly seller link check", "", f"Checked at {report['checked_at']}.", "",
             f"Checked **{sum(counts.values())} unique URLs** from **{report['source_files']} source files** "
             "across the seller pages, translated pages, and quiz.", "",
             "| Healthy | Broken | Unreachable | Blocked / unverified |",
             "| --- | --- | --- | --- |",
             f"| {counts['healthy']} | {counts['broken']} | {counts['unreachable']} | {counts['blocked']} |", "",
             "Broken and unreachable links fail this check after retries. Blocked links need a browser check "
             "and do not count as confirmed dead links. HTTP success does not confirm stock or product accuracy.", ""]
    if report.get("error"):
        lines.extend([f"**Checker error:** {html.escape(report['error'])}", ""])
    for state, heading in [("broken", "Broken links"), ("unreachable", "Unreachable links"),
                           ("blocked", "Blocked / unverified links"), ("healthy", "Healthy links")]:
        results = [result for result in report["results"] if result["state"] == state]
        if not results:
            continue
        if state == "healthy":
            lines.extend(["<details>", "<summary>Healthy links</summary>", ""])
        else:
            lines.extend([f"## {heading}", ""])
        if state == "healthy":
            lines.extend(["| Link | HTTP | Attempts | First source |", "| --- | --- | --- | --- |"])
        else:
            lines.extend(["| Link | HTTP | Attempts | First source | Reason |", "| --- | --- | --- | --- | --- |"])
        for result in results:
            source = result["sources"][0]
            location = f"{source['file']}:{source['line']}"
            extra = len(result["sources"]) - 1
            source_text = f"`{location}`" + (f" (+{extra} references)" if extra else "")
            url = result["url"].replace("|", "%7C")
            row = f"| <{url}> | {result['http_status'] or '—'} | {result['attempts']} | {source_text} |"
            if state != "healthy":
                reason = html.escape(" ".join(result["reason"].split())).replace("|", "&#124;")
                row += f" {reason} |"
            lines.append(row)
        lines.append("")
        if state == "healthy":
            lines.extend(["</details>", ""])
    lines.append("The JSON artifact includes every source location, redirect destination, page title, and retry result.")
    return "\n".join(lines) + "\n"


def write_report(output_dir, results, source_files, error=None):
    counts = {state: 0 for state in ("healthy", "broken", "unreachable", "blocked")}
    counts.update(Counter(result["state"] for result in results))
    report = {"checked_at": datetime.now(timezone.utc).isoformat(),
              "commit": os.environ.get("GITHUB_SHA"), "source_files": source_files,
              "counts": counts, "error": error, "results": results}
    output_dir.mkdir(parents=True, exist_ok=True)
    (output_dir / "report.json").write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    (output_dir / "report.md").write_text(markdown_report(report), encoding="utf-8")
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, default=ROOT / "seller-link-report")
    args = parser.parse_args()
    results = []
    source_files = 0
    error = None
    try:
        links, source_files = discover_links(ROOT)
        print(f"Checking {len(links)} unique URLs from {source_files} source files", flush=True)
        with ThreadPoolExecutor(max_workers=4) as pool:
            for result in pool.map(lambda item: check_link(*item), sorted(links.items())):
                results.append(result)
                print(f"{result['state']:11} {result['url']}", flush=True)
    except Exception as exception:
        error = f"{type(exception).__name__}: {exception}"
    report = write_report(args.output_dir, results, source_files, error)
    print(json.dumps({"counts": report["counts"], "error": error}))
    return int(bool(error or report["counts"]["broken"] or report["counts"]["unreachable"]))


if __name__ == "__main__":
    raise SystemExit(main())
