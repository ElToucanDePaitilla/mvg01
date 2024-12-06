// Importer le module 'http' qui permet de créer un serveur HTTP
const http = require('http');

// Importer l'application Express à partir d'un fichier externe nommé 'app'
// Ce fichier 'app' doit exporter une instance d'application Express
const app = require('./app');

// Définir le port sur lequel le serveur va écouter les requêtes
const PORT = 3000;

// Créer un serveur HTTP en utilisant l'application Express comme gestionnaire de requêtes
const server = http.createServer(app);

// Démarrer le serveur et l'écouter sur le port spécifié
server.listen(PORT, () => {
  // Une fois que le serveur est démarré, afficher un message dans la console pour confirmer
  console.log(`Serveur démarré sur le port ${PORT}`);
});
