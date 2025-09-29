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
    ctx.fillStyle = "#000000";
    
    ctx.fillRect(0, 0, windowWidth, windowHeight);
}

function rend() {
    drowBackground();
}

function runTick() {
    rend();
    
    setTimeout(() => {
        runTick();
    }, framePerSecondInMillisecond);
}

window.onresize = setCanvasHeightWidth;