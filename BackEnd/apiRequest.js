// bibliothèque axios pour effectuer des requêtes HTTP
const axios = require('axios');

// Effectuer une requête GET à l'API Trefle en utilisant le token et l'entrée utilisateur
function searchPlants(token, userInput) {
  return axios.get(`https://trefle.io/api/v1/plants?token=${token}&page=1&filter[family_common_name]=${userInput}`)
    .then(async response => {
      // Récupération des données
      const plantData = response.data.data;

      // Créer un tableau pour stocker les informations complètes de toutes les plantes
      const allPlantInfo = [];

      // Récupération de l'id plante
      for (const plant of plantData) {
        const plantId = plant.id;

        // Effectuer la deuxième requête pour obtenir les informations complètes de la plante par ID
        const plantInfoResponse = await axios.get(`https://trefle.io/api/v1/plants/${plantId}?token=${token}&page=1`);
        const plantInfoData = plantInfoResponse.data.data;

        // Récupération des données
        const simplifiedData = {
          scientific_name: plantInfoData.scientific_name,
          year: plantInfoData.year,
          observations: plantInfoData.main_species.observations,
          genus_name: plantInfoData.genus.name,
        };

        // Ajouter les informations au tableau
        allPlantInfo.push(simplifiedData);
      }

      return allPlantInfo;
    })
}

// Exporter la fonction searchPlants pour qu'elle puisse être utilisée ailleurs dans le code
module.exports = searchPlants;
