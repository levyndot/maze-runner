class Game {
    constructor() {
        this.initialisation();

    }

    initialisation(){
        this.map = [...MAZE];
        this.keys = [
            [3, 13],
            [19, 17],
            [1, 15],
        ];
        this.doors = [
            [8, 15],
            [11, 8],
            [17, 8],
        ];
        this.finishPoint = [
            19,1
        ]
        this.player = new Player();
        this.zombie = new Zombie(this);

        this.moveZombieInterval = window.setInterval(() => {
            this.moveZombie();
        }, 500);
        this.drawMapInterval = window.setInterval(() => {
            this.drawMap();
        }, 10);
        document.getElementById("gameover").classList.add("invisible");
        document.getElementById("newGame").addEventListener("click", () => {
            this.initialisation();
        });
    }

    gameOver() {
        window.clearInterval(this.drawMapInterval);
        window.clearInterval(this.moveZombieInterval);
    }
    finish(){
        window.clearInterval(this.drawMapInterval);
        window.clearInterval(this.moveZombieInterval);
    }
    drawMap() {
        // On récupère la div avec l'id "maze"
        let divMaze = document.getElementById("maze");
        // On vide le contenu de la div "#maze"
        while (divMaze.firstChild) {
            divMaze.removeChild(divMaze.lastChild);
        }
        // On parcourt la map et on dessine le labyrinth
        this.map.forEach((line, lineIndex) => {
            // On créé la div ligne
            let divLine = document.createElement("div");
            line.forEach((cell, cellIndex) => {
                // On créé la div case
                let divCell = document.createElement("div");
                if(this.player.position[X] === cellIndex && this.player.position[Y] === lineIndex) {
                    // On ajoute la classe "player" a la div pour afficher le joueur a l'écran
                    divCell.classList.add("player");
                    // On ajoute la classe "player-xxxx" pour que le dessin du joueur soit bien orienté
                    if (this.player.direction[X] === 1) {
                        divCell.classList.add("player-right");
                    }
                     else if (this.player.direction[X] === -1) {
                        divCell.classList.add("player-left");
                    }
                     else if (this.player.direction[Y] === 1) {
                        divCell.classList.add("player-up");
                    }
                     else if (this.player.direction[Y] === -1) {
                        divCell.classList.add("player-down");
                    }
                } else if(this.zombie.position[X] === cellIndex && this.zombie.position[Y] === lineIndex) {
                    // On ajoute la classe "zombie" a la div pour afficher le zombie a l'écran
                    divCell.classList.add("zombie");
                    if (this.zombie.direction === 1) {
                        // On ajoute la classe "zombie-right" a la div pour que le zombie soit de côté droite
                        divCell.classList.add("zombie-right");
                    }
                    else if (this.zombie.direction === 0) {
                        // On ajoute la classe "zombie-right" a la div pour que le zombie soit de côté droite
                        divCell.classList.add("zombie-left");
                    }
                }
                else if (this.isDoorPosition(cellIndex, lineIndex)) {
                    // On ajoute la classe "door" a la div pour afficher la porte a l'écran
                    divCell.classList.add("door");
                } else if (this.isKeyPosition(cellIndex, lineIndex)) {
                    // On ajoute la classe "key" a la div pour afficher la clé a l'écran
                    divCell.classList.add("key");
                }else if(this.finishPoint[X] === cellIndex && this.finishPoint[Y] === lineIndex){
                    divCell.classList.add("finish");
                }else if (cell === FLOOR) {
                    // On ajoute la classe "floor" a la div pour afficher le sol a l'écran
                    divCell.classList.add("floor");
                } else if (cell === WALL) {
                    // On ajoute la classe "wall" a la div pour afficher le mur a l'écran
                    divCell.classList.add("wall");
                }

                // On ajoute la div case a la div ligne
                divLine.appendChild(divCell);
            });
            // On ajoute la ligne dans le DOM de l'HTML
            divMaze.appendChild(divLine);
        });
    }

    isKeyPosition (x, y) {
        let found = false;
        this.keys.forEach(keyPosition => {
            if (keyPosition[X] === x && keyPosition[Y] === y) {
                found = true;
            }
        });
        return found;
    }

    pickUpKey (x, y) {
        let keyToPickUp;
        this.keys.forEach((keyPosition, index) => {
            if (keyPosition[X] === x && keyPosition[Y] === y) {
                keyToPickUp = index;
            }
        });
        this.keys.splice(keyToPickUp, 1);
        // Le joueur récupère la clé
        this.player.nbKey += 1;
        let keysContainer = document.getElementById("keysCounter");
        keysContainer.innerText = "";
        for (let i = 0; i < this.player.nbKey; i++) {
            const keyImage = document.createElement("img");
            keyImage.src = "./assets/key.png"
            keysContainer.append(keyImage);
        }
        console.log("bravo t'as la clé")
    }

    isDoorPosition (x, y) {
        let found = false;
        this.doors.forEach(doorPosition => {
            if (doorPosition[X] === x && doorPosition[Y] === y) {
                found = true;
            }
        })
        return found;
    }

    openDoor (x, y) {
        let doorToOpen;
        this.doors.forEach((doorPosition, index) => {
            if (doorPosition[X] === x && doorPosition[Y] === y) {
                doorToOpen = index;
            }
        });
        this.doors.splice(doorToOpen, 1);
        // Le joueur récupère la clé
        this.player.nbKey -= 1;
        let keysContainer = document.getElementById("keysCounter");
        keysContainer.innerText = "";
        for (let i = 0; i < this.player.nbKey; i++) {
            const keyImage = document.createElement("img");
            keyImage.src = "./assets/key.png"
            keysContainer.append(keyImage);
        }
        console.log("bravo t'as la clé")
    }

    checkPlayerAndZombieCollision() {
        if(this.player.position[X] === this.zombie.position[X] && this.player.position[Y] === this.zombie.position[Y]) {
            // si le joueur touche le zombie alors la console affiche "t'es mort"
            console.log("t'es mort");
            this.gameOver();
            document.getElementById("gameover").classList.remove("invisible");
        }
    }

    movePlayer(direction) {
        // Si la case en haut du joueur n'est pas un MUR OU une PORTE
        if (this.map[this.player.position[Y] + direction[Y]][this.player.position[X] + direction[X]] === FLOOR)
        {
            if(!this.isDoorPosition(this.player.position[X] + direction[X], this.player.position[Y] + direction[Y]) ||
                (this.isDoorPosition(this.player.position[X] + direction[X], this.player.position[Y] + direction[Y]) && this.player.nbKey > 0)) {
                console.log("La voie est libre");
                switch (direction.toString()) {
                    case DIR_RIGHT.toString():
                        this.player.moveRight();
                        break;
                    case DIR_LEFT.toString():
                        this.player.moveLeft();
                        break;
                    case DIR_DOWN.toString():
                        this.player.moveDown();
                        break;
                    case DIR_UP.toString():
                        this.player.moveUp();
                        break;
                }
                // Si la case en haut du joueur est la clé
                if (this.isKeyPosition(this.player.position[X], this.player.position[Y])) {
                    this.pickUpKey(this.player.position[X], this.player.position[Y]);
                } else if(this.isDoorPosition(this.player.position[X], this.player.position[Y])) {
                    this.openDoor(this.player.position[X], this.player.position[Y]);
                }
            }
            this.checkFinish();
            this.checkPlayerAndZombieCollision();
        } else {
            console.log("Bam le mur !!");
        }
    }

    checkFinish() {
        if(this.player.position[X] === this.finishPoint[X] && this.player.position[Y] === this.finishPoint[Y]) {
            // si le joueur touche le zombie alors la console affiche "t'es mort"
            console.log("t'as fini");
            this.finish();
            alert("Bravo champion t'as fini");
            this.initialisation();
        }
    }

    moveZombie() {
        let moved = false;
        while (!moved) {
            const moveTo = Math.round(3 * Math.random());
            if (moveTo !== this.zombie.forbidenDirection) {
                // La case actuelle du zombie devient un sol
                if(moveTo === RIGHT && this.zombie.canGoTo(this.map, RIGHT)) {
                    // On bouge le zombie a droite
                    this.zombie.moveRight();
                    this.zombie.forbidenDirection = LEFT;
                    moved = true;
                    this.checkPlayerAndZombieCollision();
                } else if(moveTo === LEFT && this.zombie.canGoTo(this.map, LEFT)) {
                    // On bouge le zombie a gauche
                    this.zombie.moveLeft();
                    this.zombie.forbidenDirection = RIGHT;
                    moved = true;
                    this.checkPlayerAndZombieCollision();
                } else if(moveTo === DOWN && this.zombie.canGoTo(this.map, DOWN)) {
                    // On bouge le zombie en bas
                    this.zombie.moveDown();
                    this.zombie.forbidenDirection = UP;
                    moved = true;
                    this.checkPlayerAndZombieCollision();
                } else if(moveTo === UP && this.zombie.canGoTo(this.map, UP)) {
                    // On bouge le zombie en haut
                    this.zombie.moveUp();
                    this.zombie.forbidenDirection = DOWN;
                    moved = true
                    this.checkPlayerAndZombieCollision();
                }
            }
        }
    }
}