// bibliothèque axios pour effectuer des requêtes HTTP
const axios = require('axios');

// Effectuer une requête GET à l'API Trefle en utilisant le token et l'entrée utilisateur
function searchPlants(token, userInput) {
  return axios.get(`https://trefle.io/api/v1/plants?token=${token}&page=1&filter[family_common_name]=${userInput}`)
    .then(response => {
      // Récupérer les données
      const plantData = response.data.data;
      // Retourner les données
      return plantData;
    })
}

// Exporter la fonction searchPlants pour qu'elle puisse être utilisée ailleurs dans le code
module.exports = searchPlants;