const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Charger les variables d'environnement

const app = express();

// Middleware global
app.use(cors()); // Autoriser les requêtes cross-origin
app.use(express.json()); // Gérer les requêtes JSON

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.error('Erreur de connexion à MongoDB :', error));

// Route de test principale
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Connexion à MongoDB réussie et serveur opérationnel !' });
});


// Routes API supplémentaires (exemple avec une route test)
const sampleRoutes = require('./routes/sampleRoutes'); // Importer les routes
app.use('/api', sampleRoutes); // Préfixe pour les routes API

module.exports = app;
