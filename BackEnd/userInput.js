// Importe le module 'readline' pour gérer les entrées utilisateur en ligne de commande.
const readline = require('readline');

// Crée une interface de lecture (readline) pour gérer les entrées et sorties.
const rl = readline.createInterface({
  input: process.stdin,   // Utilise le flux d'entrée standard (clavier).
  output: process.stdout  // Utilise le flux de sortie standard (console).
});

function getUserInput(callback) {
  // Utilise rl.question pour poser une question à l'utilisateur et attendre sa réponse.
  rl.question('Entrez le nom de la famille de plantes que vous souhaitez rechercher (ou tapez "exit" pour quitter) : ', userInput => {
    // Appelle la fonction de rappel avec l'entrée utilisateur en tant qu'argument.
    callback(userInput);
  });
}

// Exporte la fonction getUserInput pour qu'elle puisse être utilisée dans d'autres fichiers.
module.exports = getUserInput;
