function getCrosshairPosition(event) {
    crosshair.x = event.clientX;
    crosshair.y = event.clientY;
}

function setRendXY() {
    rendTargetX = windowWidth - crosshair.x;
    rendTargetY = windowHeight - crosshair.y;
}

function setRendOffset() {
    rendXOffset += Math.floor((rendTargetX - rendXOffset) * rendOffsetSpeed);
    rendYOffset += Math.floor((rendTargetY - rendYOffset) * rendOffsetSpeed);
}

function setCanvasHeightWidth() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    canvas.width = windowWidth;
    canvas.height = windowHeight;
}

function setRendOffsetMiddle() {
    rendXOffset = windowWidth / 2;
    rendYOffset = windowHeight / 2;
}

function calcFramePerSecondAndSetMilliSecond() {
    framePerSecondInMillisecond = Math.floor(1000 / framePerSecond);
}

function drowBackground() {
    ctx.fillStyle = "#202020";

    ctx.fillRect(0, 0, windowWidth, windowHeight);
}

function drowPlayer() {
    ctx.fillStyle = "#ffffff";

    ctx.fillRect(rendXOffset - (player.width / 2), rendYOffset - (player.height / 2), player.width, player.height);
}

function drowCrosshair() {
    ctx.fillStyle = crosshair.color;

    ctx.fillRect(crosshair.x - (crosshair.size / 2), crosshair.y - (crosshair.thickness / 2), crosshair.size, crosshair.thickness);
    ctx.fillRect(crosshair.x - (crosshair.thickness / 2), crosshair.y - (crosshair.size / 2), crosshair.thickness, crosshair.size);
}

function rend() {
    setRendOffset();

    drowBackground();

    drowPlayer();
    drowCrosshair();
}

function runTick() {
    rend();

    setTimeout(() => {
        runTick();
    }, framePerSecondInMillisecond);
}

window.onresize = setCanvasHeightWidth;

window.onmousemove = (event) => {
    getCrosshairPosition(event);
    setRendXY();
}