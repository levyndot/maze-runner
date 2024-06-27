class Player {
    constructor() {
        this.position = [1, 19];
        this.direction = DIR_RIGHT;
        this.nbKey = 0;
    };

    moveLeft() {
        this.position = [this.position[0] - 1, this.position[1]];
        this.direction = DIR_LEFT;
    }
    moveRight() {
        this.position = [this.position[0] + 1, this.position[1]];
        this.direction = DIR_RIGHT;
    }
    moveUp() {
        this.position = [this.position[0], this.position[1] - 1];
        this.direction = DIR_UP;
    }
    moveDown() {
        this.position = [this.position[0], this.position[1] + 1];
        this.direction = DIR_DOWN;
    }
}