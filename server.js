const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = 'C:/Users/wang/OneDrive/Desktop/pingpong_project';
const MIME = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg'};
const server = http.createServer((req, res) => {
  let fp = path.join(ROOT, req.url === '/' ? 'pro.html' : req.url.replace(/^\//, ''));
  const ext = path.extname(fp);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); }
    else { res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream'}); res.end(data); }
  });
});
server.listen(8765, '127.0.0.1', () => console.log('Server ready'));
