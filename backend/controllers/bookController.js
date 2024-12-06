const Book = require('../models/Book'); // Importer le modèle Book

// Récupérer tous les livres
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Récupérer tous les livres dans la base de données
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un livre par ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); // Chercher le livre par ID
    if (!book) {
      return res.status(404).json({ message: 'Livre non trouvé.' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer les 3 livres les mieux notés
exports.getBestRatedBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ averageRating: -1 }).limit(3); // Trier par note moyenne descendante
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ajouter un nouveau livre
exports.createBook = async (req, res) => {
  try {
    const { userId, title, author, imageUrl, year, genre } = req.body;

    // Validation des données
    if (!userId || !title || !author || !imageUrl || !year || !genre) {
      return res.status(400).json({ message: 'Des champs obligatoires sont manquants.' });
    }

    const book = new Book({ userId, title, author, imageUrl, year, genre });
    const savedBook = await book.save(); // Enregistrer le livre dans la base
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un livre
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Livre non trouvé.' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un livre
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Livre non trouvé.' });
    }
    res.status(200).json({ message: 'Livre supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Noter un livre
exports.rateBook = async (req, res) => {
  try {
    const { userId, grade } = req.body;
    if (!userId || grade == null) {
      return res.status(400).json({ message: 'Les champs userId et grade sont obligatoires.' });
    }

    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Livre non trouvé.' });
    }

    book.ratings.push({ userId, grade });
    const totalRatings = book.ratings.reduce((sum, rating) => sum + rating.grade, 0);
    book.averageRating = totalRatings / book.ratings.length;

    const updatedBook = await book.save();
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
