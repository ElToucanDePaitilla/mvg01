// Importer les modèles User et Book
const User = require('../models/User'); // Le modèle pour la collection des utilisateurs
const Book = require('../models/Book'); // Le modèle pour la collection des livres

// Contrôleur pour créer un utilisateur
exports.createUser = async (req, res) => {
  try {
    // Log pour vérifier les données reçues dans la requête
    console.log('Requête reçue avec les données :', req.body);

    // Créer une nouvelle instance de l'utilisateur avec les données reçues
    const user = new User({
      email: req.body.email, // L'email de l'utilisateur
      password: req.body.password, // Le mot de passe de l'utilisateur
    });

    // Enregistrer l'utilisateur dans la base de données
    const savedUser = await user.save();

    // Répondre avec un statut 201 (Créé) et renvoyer l'utilisateur enregistré
    res.status(201).json({ message: 'Utilisateur créé !', user: savedUser });
  } catch (error) {
    // Gérer les erreurs en cas de problème et répondre avec un statut 400 (Requête invalide)
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(400).json({ error });
  }
};

// Contrôleur pour créer un livre
exports.createBook = async (req, res) => {
  try {
    // Créer une nouvelle instance du livre avec les données reçues
    const book = new Book({
      userId: req.body.userId, // ID de l'utilisateur associé au livre
      title: req.body.title, // Titre du livre
      author: req.body.author, // Auteur du livre
      imageUrl: req.body.imageUrl, // URL de l'image du livre
      year: req.body.year, // Année de publication
      genre: req.body.genre, // Genre du livre
    });

    // Enregistrer le livre dans la base de données
    const savedBook = await book.save();

    // Répondre avec un statut 201 (Créé) et renvoyer le livre enregistré
    res.status(201).json({ message: 'Livre créé !', book: savedBook });
  } catch (error) {
    // Gérer les erreurs en cas de problème et répondre avec un statut 400 (Requête invalide)
    console.error('Erreur lors de la création du livre :', error);
    res.status(400).json({ error });
  }
};
