// 定义
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "48px serif";

let windowHeight, windowWidth;
const pointerHeight = 30, pointerWidth = 4;
const peopleHeight = 100, peopleWidth = 50;
const playersPlatformHeight = 500, playersPlatformWifth = 500;

const lastestEdition = "2025-1-25";
let debugMode = false;
let language = "english";

let mouseX, mouseY;
let positionX = 0, positionY = 0;
let showPositionX, showPositionY;
let playersPlatformX = 0, playersPlatformY = 0;
let offSetX, offSetY;

let inventoryOpen = false;

// 函数
function calcSize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    canvas.height = windowHeight;
    canvas.width = windowWidth;
}
function clacPosition(event) {
    if(event.key == 'w') positionY += 8;
    else if(event.key == 'a') positionX += 8;
    else if(event.key == 's') positionY -= 8;
    else if(event.key == 'd') positionX -= 8;
    showPositionX = Math.trunc(positionX / 10);
    showPositionY = Math.trunc(positionY / 10);
}
function inventory() {
    if(!inventoryOpen) {
        inventoryOpen = true;
    } else {
        inventoryOpen = false;
    }
    inventoryOpenCout();
}

// 监听事件
window.onresize = () => {
    calcSize();
    reSizeCout();
};
window.onmousemove = (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
    offSetX = windowWidth - mouseX;
    offSetY = windowHeight - mouseY;
};
window.onkeydown = (event) => {
    if(debugMode) pressKeyCout(event.key);
    if(event.key == 'w','a','s','d') clacPosition(event);
    else if(event.key == 'e') inventory();
}

// 主要渲染
function drawPlayersPlatform() {
    playersPlatformX = positionX + offSetX - (playersPlatformWifth / 2);
    playersPlatformY = positionY + offSetY - (playersPlatformHeight / 2);
    if(playersPlatformX < windowWidth || playersPlatformY < windowHeight) {
        ctx.fillStyle = "#6d6d20";
        ctx.fillRect(playersPlatformX, playersPlatformY, playersPlatformHeight, playersPlatformWifth);
    }
}
function render() {
    if(!inventoryOpen) {
    ctx.clearRect(0, 0, windowWidth, windowHeight);

    ctx.fillStyle = "#123456";
    ctx.fillRect(0, 0, windowWidth, windowHeight);

    drawPlayersPlatform();
    
    ctx.fillStyle = "#ffffff";
    ctx.fillText(("X = " + showPositionX + " Y = " + showPositionY), 30, 40);
    if(debugMode) {
        ctx.fillText("debugMode on:", 30, 55);
        ctx.fillText(("offSets: X = " + offSetX + " Y = " + offSetY), 40, 65);
        ctx.fillText(("playersPlatform: X = " + playersPlatformX + " Y = " + playersPlatformY), 40, 75);
    }
    ctx.fillRect(offSetX - (peopleWidth / 2), offSetY - (peopleHeight / 2), peopleWidth, peopleHeight);
    ctx.fillRect(mouseX - (pointerWidth / 2), mouseY - (pointerHeight / 2), pointerWidth, pointerHeight);
    ctx.fillRect(mouseX - (pointerHeight / 2), mouseY - (pointerWidth / 2), pointerHeight, pointerWidth);
    }
}

calcSize();
clacPosition(window.Event);

setInterval("render()", 25); // 1000 / 25 = 40帧