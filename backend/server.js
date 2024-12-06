const http = require('http');
const app = require('./app'); // Importer l'application Express

// Définir le port
const PORT = 3000;

// Créer et démarrer le serveur HTTP
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
