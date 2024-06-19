class Maze {
    constructor() {
        this.map = MAZE;
    }

    drawMap() {
        let divMaze = document.getElementById("maze");
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
                divLine.appendChild(divCell);
            }
            divMaze.appendChild(divLine);
        }
    }
}