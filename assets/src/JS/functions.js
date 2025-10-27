function setCanvasFontStyle() {
    ctx.font = 16 * rendRatio + "px sans-senif";
}

function setCrosshairPosition(event) {
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

function drawBackground() {
    ctx.fillStyle = "#202020";

    ctx.fillRect(0, 0, windowWidth, windowHeight);
}

function setPlayerViewpointXY() {
    playerViewpointX = gameEntityList["player"].x;
    playerViewpointY = gameEntityList["player"].y;
}

function setCrosshair() {
    this.size = 20;

    this.x = Math.floor(windowWidth / 2);
    this.y = Math.floor(windowWidth / 2);

    this.thickness = 2;

    this.color = "#ffffff";
}

function setRendObjectsInCanvasList() {
    rendBuildingList = {};
    rendEntityList = {};

    for (let name in gameBuildingList) {
        if (
            gameBuildingList[name].x + gameBuildingList[name].width >= playerViewpointX - windowWidth &&
            gameBuildingList[name].x - gameBuildingList[name].width <= playerViewpointX + windowWidth &&
            gameBuildingList[name].y + gameBuildingList[name].height >= playerViewpointY - windowHeight &&
            gameBuildingList[name].y - gameBuildingList[name].height <= playerViewpointY + windowHeight
        ) {
            rendBuildingList[name] = gameBuildingList[name];
        }
    }

    for (let name in gameEntityList) {
        if (
            gameEntityList[name].x + gameEntityList[name].width >= playerViewpointX - windowWidth &&
            gameEntityList[name].x - gameEntityList[name].width <= playerViewpointX + windowWidth &&
            gameEntityList[name].y + gameEntityList[name].height >= playerViewpointY - windowHeight &&
            gameEntityList[name].y - gameEntityList[name].height <= playerViewpointY + windowHeight
        ) {
            rendEntityList[name] = gameEntityList[name];
        }
    }
}

function drawBuilding() {
    for (let name in rendBuildingList) {
        ctx.fillStyle = rendBuildingList[name].color;

        ctx.fillRect(rendXOffset - (rendBuildingList[name].width / 2) - (playerViewpointX - rendBuildingList[name].x), rendYOffset - (rendBuildingList[name].height / 2) - (rendBuildingList[name].y - playerViewpointY), rendBuildingList[name].width, rendBuildingList[name].height);
    }
}

function drawEntity() {
    for (let name in rendEntityList) {
        ctx.fillStyle = rendEntityList[name].color;

        ctx.fillRect(rendXOffset - (rendEntityList[name].width / 2) - (playerViewpointX - rendEntityList[name].x), rendYOffset - (rendEntityList[name].height / 2) - (playerViewpointY - rendEntityList[name].y), rendEntityList[name].width, rendEntityList[name].height);
    }
}

function drawCrosshair() {
    ctx.fillStyle = crosshair.color;

    ctx.fillRect(crosshair.x - (crosshair.size / 2), crosshair.y - (crosshair.thickness / 2), crosshair.size, crosshair.thickness);
    ctx.fillRect(crosshair.x - (crosshair.thickness / 2), crosshair.y - (crosshair.size / 2), crosshair.thickness, crosshair.size);
}

function drawPlayerInformation() {
    ctx.fillStyle = "#ffffff";

    ctx.fillText("坐标 x: " + Math.floor(rendEntityList["player"].x / 100) + " y: " + Math.floor(rendEntityList["player"].y / 100), 10, 30);
}

function drawUI() {
    drawPlayerInformation();
}

function checkKey() {
    if (keySet["KeyA"]) {
        rendEntityList["player"].x -= 1 * rendEntityList["player"].speed;
    } if (keySet["KeyD"]) {
        rendEntityList["player"].x += 1 * rendEntityList["player"].speed;
    } if (keySet["KeyS"]) {
        rendEntityList["player"].y -= 1 * rendEntityList["player"].speed;
    } if (keySet["KeyW"]) {
        rendEntityList["player"].y += 1 * rendEntityList["player"].speed;
    }
}

document.addEventListener("keydown", (event) => {
    keySet[event.code] = true;
});

document.addEventListener("keyup", (event) => {
    keySet[event.code] = false;
});

window.onresize = () => {
    setCanvasHeightWidth();
    setCanvasFontStyle();
}

window.onmousemove = (event) => {
    setCrosshairPosition(event);
}

function rend() {
    drawBackground();

    drawBuilding();
    drawEntity();

    drawCrosshair();

    drawUI();
}

function runTick() {
    checkKey();

    setRendXY();
    setRendOffset();

    setPlayerViewpointXY();

    setRendObjectsInCanvasList();

    rend();

    requestAnimationFrame(runTick);
}