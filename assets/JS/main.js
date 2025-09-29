const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let windowHeight, windowWidth;

let framePerSecond = 60;
let framePerSecondInMillisecond;

let player;

let positionX, positionY;
let positionXOffset, positionYOffset;

let randRatio;