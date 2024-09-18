const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code
  res.setHeader('Content-Type', 'text/plain'); // Content type
  res.end('Hello Holberton School!'); // Response body
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
