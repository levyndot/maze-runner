document.addEventListener('DOMContentLoaded', function () {
    const game = new Game();

    // Dessine graphiquement le labyrinth
    game.drawMap();

    // Pour écouter les touches du clavier
    document.addEventListener(
        // Pour l'évènement "touche appuyée"
        "keydown",
        // J'exécute cette fonction
        (event) => {
            // Je récupère le nom de la clé qui a été appuyée
            const keyName = event.key;

            if (keyName === "ArrowLeft") { // Si c'est la touche directionnelle "flèche de gauche"
                game.movePlayer(DIR_LEFT);
            } else if (keyName === "ArrowRight") { // Si c'est la touche directionnelle "flèche de droite"
                game.movePlayer(DIR_RIGHT);
            } else if (keyName === "ArrowDown") { // Si c'est la touche directionnelle "flèche du bas"
                game.movePlayer(DIR_DOWN);
            } else if (keyName === "ArrowUp") { // Si c'est la touche directionnelle "flèche de haut"
                game.movePlayer(DIR_UP)
            }
        },
        false,
    );
});