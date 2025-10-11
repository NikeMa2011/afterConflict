const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let windowHeight, windowWidth;

let framePerSecond = 60;
let framePerSecondInMillisecond;

let player, crosshair;

let rendOffsetSpeed = 0.2;
let rendXOffset = 0, rendYOffset = 0;
let rendTargetX = 0, rendTargetY = 0;

mobList = [];

let rendRatio = 1;

let keySet = {};