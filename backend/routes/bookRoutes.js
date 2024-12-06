const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Obtenir tous les livres
router.get('/', bookController.getAllBooks);

// Obtenir un livre par ID
router.get('/:id', bookController.getBookById);

// Obtenir les 3 livres les mieux notés
router.get('/bestrating', bookController.getBestRatedBooks);

// Ajouter un livre
router.post('/', bookController.createBook);

// Modifier un livre
router.put('/:id', bookController.updateBook);

// Supprimer un livre
router.delete('/:id', bookController.deleteBook);

// Noter un livre
router.post('/:id/rating', bookController.rateBook);

module.exports = router;
