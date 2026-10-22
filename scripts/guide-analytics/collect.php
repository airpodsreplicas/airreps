<?php
/**
 * AirReps guide aggregate analytics v1 (2026-10-22).
 * Dedicated endpoint: no YOURLS/WooCommerce bootstrap, cookies, or identifiers.
 * Standard web-server/CDN access logging is independent of these aggregate files.
 */
declare(strict_types=1);
ini_set('display_errors', '0');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');
header('X-Robots-Tag: noindex, nofollow');
header('Vary: Origin');

const DATA_DIR = '/home/airreps/web/airreps.link/private/guide-analytics';
const MAX_BODY_BYTES = 1024;
const MAX_FILE_BYTES = 2097152;
const MAX_STORAGE_BYTES = 33554432;
const MAX_KEYS = 12000;
const MAX_MINUTE_EVENTS = 600;
const MAX_DAY_EVENTS = 100000;
const RETENTION_DAYS = 90;

function finish(int $status): never {
    http_response_code($status);
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!in_array($origin, ['https://airpodsreplicas.com', 'https://www.airpodsreplicas.com'], true)) {
    finish(403);
}
header('Access-Control-Allow-Origin: ' . $origin);
$method = $_SERVER['REQUEST_METHOD'] ?? '';
if ($method === 'OPTIONS') {
    if (($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] ?? '') !== 'POST') {
        finish(405);
    }
    $requestedHeaders = strtolower($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'] ?? '');
    if ($requestedHeaders !== '' && $requestedHeaders !== 'content-type') {
        finish(400);
    }
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 600');
    finish(204);
}
if ($method !== 'POST') {
    header('Allow: POST, OPTIONS');
    finish(405);
}
if (!empty($_SERVER['QUERY_STRING'])) {
    finish(400);
}
if (($_SERVER['HTTP_DNT'] ?? '') === '1' || ($_SERVER['HTTP_SEC_GPC'] ?? '') === '1') {
    finish(204);
}
$contentType = strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
if (!in_array($contentType, ['text/plain', 'application/json'], true)) {
    finish(415);
}
if (isset($_SERVER['CONTENT_LENGTH']) && (!ctype_digit((string) $_SERVER['CONTENT_LENGTH']) || (int) $_SERVER['CONTENT_LENGTH'] > MAX_BODY_BYTES)) {
    finish(413);
}
$raw = file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES + 1);
if ($raw === false || strlen($raw) > MAX_BODY_BYTES) {
    finish(413);
}
try {
    $event = json_decode($raw, true, 8, JSON_THROW_ON_ERROR);
} catch (JsonException $error) {
    finish(400);
}
if (!is_array($event) || array_is_list($event)) {
    finish(400);
}
$keys = array_keys($event);
if (array_diff($keys, ['event', 'route', 'source', 'target', 'test']) || array_diff(['event', 'route', 'source', 'target'], $keys)) {
    finish(400);
}
foreach (['event', 'route', 'source', 'target'] as $field) {
    if (!is_string($event[$field])) {
        finish(400);
    }
}
if (array_key_exists('test', $event) && !is_bool($event['test'])) {
    finish(400);
}
$sources = ['ai_chatgpt', 'ai_gemini', 'ai_claude', 'ai_grok', 'ai_perplexity', 'search_google', 'search_bing', 'search_other', 'community', 'social', 'direct', 'other'];
$targets = ['hicity', 'jenny', 'earhive', 'replicute', 'kakobuy', 'kakoguide', 'discord', 'reddit'];
if (!in_array($event['source'], $sources, true) || !in_array($event['event'], ['view', 'outbound'], true)) {
    finish(400);
}
if (($event['event'] === 'view' && $event['target'] !== '') || ($event['event'] === 'outbound' && !in_array($event['target'], $targets, true))) {
    finish(400);
}
if (strlen($event['route']) > 180) {
    finish(400);
}
$routesRaw = @file_get_contents(DATA_DIR . '/allowed-routes.json', false, null, 0, 131073);
if ($routesRaw === false || strlen($routesRaw) > 131072) {
    finish(503);
}
$routes = json_decode($routesRaw, true);
if (!is_array($routes) || count($routes) > 2000 || !in_array($event['route'], $routes, true)) {
    finish(400);
}
if (($event['test'] ?? false) === true) {
    // Explicit validation mode never writes counts, files, or rate-limit state.
    header('X-Guide-Analytics-Validated: 1');
    finish(204);
}

umask(0077);
$lock = @fopen(DATA_DIR . '/.lock', 'c');
if ($lock === false || !flock($lock, LOCK_EX | LOCK_NB)) {
    finish(503);
}
$today = gmdate('Y-m-d');
$minute = gmdate('Y-m-d\TH:i');
$file = DATA_DIR . '/' . $today . '.json';
$state = ['day' => $today, 'minute' => $minute, 'minute_count' => 0, 'total' => 0, 'counts' => []];
if (is_file($file)) {
    if (filesize($file) > MAX_FILE_BYTES) {
        finish(503);
    }
    $stored = @file_get_contents($file, false, null, 0, MAX_FILE_BYTES + 1);
    $state = $stored === false ? null : json_decode($stored, true);
    if (!is_array($state) || !is_array($state['counts'] ?? null) || ($state['day'] ?? '') !== $today || !is_int($state['total'] ?? null) || !is_int($state['minute_count'] ?? null)) {
        finish(503);
    }
}
if ($state['minute'] !== $minute) {
    $state['minute'] = $minute;
    $state['minute_count'] = 0;
}
if ($state['minute_count'] >= MAX_MINUTE_EVENTS || $state['total'] >= MAX_DAY_EVENTS) {
    header('Retry-After: 60');
    finish(429);
}
$key = implode('|', [$event['source'], $event['event'], $event['target'], $event['route']]);
if (!array_key_exists($key, $state['counts']) && count($state['counts']) >= MAX_KEYS) {
    finish(503);
}
if ($state['total'] === 0) {
    // Retention and total-storage cap apply only to this dedicated directory.
    foreach (glob(DATA_DIR . '/.count-*') ?: [] as $orphan) {
        @unlink($orphan);
    }
    $oldest = gmdate('Y-m-d', time() - (RETENTION_DAYS - 1) * 86400);
    $files = glob(DATA_DIR . '/????-??-??.json') ?: [];
    sort($files);
    $sizes = [];
    foreach ($files as $candidate) {
        $name = basename($candidate, '.json');
        if ($name < $oldest) {
            @unlink($candidate);
        } else {
            $sizes[$candidate] = filesize($candidate);
        }
    }
    $bytes = array_sum($sizes);
    foreach ($sizes as $candidate => $size) {
        if ($bytes <= MAX_STORAGE_BYTES - MAX_FILE_BYTES) {
            break;
        }
        if ($candidate !== $file && @unlink($candidate)) {
            $bytes -= $size;
        }
    }
    if ($bytes > MAX_STORAGE_BYTES - MAX_FILE_BYTES) {
        finish(503);
    }
}
$state['counts'][$key] = ($state['counts'][$key] ?? 0) + 1;
$state['total']++;
$state['minute_count']++;
$encoded = json_encode($state, JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n";
if (strlen($encoded) > MAX_FILE_BYTES) {
    finish(503);
}
$temp = tempnam(DATA_DIR, '.count-');
if ($temp === false) {
    finish(503);
}
if (file_put_contents($temp, $encoded) !== strlen($encoded) || !rename($temp, $file)) {
    @unlink($temp);
    finish(503);
}
flock($lock, LOCK_UN);
fclose($lock);
finish(204);
