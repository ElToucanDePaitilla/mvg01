// Importation du module mongoose pour interagir avec MongoDB
const mongoose = require('mongoose');

// Importation du plugin mongoose-unique-validator
// Ce plugin permet de s'assurer que les champs marqués comme "unique" dans le schéma le sont réellement
const uniqueValidator = require('mongoose-unique-validator');

// Définition du schéma utilisateur
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true }, // Champ pour l'email, obligatoire et unique
    password: { type: String, required: true } // Champ pour le mot de passe, obligatoire
});

// Application du plugin mongoose-unique-validator au schéma
// Ce plugin ajoute une validation supplémentaire pour les champs uniques, afin d'éviter les doublons
userSchema.plugin(uniqueValidator);

// Exportation du modèle User basé sur le schéma utilisateur
module.exports = mongoose.model('User', userSchema);
