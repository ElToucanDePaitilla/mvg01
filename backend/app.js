const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importer les fichiers de routes
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.error('Erreur de connexion à MongoDB :', error));

// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

module.exports = app;

