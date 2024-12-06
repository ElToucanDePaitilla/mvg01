const express = require('express');
const router = express.Router();

// Exemple de route GET
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Route /api/test fonctionne !' });
});

module.exports = router;
