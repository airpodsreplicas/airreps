"""Exercise discovery and real HTTP failure/redirect handling without external traffic."""

from collections import Counter
from contextlib import redirect_stdout
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import importlib.util
import io
import json
from pathlib import Path
from tempfile import TemporaryDirectory
from threading import Thread
import unittest
from unittest.mock import patch
from urllib.error import URLError


SPEC = importlib.util.spec_from_file_location("seller_links", Path(__file__).with_name("check-seller-links.py"))
checker = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(checker)


class Handler(BaseHTTPRequestHandler):
    calls = Counter()

    def log_message(self, *args):
        pass

    def do_GET(self):
        self.calls[self.path] += 1
        if self.path == "/cookie-redirect" and "session=ready" not in self.headers.get("Cookie", ""):
            self.send_response(302)
            self.send_header("Location", "/cookie-redirect")
            self.send_header("Set-Cookie", "session=ready; Path=/")
            self.end_headers()
            return
        if self.path == "/redirect":
            self.send_response(302)
            self.send_header("Location", "/ok")
            self.end_headers()
            return
        status, title = {
            "/ok": (200, "AirPods Pro 2 – Earhive"),
            "/cookie-redirect": (200, "Referral landing page"),
            "/missing": (404, "Not found"),
            "/gone": (410, "Gone"),
            "/soft-missing": (200, "Page not found – Seller"),
            "/challenge": (200, "Just a moment..."),
            "/blocked": (403, "Forbidden"),
            "/limited": (429, "Too many requests"),
            "/unavailable": (503, "Unavailable"),
            "/flaky": (503, "Unavailable") if self.calls[self.path] < 2 else (200, "Product"),
        }[self.path]
        body = f"<html><head><title>{title}</title></head><body>Shop</body></html>".encode()
        self.send_response(status)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


class SellerLinkTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
        cls.thread = Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f"http://127.0.0.1:{cls.server.server_port}"

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()

    def setUp(self):
        Handler.calls.clear()

    def check(self, path):
        return checker.check_link(self.base + path, [{"file": "docs/links/pro.md", "line": 12}], backoff=0)

    def test_discovers_translations_quiz_and_html_links_with_deduplication(self):
        with TemporaryDirectory() as temp:
            root = Path(temp)
            sources = {
                "docs/links/pro.md": '<a href="https://seller.test/item?a=1&amp;b=2#buy">Buy</a>',
                "docs/da/links/pro.md": '[Buy](https://seller.test/item?a=1&b=2)',
                "docs/.vitepress/components/Quiz.vue": "url: 'https://seller.test/quiz-only',",
                "docs/introduction/sellers.md": "See https://seller.test/shop.\n[Guide](https://airpodsreplicas.com/links/pro)",
                "docs/fr/links/airpods.md": '[Buy](https://seller.test/item_(new)).',
                "docs/ignored.md": "https://not-a-buying-link.test/",
            }
            for name, content in sources.items():
                path = root / name
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(content, encoding="utf-8")
            links, count = checker.discover_links(root)
            self.assertEqual(count, 5)
            self.assertEqual(set(links), {"https://seller.test/item?a=1&b=2", "https://seller.test/quiz-only",
                                          "https://seller.test/shop", "https://seller.test/item_(new)"})
            self.assertEqual(len(links["https://seller.test/item?a=1&b=2"]), 2)

    def test_missing_quiz_and_empty_discovery_fail(self):
        with TemporaryDirectory() as temp:
            root = Path(temp)
            with self.assertRaisesRegex(ValueError, "Quiz.vue is missing"):
                checker.discover_links(root)
            quiz = root / "docs/.vitepress/components/Quiz.vue"
            quiz.parent.mkdir(parents=True)
            quiz.write_text("No links")
            with self.assertRaisesRegex(ValueError, "No buying links"):
                checker.discover_links(root)

    def test_follows_redirects_using_get_on_a_server_without_head_support(self):
        result = self.check("/redirect")
        self.assertEqual(result["state"], "healthy")
        self.assertEqual(result["final_url"], self.base + "/ok")
        self.assertEqual(result["attempts"], 1)
        self.assertEqual(Handler.calls, {"/redirect": 1, "/ok": 1})

    def test_retries_temporary_server_error_until_recovery(self):
        result = self.check("/flaky")
        self.assertEqual(result["state"], "healthy")
        self.assertEqual(result["attempts"], 2)
        self.assertEqual([item["http_status"] for item in result["history"]], [503, 200])

    def test_cookie_dependent_redirects_resolve_without_sharing_sessions(self):
        for _ in range(2):
            result = self.check("/cookie-redirect")
            self.assertEqual(result["state"], "healthy")
            self.assertEqual(result["attempts"], 1)
        self.assertEqual(Handler.calls["/cookie-redirect"], 4)

    def test_missing_pages_blocks_and_persistent_errors_remain_distinct(self):
        for path, state in {"/missing": "broken", "/gone": "broken", "/soft-missing": "broken",
                            "/challenge": "blocked", "/blocked": "blocked", "/limited": "blocked",
                            "/unavailable": "unreachable"}.items():
            with self.subTest(path=path):
                result = self.check(path)
                self.assertEqual(result["state"], state)
                self.assertEqual(Handler.calls[path], 3)

    def test_network_failure_is_unreachable_after_retries(self):
        for error in [TimeoutError("timed out"), URLError("DNS lookup failed")]:
            with self.subTest(error=error), patch.object(checker, "fetch", side_effect=error) as fetch:
                result = self.check("/ok")
                self.assertEqual(result["state"], "unreachable")
                self.assertIsNone(result["http_status"])
                self.assertEqual(fetch.call_count, 3)

    def test_failed_checks_still_write_reports_and_blocked_only_does_not_fail(self):
        for path, exit_code in [("/missing", 1), ("/unavailable", 1), ("/blocked", 0)]:
            with self.subTest(path=path), TemporaryDirectory() as temp:
                output = Path(temp)
                links = {self.base + path: [{"file": "docs/links/pro.md", "line": 12}]}
                with patch.object(checker, "discover_links", return_value=(links, 1)), \
                        patch("sys.argv", ["checker", "--output-dir", temp]), \
                        patch.object(checker.time, "sleep"), redirect_stdout(io.StringIO()):
                    self.assertEqual(checker.main(), exit_code)
                report = json.loads((output / "report.json").read_text())
                self.assertEqual(sum(report["counts"].values()), 1)
                self.assertEqual(report["results"][0]["attempts"], 3)
                self.assertIn("docs/links/pro.md:12", (output / "report.md").read_text())


if __name__ == "__main__":
    unittest.main()
