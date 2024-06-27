document.addEventListener('DOMContentLoaded', function () {
    let stop = false;
    document.getElementById("stop").addEventListener("click", (event) => {
        stop = true;
    })
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
                game.movePlayerLeft();
            } else if (keyName === "ArrowRight") { // Si c'est la touche directionnelle "flèche de droite"
                game.movePlayerRight();
            } else if (keyName === "ArrowDown") { // Si c'est la touche directionnelle "flèche du bas"
                game.movePlayerDown();
            } else if (keyName === "ArrowUp") { // Si c'est la touche directionnelle "flèche de haut"
                game.movePlayerUp()
            }
        },
        false,
    );
    window.setInterval(function(){
        if (!stop)
            game.moveZombie();
    }, 500);
    window.setInterval(function(){
        game.drawMap();
        }, 10);
});