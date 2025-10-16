const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let windowHeight, windowWidth;

let framePerSecond = 60;
let framePerSecondInMillisecond;

let playerName = "player";

let playerViewpointX, playerViewpointY;

let rendOffsetSpeed = 0.2;
let rendXOffset = 0, rendYOffset = 0;
let rendTargetX = 0, rendTargetY = 0;

let gameBuildingList = {};
let rendBuildingList = {};

let gameEntityList = {};
let rendEntityList = {};

let rendRatio = 1;

let keySet = {};