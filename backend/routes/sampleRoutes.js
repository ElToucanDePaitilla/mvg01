// Importer le module Express
const express = require('express');

// Créer un routeur Express pour définir des routes spécifiques
const router = express.Router();

// Importer le contrôleur qui contient les logiques métiers (fonctions) pour gérer les routes
const sampleController = require('../controllers/sampleController');

// Définir une route POST pour créer un utilisateur
// Lorsqu'une requête POST est envoyée à '/user', la fonction `createUser` du contrôleur sera exécutée
router.post('/user', sampleController.createUser);

// Définir une route POST pour créer un livre
// Lorsqu'une requête POST est envoyée à '/book', la fonction `createBook` du contrôleur sera exécutée
router.post('/book', sampleController.createBook);

// Exporter le routeur pour pouvoir l'utiliser dans d'autres fichiers de l'application
module.exports = router;
