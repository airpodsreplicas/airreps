"""Check built links, fragments, redirect bookmarks, and social-preview metadata.

Run after docs:build. Uses only Python standard library; no network needed.
"""
import json
import re
from collections import Counter, defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

REPO = Path(__file__).resolve().parents[1]
DIST = REPO / 'docs/.vitepress/dist'
HOST = 'https://airpodsreplicas.com'

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.ids = []
        self.refs = []
        self.doc_ids = []
        self.doc_depth = 0
        self.refresh = None
        self.meta = defaultdict(list)
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'meta':
            key = a.get('property', a.get('name', ''))
            self.meta[key].append(a.get('content', ''))
            if key in ['og:image', 'twitter:image'] and a.get('content'):
                self.refs.append(('social-image', a['content']))
        if tag == 'div':
            if self.doc_depth:
                self.doc_depth += 1
            elif 'vp-doc' in a.get('class', '').split():
                self.doc_depth = 1
        if self.doc_depth and a.get('id'):
            self.doc_ids.append(a['id'])
        if a.get('id'): self.ids.append(a['id'])
        if tag == 'a' and a.get('name'): self.ids.append(a['name'])
        if tag == 'meta' and a.get('http-equiv', '').lower() == 'refresh':
            match = re.search(r'url=(.*)', a.get('content', ''), re.I)
            if match: self.refresh = match[1]
        if tag == 'a' and a.get('href'): self.refs.append(('link', a['href']))
        if tag in ['img', 'script', 'source', 'video', 'audio'] and a.get('src'):
            self.refs.append(('asset', a['src']))
        if tag == 'link' and a.get('href') and a.get('rel') in ['stylesheet', 'icon', 'apple-touch-icon', 'preload', 'modulepreload', 'manifest']:
            self.refs.append(('asset', a['href']))

    def handle_endtag(self, tag):
        if tag == 'div' and self.doc_depth:
            self.doc_depth -= 1

def route(file):
    value = '/' + str(file.relative_to(DIST))
    return value.removesuffix('index.html') if value.endswith('/index.html') else value.removesuffix('.html')

def resolve(path):
    path = unquote(path).lstrip('/')
    base = DIST / path
    for candidate in [base, Path(str(base) + '.html'), base / 'index.html']:
        if candidate.is_file(): return candidate
    return None

def run():
    pages = {file: Page(file.read_text()) for file in DIST.rglob('*.html')}
    missing = defaultdict(set)
    external = defaultdict(set)
    git_links = defaultdict(set)
    duplicates = []
    metadata_errors = []
    count = 0
    bookmark_count = 0
    for source, page in pages.items():
        source_route = route(source)
        if not page.refresh:
            for suffix in ['title', 'description', 'url', 'image', 'image:alt']:
                og = page.meta['og:' + suffix]
                twitter = page.meta['twitter:' + suffix]
                if len(og) != 1 or not og[0] or og != twitter:
                    metadata_errors.append((source_route, suffix, og, twitter))
            if len(page.meta['og:locale:alternate']) != 8:
                metadata_errors.append((source_route, 'og:locale:alternate', page.meta['og:locale:alternate']))
        if page.refresh and page.doc_ids:
            destination = urlsplit(page.refresh)
            family = pages.get(resolve(destination.path))
            model = destination.fragment
            for old_id in page.doc_ids:
                new_id = old_id if old_id == model else model + '-' + old_id
                bookmark_count += 1
                if family is None or new_id not in family.ids:
                    missing[('redirect-anchor', destination.path + '#' + new_id)].add(source_route)
        duplicates.extend((source_route, key, n) for key, n in Counter(page.ids).items() if n > 1)
        for kind, raw in page.refs:
            if not raw or raw.startswith(('data:', 'mailto:', 'tel:', 'javascript:')): continue
            url = urlsplit(urljoin(HOST + source_route, raw))
            if url.scheme not in ['http', 'https']: continue
            if url.hostname not in ['airpodsreplicas.com', 'www.airpodsreplicas.com']:
                if kind == 'link':
                    key = url._replace(fragment='').geturl()
                    match = re.fullmatch(r'/airpodsreplicas/airreps/(?:edit|blob)/main/(.*)', url.path, re.I)
                    if url.hostname == 'github.com' and match:
                        if not (REPO / unquote(match[1])).is_file():
                            missing[('github-source', key)].add(source_route)
                        git_links[key].add(source_route)
                    else: external[key].add(source_route)
                continue
            count += 1
            target = resolve(url.path)
            if target is None:
                missing[(kind, raw)].add(source_route)
                continue
            fragment = unquote(url.fragment).split(':~:text=')[0]
            if kind == 'link' and fragment and target in pages:
                target_page = pages[target]
                if target_page.refresh and not (target == source and raw.startswith('#')):
                    next_url = urlsplit(urljoin(HOST + url.path, target_page.refresh))
                    target = resolve(next_url.path)
                    target_page = pages.get(target, target_page)
                    model = unquote(next_url.fragment)
                    fragment = (fragment if fragment == model else model + '-' + fragment) if model else fragment
                if fragment not in target_page.ids:
                    missing[('anchor', url.path + '#' + fragment)].add(source_route)
    report = {
        'pages': len(pages), 'internal_references': count, 'redirect_bookmarks': bookmark_count,
        'github_source_links': len(git_links), 'external_urls': len(external),
        'missing': [{'kind': kind, 'target': target, 'sources': sorted(sources)} for (kind, target), sources in missing.items()],
        'duplicate_ids': duplicates,
        'metadata_errors': metadata_errors,
    }
    print(json.dumps(report, indent=2, ensure_ascii=False))
    if not pages:
        raise SystemExit('Build the guide before checking its links.')
    if missing or duplicates or metadata_errors:
        raise SystemExit(1)

if __name__ == '__main__': run()
