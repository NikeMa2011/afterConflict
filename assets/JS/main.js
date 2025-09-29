const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let windowHeight, windowWidth;

let framePerSecond = 60;
let framePerSecondInMillisecond;

let player = new people(0, 0, 0, 0, null, 460, null, 700000, null);