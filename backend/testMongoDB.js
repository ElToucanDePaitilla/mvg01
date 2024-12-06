const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://JLB-mvg:_MVG-jlb_@cluster0.zef21.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.error('Erreur de connexion à MongoDB :', error));
