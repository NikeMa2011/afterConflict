function setCanvasHeightWidth() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    canvas.width = windowWidth;
    canvas.height = windowHeight;
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

    ctx.fillRect(0, 0, player.width, player.height);
}

function rend() {
    drowBackground();

    drowPlayer();
}

function runTick() {
    rend();

    setTimeout(() => {
        runTick();
    }, framePerSecondInMillisecond);
}

window.onresize = setCanvasHeightWidth;