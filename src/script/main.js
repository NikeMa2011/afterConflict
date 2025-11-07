const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const title = document.querySelector("title");

let gameVersion = "beta v0.2.0.1";

let windowSize = {
    width : 0,
    height : 0
};

let framePerSecond = 60;
let framePerSecondInMillisecond;

let playerName = "player";

let playerViewpoint = {
    x : 0,
    y : 0
};

let rendOffset = {
    x : 0,
    y : 0,
    speed : 0.2
};
let rendTarget = {
    x : 0,
    y : 0
}

let gameObjectList = {};

let rendSceneList = {};
let rendEntityList = {};

let rendObjectList = {};

let rendRatio = 1;

let keySet = {};