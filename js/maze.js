class Maze {
    constructor() {
        this.map = MAZE;
        this.player = {
            position: [2,19],
            direction: [1, 0],
            hasKey: false
        };
        document.addEventListener(
            "keydown",
            (event) => {
                const keyName = event.key;

                console.log(keyName);
                if (keyName ==="ArrowLeft"){
                    if (this.map[this.player.position[Y]][this.player.position[X]-1] === WALL ||
                        this.map[this.player.position[Y]][this.player.position[X]-1] === DOOR){
                        console.log("nn mon chef")
                    }
                    else{
                        console.log("tu peux passer");
                        this.map[this.player.position[Y]][this.player.position[X]] = FLOOR;
                        this.map[this.player.position[Y]][this.player.position[X]-1] = PLAYER;
                        this.player.position[X] = this.player.position[X]-1;
                        this.playerDirection = [-1, 0];
                        this.drawMap();
                    }
                }
                else if(keyName ==="ArrowRight"){
                    if (this.map[this.player.position[Y]][this.player.position[X]+1] === WALL ||
                        this.map[this.player.position[Y]][this.player.position[X]+1] === DOOR){
                        console.log("nn mon chef")
                    }
                    else{
                        console.log("tu peux passer")
                        this.map[this.player.position[Y]][this.player.position[X]] = FLOOR;
                        this.map[this.player.position[Y]][this.player.position[X]+1] = PLAYER;
                        this.player.position[X] = this.player.position[X]+1;
                        this.playerDirection = [1, 0];
                        this.drawMap();

                    }
                }
                else if(keyName ==="ArrowDown"){
                    if (this.map[this.player.position[Y]+1][this.player.position[X]] === WALL ||
                        this.map[this.player.position[Y]+1][this.player.position[X]] === DOOR){
                        console.log("nn mon chef")
                    }
                    else{
                        console.log("tu peux passer")
                        this.map[this.player.position[Y]][this.player.position[X]] = FLOOR;
                        this.map[this.player.position[Y]+1][this.player.position[X]] = PLAYER;
                        this.player.position[Y] = this.player.position[Y]+1;
                        this.playerDirection = [0,1];
                        this.drawMap();

                    }
                }
                else if(keyName ==="ArrowUp"){
                    if (this.map[this.player.position[Y]-1][this.player.position[X]] === WALL ||
                        this.map[this.player.position[Y]-1][this.player.position[X]] === DOOR){
                        console.log("nn mon chef")
                    }
                    else{
                        console.log("tu peux passer")
                        this.map[this.player.position[Y]][this.player.position[X]] = FLOOR;
                        this.map[this.player.position[Y]-1][this.player.position[X]] = PLAYER;
                        this.player.position[Y] = this.player.position[Y]-1;
                        this.playerDirection = [0,-1];
                        this.drawMap();
                    }
                }
            },
            false,
        );
    }
    i

    drawMap() {
        // On récupère la div avec l'id "maze"
        let divMaze = document.getElementById("maze");
        // On vide le contenu de la div "#maze"
        while (divMaze.firstChild) {
            divMaze.removeChild(divMaze.lastChild);
        }
        // On parcours la map et on dessine le labyrinth
        for (let line of this.map) {
            let divLine =  document.createElement("div");

            for (let cell of line) {
                let divCell =  document.createElement("div");
                if(cell === FLOOR){
                    divCell.classList.add("floor");
                }
                else if (cell === WALL){
                    divCell.classList.add("wall");
                }
                else if (cell === PLAYER){
                    divCell.classList.add("player");
                    if(this.playerDirection[X] === 1) {
                        divCell.classList.add("player-right");
                    } else if(this.playerDirection[X] === -1) {
                        divCell.classList.add("player-left");
                    } else if(this.playerDirection[Y] === 1) {
                        divCell.classList.add("player-up");
                    } else if(this.playerDirection[Y] === -1) {
                        divCell.classList.add("player-down");
                    }
                }
                else if (cell === DOOR) {
                    divCell.classList.add("door");
                }
                else if (cell === KEY) {
                    divCell.classList.add("key");
                }
                else if (cell === ZOMBIE) {
                    divCell.classList.add("zombie");
                    divCell.classList.add("zombie-right");
                }
                divLine.appendChild(divCell);
            }
            divMaze.appendChild(divLine);
        }
    }
}