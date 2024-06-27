class Zombie {
    constructor(game) {
        this.position = [12, 7];
        this.direction = 0;
        this.forbidenDirection = -1;
        this.game = game;
    };
    moveLeft() {
        this.position = [this.position[0] - 1, this.position[1]];
        this.direction = 0;
    }
    moveRight() {
        this.position = [this.position[0] + 1, this.position[1]];
        this.direction = 1;
    }
    moveUp() {
        this.position = [this.position[0], this.position[1] - 1];
        this.direction = 1;
    }
    moveDown() {
        this.position = [this.position[0], this.position[1] + 1];
        this.direction = 0;
    }

    getPossibleDirections(map, doors) {
        const possibilities = [
            map[this.position[Y] - 1][this.position[X]] === FLOOR && !this.game.isDoorPosition(this.position[X], this.position[Y] - 1),
            map[this.position[Y] + 1][this.position[X]] === FLOOR && !this.game.isDoorPosition(this.position[X], this.position[Y] + 1),
            map[this.position[Y]][this.position[X] + 1] === FLOOR && !this.game.isDoorPosition(this.position[X] + 1, this.position[Y]),
            map[this.position[Y]][this.position[X] - 1] === FLOOR && !this.game.isDoorPosition(this.position[X] - 1, this.position[Y])
        ];

        let availableDirections = [];
        possibilities.forEach((isPossible, index) => {
            if (isPossible && index !== this.forbidenDirection) {
                availableDirections.push(index);
            }
        });

        return availableDirections;
    }

    canGoTo(map, direction) {
        const possibilities = this.getPossibleDirections(map);
        if (possibilities.length === 0) {
            this.forbidenDirection = -1;
        }
        return possibilities.includes(direction);
    }
}