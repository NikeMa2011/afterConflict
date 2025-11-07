function setCanvasFontSize() {

    ctx.font = 16 * rendRatio + "px sans-senif";
}

function setCrosshairPosition(event) {
    crosshair.x = event.clientX;
    crosshair.y = event.clientY;
}

function setRendTargetXY() {
    rendTarget.x = windowSize.width - crosshair.x;
    rendTarget.y = windowSize.height - crosshair.y;
}

function setRendOffset() {
    rendOffset.x += (rendTarget.x - rendOffset.x) * rendOffset.speed;
    rendOffset.y += (rendTarget.y - rendOffset.y) * rendOffset.speed;
}

function setCanvasHeightWidth() {
    windowSize.width = window.innerWidth;
    windowSize.height = window.innerHeight;

    canvas.width = windowSize.width;
    canvas.height = windowSize.height;
}

function calcFramePerSecondAndSetMilliSecond() {
    framePerSecondInMillisecond = Math.floor(1000 / framePerSecond);
}

function drawBackground() {
    ctx.fillStyle = "#202020";

    ctx.fillRect(0, 0, windowSize.width, windowSize.height);
}

function setPlayerViewpointXY() {
    playerViewpoint.x = gameObjectList["player"].x;
    playerViewpoint.y = gameObjectList["player"].y;
}

function setRendObjectList() {
    rendSceneList = {};
    rendEntityList = {};

    for (let name in gameObjectList) {
        if (
            gameObjectList[name].x + gameObjectList[name].width >= playerViewpoint.x - windowSize.width &&
            gameObjectList[name].x - gameObjectList[name].width <= playerViewpoint.x + windowSize.width &&
            gameObjectList[name].y + gameObjectList[name].height >= playerViewpoint.y - windowSize.height &&
            gameObjectList[name].y - gameObjectList[name].height <= playerViewpoint.y + windowSize.height
        ) {
            if (gameObjectList[name].objectType == "entity") {
                rendEntityList[name] = gameObjectList[name];
            } else if (gameObjectList[name].objectType == "scene") {
                rendSceneList[name] = gameObjectList[name];
            }
        }
    }
}

function drawScene() {
    for (let name in rendSceneList) {
        ctx.fillStyle = rendSceneList[name].color;

        ctx.fillRect(
            rendOffset.x - (rendSceneList[name].width / 2) - (playerViewpoint.x - rendSceneList[name].x),
            rendOffset.y - (rendSceneList[name].height / 2) - (rendSceneList[name].y - playerViewpoint.y),
            rendSceneList[name].width,
            rendSceneList[name].height
        );
    }
}

function drawEntity() {
    for (let name in rendEntityList) {
        ctx.fillStyle = rendEntityList[name].color;

        ctx.fillRect(
            rendOffset.x - (rendEntityList[name].width / 2) - (playerViewpoint.x - rendEntityList[name].x),
            rendOffset.y - (rendEntityList[name].height / 2) - (rendEntityList[name].y - playerViewpoint.y),
            rendEntityList[name].width,
            rendEntityList[name].height
        );
    }
}

function drawCrosshair() {
    ctx.fillStyle = crosshair.color;

    ctx.fillRect(
        crosshair.x - (crosshair.size / 2),
        crosshair.y - (crosshair.thickness / 2),
        crosshair.size,
        crosshair.thickness
    );
    ctx.fillRect(
        crosshair.x - (crosshair.thickness / 2),
        crosshair.y - (crosshair.size / 2),
        crosshair.thickness,
        crosshair.size
    );
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
    setCanvasFontSize();
}

window.onmousemove = (event) => {
    setCrosshairPosition(event);
}

function rendGame() {
    drawBackground();

    drawScene();
    drawEntity();

    drawCrosshair();

    drawUI();
}

function runGameTick() {
    checkKey();

    setRendTargetXY();
    setRendOffset();

    setPlayerViewpointXY();

    setRendObjectList();

    rendGame();

    requestAnimationFrame(runGameTick);
}