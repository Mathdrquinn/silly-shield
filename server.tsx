import { createServer } from 'http';
import { default as next } from 'next';
import { join } from 'path';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const rootStaticFiles = ['static/robots.txt', '/sitemap.xml', '/favicon.ico'];
        if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
            const path = join(__dirname, 'static', parsedUrl.pathname);
            app.serveStatic(req, res, path);
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen((port, err) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:${port}`);
    })
});