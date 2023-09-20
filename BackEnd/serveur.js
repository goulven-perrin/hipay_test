// Importation des modules
const express = require('express');
const searchPlants = require('./apiRequest');

// Création d'une instance d'Express
const app = express();
const port = process.env.PORT || 3000;
const token = 'caFONH53DlsexvlgozM0k4mEs-zfwTktF7ceIh8iOBI';
app.use(express.json());

// test API sur l'adresse http://localhost:3000
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de recherche de plantes. Utilisez /search pour effectuer une recherche en fournissant le nom de la famille en tant qu\'en-tête "family".');
});

// Point de terminaison "/search" pour rechercher des plantes par famille
app.get('/search', (req, res) => {
  // Récupération du nom de la famille depuis l'en-tête de la requête
  const familyName = req.headers.family;

  // Appel de la fonction searchPlants avec le token et le nom de la famille
  searchPlants(token, familyName)
    .then(plantData => {
      res.json(plantData);
    })
});

// Démarrage du serveur Express sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur API démarré sur le port ${port}`);
});
