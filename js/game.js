class Game {
    constructor() {
        this.start = true
        this.map = MAZE;
        this.player = new Player();
        this.zombie = new Zombie();
        // Init player and zombie position
        // On parcourt la map et on dessine le labyrinth
        this.map.forEach((line, indexLine) => {
            line.forEach((cell, indexCell) => {
                if (cell === PLAYER) {
                    // On récupère la position du joueur
                    this.player.position = [indexCell, indexLine];
                } else if (cell === ZOMBIE) {
                    // On récupère la position du zombie
                    this.zombie.position = [indexCell, indexLine];
                }
            });
        });
    }
    drawMap() {
        // On récupère la div avec l'id "maze"
        let divMaze = document.getElementById("maze");
        // On vide le contenu de la div "#maze"
        while (divMaze.firstChild) {
            divMaze.removeChild(divMaze.lastChild);
        }
        // On parcourt la map et on dessine le labyrinth
        this.map.forEach((line) => {
            // On créé la div ligne
            let divLine = document.createElement("div");
            line.forEach((cell) => {
                // On créé la div case
                let divCell = document.createElement("div");
                if (cell === FLOOR) {
                    // On ajoute la classe "floor" a la div pour afficher le sol a l'écran
                    divCell.classList.add("floor");
                } else if (cell === WALL) {
                    // On ajoute la classe "wall" a la div pour afficher le mur a l'écran
                    divCell.classList.add("wall");
                } else if (cell === PLAYER) {
                    // On ajoute la classe "player" a la div pour afficher le joueur a l'écran
                    divCell.classList.add("player");
                    // On ajoute la classe "player-xxxx" pour que le dessin du joueur soit bien orienté
                    if (this.player.direction[X] === 1) {
                        divCell.classList.add("player-right");
                    } else if (this.player.direction[X] === -1) {
                        divCell.classList.add("player-left");
                    } else if (this.player.direction[Y] === 1) {
                        divCell.classList.add("player-up");
                    } else if (this.player.direction[Y] === -1) {
                        divCell.classList.add("player-down");
                    }
                } else if (cell === DOOR) {
                    // On ajoute la classe "door" a la div pour afficher la porte a l'écran
                    divCell.classList.add("door");
                } else if (cell === KEY) {
                    // On ajoute la classe "key" a la div pour afficher la clé a l'écran
                    divCell.classList.add("key");
                } else if (cell === ZOMBIE) {
                    // On ajoute la classe "zombie" a la div pour afficher le zombie a l'écran
                    divCell.classList.add("zombie");
                    if (this.zombie.direction === 1) {
                        // On ajoute la classe "zombie-right" a la div pour que le zombie soit de côté droite
                        divCell.classList.add("zombie-right");
                    } else if (this.zombie.direction === 0) {
                        // On ajoute la classe "zombie-right" a la div pour que le zombie soit de côté droite
                        divCell.classList.add("zombie-left");
                    }
                }
                // On ajoute la div case a la div ligne
                divLine.appendChild(divCell);
            });
            // On ajoute la ligne dans le DOM de l'HTML
            divMaze.appendChild(divLine);
        });
    }
    /**
     * Fait bouger le jouer en haut si c'est possible
     */
    movePlayerUp() {
        // Si la case en haut du joueur n'est pas un MUR OU une PORTE
        if (this.map[this.player.position[Y] - 1][this.player.position[X]] !== WALL &&
            this.map[this.player.position[Y] - 1][this.player.position[X]] !== DOOR ||
            (this.map[this.player.position[Y] - 1][this.player.position[X]] === DOOR &&
            this.player.hasKey === true))
        {
            // Si la case en haut du joueur est la clé
            if (this.map[this.player.position[Y]-1][this.player.position[X]] === KEY) {
                // Le joueur récupère la clé
                this.player.hasKey = true;
                this.player.nbKey += 1;
                document.getElementById("keysCounter").innerText = "" + this.player.nbKey;
                console.log("bravo t'as la clé")
            }
            else if(this.map[this.player.position[Y]-1][this.player.position[X]] === ZOMBIE){
                console.log("t'es mort");
                this.start = false;
            }
            else if(this.map[this.player.position[Y]-1][this.player.position[X]] === DOOR) {
                this.player.nbKey -= 1;
                if(this.player.nbKey === 0){
                    this.player.hasKey = false;
                }
                document.getElementById("keysCounter").innerText = "" + this.player.nbKey;
            }
                console.log("La voie est libre");
            // La case actuelle du joueur devient un sol
            this.map[this.player.position[Y]][this.player.position[X]] = FLOOR;
            // La case en haut du joueur devient la nouvelle position du joueur dans le labyrinth
            this.map[this.player.position[Y] - 1][this.player.position[X]] = PLAYER;
            this.player.moveUp();
        } else {
            console.log("Stop ! C'est pas possible d'aller par là");
        }
    }
    /**
     * Fait bouger le jouer en bas si c'est possible
     */
    movePlayerDown(){
        // Si la case en bas du joueur n'est pas un MUR OU une PORTE
        if (this.map[this.player.position[Y] + 1][this.player.position[X]] !== WALL &&
            this.map[this.player.position[Y] + 1][this.player.position[X]] !== DOOR ||
        (this.map[this.player.position[Y] + 1][this.player.position[X]] === DOOR &&
            this.player.hasKey === true))
        {
            // Si la case en bas du joueur est la clé
            if (this.map[this.player.position[Y]+1][this.player.position[X]] === KEY) {
                // Le joueur récupère la clé
                this.player.hasKey = true;
                this.player.nbKey += 1;
                document.getElementById("keysCounter").innerText = "" + this.player.nbKey;
                console.log("bravo t'as la clé");
            }
            else if(this.map[this.player.position[Y]+1][this.player.position[X]] === ZOMBIE){
                console.log("t'es mort");
                this.start = false;
            }
            else if(this.map[this.player.position[Y]+1][this.player.position[X]] === DOOR) {
                this.player.nbKey -= 1;

                if(this.player.nbKey === 0){
                    this.player.hasKey = false;
                }
                document.getElementById("keysCounter").innerText = "" + this.player.nbKey;
            }
            console.log("La voie est libre");
            // La case actuelle du joueur devient un sol
            this.map[this.player.position[Y]][this.player.position[X]] = FLOOR;
            // La case en bas du joueur devient la nouvelle position du joueur dans le labyrinth
            this.map[this.player.position[Y] + 1][this.player.position[X]] = PLAYER;
            this.player.moveDown();
        } else {
            console.log("Stop ! C'est pas possible d'aller par là");
        }
    }

    /**
     * Fait bouger le jouer a gauche si c'est possible
     */
    movePlayerLeft() {
        // Si la case à gauche du joueur n'est pas un MUR OU une PORTE
        if (this.map[this.player.position[Y]][this.player.position[X] - 1] !== WALL &&
            this.map[this.player.position[Y]][this.player.position[X] - 1] !== DOOR ||
            (this.map[this.player.position[Y]][this.player.position[X] - 1] === DOOR &&
                this.player.hasKey === true))
 
            {
            // Si la case à gauche du joueur est la clé
            if (this.map[this.player.position[Y]][this.player.position[X]-1] === KEY) {
                // Le joueur récupère la clé
                this.player.hasKey = true;
                this.player.nbKey += 1;
                document.getElementById("keysCounter").innerText = "" + this.player.nbKey;
                console.log("bravo t'as la clé");
            }
            else if(this.map[this.player.position[Y]-1][this.player.position[X]-1] === ZOMBIE){
                console.log("t'es mort");
                this.start = false;
            }
            else if(this.map[this.player.position[Y]][this.player.position[X]-1] === DOOR) {
                this.player.nbKey -= 1;
                document.getElementById("keysCounter").innerText = "" + this.player.nbKey;
            }
                if(this.player.nbKey === 0){
                    this.player.hasKey = false;
                }
            console.log("La voie est libre");
            // La case actuelle du joueur devient un sol
            this.map[this.player.position[Y]][this.player.position[X]] = FLOOR;
            // La case a gauche du joueur devient la nouvelle position du joueur dans le labyrinth
            this.map[this.player.position[Y]][this.player.position[X] - 1] = PLAYER;
            this.player.moveLeft();
        } else {
            console.log("Stop ! C'est pas possible d'aller par là");
        }
    }

    /**
     * Fait bouger le joueur à droite si c'est possible
     */
    movePlayerRight() {
        // Si la case à droite du joueur n'est pas un MUR OU une PORTE
        if (this.map[this.player.position[Y]][this.player.position[X] + 1] !== WALL &&
            this.map[this.player.position[Y]][this.player.position[X] + 1] !== DOOR ||
            (this.map[this.player.position[Y]][this.player.position[X] + 1] === DOOR &&
                this.player.hasKey === true)) {
            // Si la case à droite du joueur est la clé
            if (this.map[this.player.position[Y]][this.player.position[X]+1] === KEY) {
                // Le joueur récupère la clé
                this.player.hasKey = true;
                // ajoute 1 au compteur de clé
                this.player.nbKey += 1;
                document.getElementById("keysCounter").innerText = "" + this.player.nbKey;
                console.log("bravo t'as la clé");
            }
            else if(this.map[this.player.position[Y]][this.player.position[X]+1] === ZOMBIE){
                console.log("t'es mort");
                this.start = false;
            }
            else if(this.map[this.player.position[Y]][this.player.position[X]+1] === DOOR) {
                this.player.nbKey -= 1;
                document.getElementById("keysCounter").innerText = "" + this.player.nbKey;
            }
            if(this.player.nbKey === 0){
                this.player.hasKey = false;
            }
            console.log("La voie est libre");
            // La case actuelle du joueur devient un sol
            this.map[this.player.position[Y]][this.player.position[X]] = FLOOR;
            // La case a droite du joueur devient la nouvelle position du joueur dans le labyrinth
            this.map[this.player.position[Y]][this.player.position[X] + 1] = PLAYER;
            this.player.moveRight();
            this.drawMap();
        } else {
            console.log("Stop ! C'est pas possible d'aller par là");
        }
    }

    moveZombie() {
        let moved = false;
        while (!moved) {
            const moveTo = Math.round(3 * Math.random());
            if (moveTo !== this.zombie.forbidenDirection) {

                // La case actuelle du zombie devient un sol
                this.map[this.zombie.position[Y]][this.zombie.position[X]] = FLOOR;

                if(moveTo === RIGHT && this.zombie.canGoTo(this.map, RIGHT)) {
                    // On bouge le zombie a droite
                    this.zombie.moveRight();
                    this.zombie.forbidenDirection = LEFT;
                    moved = true;
                } else if(moveTo === LEFT && this.zombie.canGoTo(this.map, LEFT)) {
                    // On bouge le zombie a gauche
                    this.zombie.moveLeft();
                    this.zombie.forbidenDirection = RIGHT;
                    moved = true;
                } else if(moveTo === DOWN && this.zombie.canGoTo(this.map, DOWN)) {
                    // On bouge le zombie en bas
                    this.zombie.moveDown();
                    this.zombie.forbidenDirection = UP;
                    moved = true;
                } else if(moveTo === UP && this.zombie.canGoTo(this.map, UP)) {
                    // On bouge le zombie en haut
                    this.zombie.moveUp();
                    this.zombie.forbidenDirection = DOWN;
                    moved = true;
                }
            }

            // La case a droite du zombie devient la nouvelle position du zombie dans le labyrinth
            this.map[this.zombie.position[Y]][this.zombie.position[X]] = ZOMBIE;
        }
    }
}
