const express = require('express');

const app = express();

// Middleware global pour traiter les requêtes JSON
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Le serveur fonctionne correctement !' });
});

// Exporter l'application pour le fichier `server.js`
module.exports = app;
