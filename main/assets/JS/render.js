// 函数
function calcSize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    canvas.height = windowHeight;
    canvas.width = windowWidth;
}
function calcPosition(event) {
    moveDistance = Math.trunc(maxiumMoveSpeed - (weight / maxiumWeight * 100));
    if(event.key == 'w') positionY += moveDistance;
    else if(event.key == 's') positionY -= moveDistance;
    else if(event.key == 'a') positionX += moveDistance;
    else if(event.key == 'd') positionX -= moveDistance;
    showPositionX = Math.trunc(positionX / 20);
    showPositionY = Math.trunc(positionY / 20);
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
    if (debugMode) pressKeyCout(event.key);
    
    const moveKeys = ['w', 'a', 's', 'd'];
    if (moveKeys.includes(event.key)) {
        calcPosition(event);
    } else if (event.key === 'e') {
        inventory();
    }
}

// 渲染
function drawPlayersPlatform() {
    playersPlatformX = positionX + offSetX - (playersPlatformWifth / 2);
    playersPlatformY = positionY + offSetY - (playersPlatformHeight / 2);
    if(playersPlatformX < windowWidth || playersPlatformY < windowHeight) { 
        ctx.fillStyle = "#6d6d20";
        ctx.fillRect(playersPlatformX, playersPlatformY, playersPlatformHeight, playersPlatformWifth);
    }
}
function drawInfomationUI() {
    ctx.strokeStyle = "#ffffff";
    ctx.strokeRect(30);
}
function render() {//主要执行的渲染函数
    if(!inventoryOpen) {
    ctx.clearRect(0, 0, windowWidth, windowHeight);

    ctx.fillStyle = "#123456";
    ctx.fillRect(0, 0, windowWidth, windowHeight);

    drawPlayersPlatform();
    
    ctx.fillStyle = "#ffffff";
    if(debugMode) {
        ctx.fillText(("showPisitionX = " + showPositionX + " showPositionY = " + showPositionY), 30, 40);
        ctx.fillText("Tips: Position is calculated by devide 20, and every step (no weight) is move 10 pixels", 30, 50);
        ctx.fillText(("(in pixels) positionX = " + positionX + " position Y = " + positionY), 30, 60);
        ctx.fillText("debugMode on:", 30, 75);
        ctx.fillText(("offSets: X = " + offSetX + " Y = " + offSetY), 40, 85);
        ctx.fillText(("playersPlatform: X = " + playersPlatformX + " Y = " + playersPlatformY), 40, 95);
    } else {
        ctx.fillText(("X = " + showPositionX + " Y = " + showPositionY), 30, 40);
    }
    ctx.fillRect(offSetX - (peopleWidth / 2), offSetY - (peopleHeight / 2), peopleWidth, peopleHeight);
    ctx.fillRect(mouseX - (pointerWidth / 2), mouseY - (pointerHeight / 2), pointerWidth, pointerHeight);
    ctx.fillRect(mouseX - (pointerHeight / 2), mouseY - (pointerWidth / 2), pointerHeight, pointerWidth);
    }
}