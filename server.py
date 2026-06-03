import http.server
import socketserver
import os
import urllib.request
import urllib.parse

PORT = 5000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
PROXY_ORIGIN = "https://www.megaeth.com"

PROXY_PREFIXES = ("/_next/", "/assets/", "/tge/", "/logo.png")

MIME_TYPES = {
    ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
    ".webp": "image/webp", ".gif": "image/gif", ".svg": "image/svg+xml",
    ".webm": "video/webm", ".mp4": "video/mp4",
    ".glb": "model/gltf-binary", ".gltf": "model/gltf+json",
    ".ico": "image/x-icon", ".css": "text/css", ".js": "application/javascript",
    ".json": "application/json", ".otf": "font/otf", ".ttf": "font/ttf",
    ".woff": "font/woff", ".woff2": "font/woff2",
}

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        pass

    def do_GET(self):
        # Handle /_next/image?url=...&w=...&q=... → serve local image directly
        if self.path.startswith("/_next/image"):
            return self._serve_next_image()

        path = self.path.split("?")[0]
        local_path = os.path.join(DIRECTORY, path.lstrip("/"))

        # Serve index.html with no-cache headers
        if path in ("/", "/index.html") or (os.path.isfile(local_path) and local_path.endswith(".html")):
            return self._serve_html(local_path if os.path.isfile(local_path) else os.path.join(DIRECTORY, "index.html"))

        # Serve local file if it exists — always with no-cache so patched bundles are picked up
        if os.path.isfile(local_path):
            return self._serve_local(local_path)

        # Proxy anything under known prefixes
        if any(path.startswith(p) for p in PROXY_PREFIXES):
            return self._proxy(self.path)

        # Default handler (directory listing or 404)
        super().do_GET()

    def _serve_local(self, file_path):
        ext = os.path.splitext(file_path)[1].lower()
        content_type = MIME_TYPES.get(ext, "application/octet-stream")
        with open(file_path, "rb") as f:
            data = f.read()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(data)

    def _serve_html(self, file_path):
        with open(file_path, "rb") as f:
            data = f.read()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.end_headers()
        self.wfile.write(data)

    def _serve_next_image(self):
        """Decode /_next/image?url=<encoded-path> and serve local file."""
        qs = urllib.parse.urlparse(self.path).query
        params = urllib.parse.parse_qs(qs)
        url_param = params.get("url", [""])[0]
        if not url_param:
            return self._proxy(self.path)

        # url_param is a URL-encoded local path like /tge/kpi/1.png
        local_path_rel = url_param.lstrip("/")
        local_path = os.path.join(DIRECTORY, local_path_rel)

        if os.path.isfile(local_path):
            ext = os.path.splitext(local_path)[1].lower()
            content_type = MIME_TYPES.get(ext, "application/octet-stream")
            with open(local_path, "rb") as f:
                data = f.read()
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "public, max-age=31536000, immutable")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(data)
        else:
            # Proxy to megaeth.com image optimizer
            self._proxy(self.path)

    def _proxy(self, path):
        url = PROXY_ORIGIN + path
        try:
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
                    "Accept": "*/*",
                    "Referer": PROXY_ORIGIN,
                }
            )
            with urllib.request.urlopen(req, timeout=15) as resp:
                content = resp.read()
                content_type = resp.headers.get("Content-Type", "application/octet-stream")
                self.send_response(200)
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Length", str(len(content)))
                self.send_header("Cache-Control", "public, max-age=31536000, immutable")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(content)
        except Exception as e:
            self.send_response(502)
            self.send_header("Content-Type", "text/plain")
            self.end_headers()
            self.wfile.write(f"Proxy error for {path}: {e}".encode())

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()
