const X = 0;
const Y = 1;

const WALL = 1;
const FLOOR = 0;
const PLAYER = 2;
const DOOR = 3
const KEY = 4
const ZOMBIE = 5

const UP = 0;
const DOWN = 1;
const RIGHT = 2;
const LEFT = 3;

const MAZE = [
    [WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL],
    [WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL],
    [WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL],
    [WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL,FLOOR,ZOMBIE,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,WALL ,WALL ,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL],
    [WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,FLOOR,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL],
    [WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,FLOOR,WALL],
    [WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL],
    [WALL ,FLOOR,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,FLOOR,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,WALL ,WALL],
    [WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL],
    [WALL ,WALL ,WALL ,DOOR ,WALL ,FLOOR,WALL ,WALL ,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,WALL ,WALL ,FLOOR,WALL ,WALL ,WALL],
    [WALL ,FLOOR,PLAYER,KEY ,WALL ,FLOOR,FLOOR,FLOOR,WALL ,FLOOR,WALL ,FLOOR,WALL ,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,FLOOR,WALL],
    [WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL ,WALL]
];
