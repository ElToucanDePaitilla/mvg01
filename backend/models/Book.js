// Importation du module mongoose pour interagir avec MongoDB
const mongoose = require('mongoose');

// Définition du schéma pour les livres
const bookSchema = mongoose.Schema({
    userId: { type: String, required: true }, // Identifiant de l'utilisateur ayant ajouté le livre
    title: { type: String, required: true }, // Titre du livre, obligatoire
    author: { type: String, required: true }, // Auteur du livre, obligatoire
    imageUrl: { type: String, required: true }, // URL de l'image associée au livre, obligatoire
    year: { type: Number, required: true }, // Année de publication du livre, obligatoire
    genre: { type: String, required: true }, // Genre du livre, obligatoire
    ratings: [ // Tableau des notes attribuées au livre
        {
            userId: { type: String, required: true }, // Identifiant de l'utilisateur ayant attribué la note
            grade: { type: Number, required: true } // Note donnée au livre, obligatoire
        }
    ],
    averageRating: { type: Number, default: 0 } // Note moyenne calculée automatiquement, par défaut 0
});

// Exportation du modèle Book basé sur le schéma défini
module.exports = mongoose.model('Book', bookSchema);
