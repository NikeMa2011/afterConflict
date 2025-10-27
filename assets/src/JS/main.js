const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const title = document.querySelector("title");

let gameVersion = "beta v0.2.0";

let windowHeight, windowWidth;

let framePerSecond = 60;
let framePerSecondInMillisecond;

let playerName = "player";

let playerViewpointX, playerViewpointY;

let rendOffsetSpeed = 0.2;
let rendXOffset = 0, rendYOffset = 0;
let rendTargetX = 0, rendTargetY = 0;

let gameObjectList = {};

let gameBuildingList = {};
let rendBuildingList = {};

let gameEntityList = {};
let rendEntityList = {};

let rendRatio = 1;

let keySet = {};