// 定义
const title = document.getElementById("title");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "48px serif";

let windowHeight, windowWidth;
const pointerHeight = 30, pointerWidth = 4;
const peopleHeight = 100, peopleWidth = 50;
const playersPlatformHeight = 500, playersPlatformWifth = 500;

const lastestEdition = "0.1.2Beta";
let debugMode = false;
let language = "english";

let mouseX, mouseY;
let positionX = 0, positionY = 0;
let showPositionX, showPositionY;
let playersPlatformX = 0, playersPlatformY = 0;
let offSetX, offSetY;

let inventoryOpen = false;

// 玩家
let health = 50, maxiumHealth = 50;
let energy = 30, maxiumEnergy = 30;
let weight = 0, maxiumWeight = 30;
let moveDistance, maxiumMoveSpeed = 10;

// 函数
function inventory() {
    if(!inventoryOpen) {
        inventoryOpen = true;
    } else if(inventoryOpen) {
        inventoryOpen = false;
    }
    if(debugMode) inventoryOpenCout();
}
// 初始化
language = localStorage.getItem("language");

if(localStorage.getItem("language") == undefined) {
    notice();
    localStorage.setItem("language", "english");
    welcome();
}


note();

calcSize();
calcPosition(window.Event);

setInterval("render()", 25); // 1000 / 25 = 40帧