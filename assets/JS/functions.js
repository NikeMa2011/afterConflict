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

function drowBackground() {
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

    this.color = "#fffff";
}

function setRendObjectsInCanvasList() {
    rendBuildingList = [];
    rendItemList = [];
    rendEntityList = [];

    for (let name in gameBuildingList) {
        if (gameBuildingList[name].x + gameBuildingList[name].width >= playerViewpointX - windowWidth && gameBuildingList[name].x - gameBuildingList[name].width <= playerViewpointX + windowWidth) {
            if (gameBuildingList[i].y + gameBuildingList[i].height >= playerViewpointY - windowHeight && gameBuildingList[name].y - gameBuildingList[name].height <= playerViewpointY + windowHeight) {
                rendBuildingList[name] = gameBuildingList[name];
            }
        }
    }

    for (let name in gameItemList) {
        if (gameItemList[name].x + gameItemList[name].width >= playerViewpointX - windowWidth && gameItemList[name].x - gameItemList[name].width <= playerViewpointX + windowWidth) {
            if (gameItemList[name].y + gameItemList[name].height >= playerViewpointY - windowHeight && gameItemList[name].y - gameItemList[name].height <= playerViewpointY + windowHeight) {
                rendEntityList[name] = gameItemList[name];
            }
        }
    }

    for (let name in gameEntityList) {
        if (gameEntityList[name].x + gameEntityList[name].width >= playerViewpointX - windowWidth && gameEntityList[name].x - gameEntityList[name].width <= playerViewpointX + windowWidth) {
            if (gameEntityList[name].y + gameEntityList[name].height >= playerViewpointY - windowHeight && gameEntityList[name].y - gameEntityList[name].height <= playerViewpointY + windowHeight) {
                rendItemList[name] = gameEntityList[name];
            }
        }
    }
}

function drowBuilding() {
    for (let name in rendBuildingList) {
        ctx.fillStyle = rendBuildingList[name].color;

        ctx.fillRect(rendXOffset - (rendBuildingList[name].width / 2) - (playerViewpointX - rendBuildingList[name].x), rendYOffset - (rendBuildingList[name].height / 2) - (playerViewpointY - rendBuildingList[name].y), rendBuildingList[name].width, rendBuildingList[name].height);
    }
}

function drowItem() {
    for (let name in rendItemList) {
        ctx.fillStyle = rendItemList[name].color;

        ctx.fillRect(rendXOffset - (rendItemList[name].width / 2) - (playerViewpointX - rendItemList[name].x), rendYOffset - (rendItemList[name].height / 2) - (playerViewpointY - rendItemList[name].y), rendItemList[name].width, rendItemList[name].height);
    }
}

function drowEntity() {
        for (let name in rendEntityList) {
        ctx.fillStyle = rendEntityList[name].color;

        ctx.fillRect(rendXOffset - (rendEntityLsist[name].width / 2) - (playerViewpointX - rendEntityList[name].x), rendYOffset - (rendEntityList[name].height / 2) - (playerViewpointY - rendEntityList[name].y), rendEntityList[name].width, rendEntityList[name].height);
    }
}

function drowCrosshair() {
    ctx.fillStyle = crosshair.color;

    ctx.fillRect(crosshair.x - (crosshair.size / 2), crosshair.y - (crosshair.thickness / 2), crosshair.size, crosshair.thickness);
    ctx.fillRect(crosshair.x - (crosshair.thickness / 2), crosshair.y - (crosshair.size / 2), crosshair.thickness, crosshair.size);
}

function drowPlayerInformation() {
    ctx.fillStyle = "#ffffff";

    ctx.fillText("坐标 x: " + Math.floor(rendEntityList["player"].x / 100) + " y: " + Math.floor(rendEntityList["player"].y / 100), 10, 30);
}

function drowUI() {
    drowPlayerInformation();
}

function checkKey() {
    if (keySet["KeyA"]) {
        rendEntityList["player"].x -= 1 * rendEntityList["player"].speed;
    } else if (keySet["KeyD"]) {
        rendEntityList["player"].x += 1 * rendEntityList["player"].speed;
    } else if (keySet["KeyS"]) {
        rendEntityList["player"].y -= 1 * rendEntityList["player"].speed;
    } else if (keySet["KeyW"]) {
        rendEntityList["player"].y += 1 * rendEntityList["player"].speed;
    }
}

document.addEventListener("keydown", (event) => {
    keySet[event.code] = true;
    checkKey();
});

document.addEventListener("keyup", (event) => {
    keySet[event.code] = false;
});

window.onresize = setCanvasHeightWidth;

window.onmousemove = (event) => {
    setCrosshairPosition(event);
}

function rend() {
    setRendXY();
    setRendOffset();

    drowUI();
}

function runTick() {
    rend();

    setTimeout(() => {
        runTick();
    }, framePerSecondInMillisecond);
}