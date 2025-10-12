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

function calcFramePerSecondAndSetMilliSecond() {
    framePerSecondInMillisecond = Math.floor(1000 / framePerSecond);
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
}

function rend() {
    setRendXY();
    setRendOffset();


    drowUI();
}