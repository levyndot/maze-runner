const X = 0;
const Y = 1;

const FLOOR = 0;
const WALL = 1;
const FINISH = 2;

const DIR_UP = [0, -1];
const DIR_DOWN = [0, 1];
const DIR_RIGHT = [1, 0];
const DIR_LEFT = [-1, 0];

const UP = 0;
const DOWN = 1;
const RIGHT = 2;
const LEFT = 3;

const MAZE = [
    [ WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL, WALL], 
    [ WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, WALL],
    [ WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR, WALL], 
    [ WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR, WALL], 
    [ WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR, WALL], 
    [ WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR, WALL], 
    [ WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL, FLOOR, WALL], 
    [ WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, WALL], 
    [ WALL, FLOOR,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR, WALL],
    [ WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR, WALL], 
    [ WALL, FLOOR,  WALL,  WALL,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR, WALL], 
    [ WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, WALL], 
    [ WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL, FLOOR,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL, WALL], 
    [ WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, WALL],
    [ WALL, FLOOR,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL, FLOOR, WALL],
    [ WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, WALL],
    [ WALL, FLOOR,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL, FLOOR,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL,  WALL, WALL], 
    [ WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR,FLOOR, FLOOR,  FLOOR,  WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, WALL],
    [ WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL,  WALL,  WALL, FLOOR,  WALL,  WALL, WALL],
    [ WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR, FLOOR, FLOOR,  WALL, FLOOR,  WALL, FLOOR,  WALL, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, FLOOR, WALL],
    [ WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL,  WALL, WALL]
];