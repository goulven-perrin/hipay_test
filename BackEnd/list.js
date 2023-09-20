const axios = require('axios');
// Définir le token dans une variable
const token = '8fFX4FwH76RP4Y1GesjAJ_XP-kIXFCFqH-nkFeQWis0';

// Fonction pour effectuer la recherche et afficher toutes les informations des plantes
function searchPlants() {
    // Effectuer la recherche en utilisant l'entrée de l'utilisateur
    axios.get(`https://trefle.io/api/v1/plants?token=${token}&page=1&filter[family_common_name]=pine%20family`)
        .then(response => {
            const plantData = response.data.data;
            console.log(plantData);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la recherche de plantes :', error);
        });
}

// Démarrer la recherche initiale
searchPlants();