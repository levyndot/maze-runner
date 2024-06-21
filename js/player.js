class Player {
    constructor() {
        this.position = [0, 0];
        this.direction = [1, 0];
        this.hasKey = false;
    };

    moveLeft() {
        this.position = [this.position[0] - 1, this.position[1]];
        this.direction = [-1, 0];
    }
    moveRight() {
        this.position = [this.position[0] + 1, this.position[1]];
        this.direction = [1, 0];
    }
    moveUp() {
        this.position = [this.position[0], this.position[1] - 1];
        this.direction = [0, -1];
    }
    moveDown() {
        this.position = [this.position[0] - 1, this.position[1] + 1];
        this.direction = [0, 1];
    }
}