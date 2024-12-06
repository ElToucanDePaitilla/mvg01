// Importation des modules nécessaires
const express = require('express'); // Framework pour créer des serveurs web
const mongoose = require('mongoose'); // Bibliothèque pour interagir avec MongoDB
const cors = require('cors'); // Middleware pour gérer les requêtes cross-origin
require('dotenv').config(); // Charger les variables d'environnement à partir d'un fichier .env

const app = express(); // Créer une application Express

// Middleware global (En Node.js avec Express, les middleware sont des fonctions qui
// traitent les requêtes HTTP avant qu'elles n'atteignent la route finale.
// Ce sont des "étapes intermédiaires" dans le traitement d'une requête.)
app.use(cors()); // Permettre les requêtes provenant d'autres domaines (cross-origin)
app.use(express.json()); // Permettre de lire et traiter les requêtes contenant du JSON

// Connexion à MongoDB
// `process.env.MONGO_URI` est lu depuis le fichier .env (par exemple : MONGO_URI=mongodb+srv://...)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, // Utiliser l'analyseur de nouvelle génération
  useUnifiedTopology: true, // Activer le nouveau moteur de gestion des connexions
})
  .then(() => console.log('Connexion à MongoDB réussie !')) // Affiche un message en cas de succès
  .catch((error) => console.error('Erreur de connexion à MongoDB :', error)); // Gère les erreurs de connexion

// Route de test principale
// Cette route est accessible via une requête GET à l'URL de base ("/")
// Elle renvoie un message JSON confirmant que le serveur fonctionne
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Connexion à MongoDB réussie et serveur opérationnel !' });
});

// Importer et utiliser des routes API supplémentaires
// `sampleRoutes` est un fichier séparé où d'autres routes sont définies
const sampleRoutes = require('./routes/sampleRoutes'); // Importer les routes définies dans le fichier sampleRoutes.js
app.use('/api', sampleRoutes); // Préfixer ces routes avec "/api" (par exemple : "/api/route1")

// Exporter l'application Express pour qu'elle puisse être utilisée ailleurs
// (par exemple, pour être démarrée dans un autre fichier comme server.js)
module.exports = app;

