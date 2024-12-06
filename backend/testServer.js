const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Le serveur fonctionne correctement !');
});

server.listen(3000, () => {
  console.log('Serveur minimal démarré sur le port 3000');
});
