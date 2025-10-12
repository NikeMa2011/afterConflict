function drowBackground() {
    ctx.fillStyle = "#202020";

    ctx.fillRect(0, 0, windowWidth, windowHeight);
}

function setPlayerViewpointXY() {
    playerViewpointX = gameMobList["player"].x;
    playerViewpointY = gameMobList["player"].y;
}

function setRendObjectsInCanvasList() {
    rendBuildingList = [];
    rendItemList = [];
    rendMobList = [];

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
                rendMobList[name] = gameItemList[name];
            }
        }
    }

    for (let name in gameMobList) {
        if (gameMobList[name].x + gameMobList[name].width >= playerViewpointX - windowWidth && gameMobList[name].x - gameMobList[name].width <= playerViewpointX + windowWidth) {
            if (gameMobList[name].y + gameMobList[name].height >= playerViewpointY - windowHeight && gameMobList[name].y - gameMobList[name].height <= playerViewpointY + windowHeight) {
                rendItemList[name] = gameMobList[name];
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

function drowMob() {
        for (let name in rendMobList) {
        ctx.fillStyle = rendMobList[name].color;

        ctx.fillRect(rendXOffset - (rendMobLsist[name].width / 2) - (playerViewpointX - rendMobList[name].x), rendYOffset - (rendMobList[name].height / 2) - (playerViewpointY - rendMobList[name].y), rendMobList[name].width, rendMobList[name].height);
    }
}

function drowCrosshair() {
    ctx.fillStyle = crosshair.color;

    ctx.fillRect(crosshair.x - (crosshair.size / 2), crosshair.y - (crosshair.thickness / 2), crosshair.size, crosshair.thickness);
    ctx.fillRect(crosshair.x - (crosshair.thickness / 2), crosshair.y - (crosshair.size / 2), crosshair.thickness, crosshair.size);
}

function drowPlayerInformation() {
    ctx.fillStyle = "#ffffff";

    ctx.fillText("坐标 x: " + Math.floor(rendMobList["player"].x / 100) + " y: " + Math.floor(rendMobList["player"].y / 100), 10, 30);
}

function drowUI() {
    drowPlayerInformation();
}

function checkKey() {
    if (keySet["KeyA"]) {
        rendMobList["player"].x -= 1 * rendMobList["player"].speed;
    } else if (keySet["KeyD"]) {
        rendMobList["player"].x += 1 * rendMobList["player"].speed;
    } else if (keySet["KeyS"]) {
        rendMobList["player"].y -= 1 * rendMobList["player"].speed;
    } else if (keySet["KeyW"]) {
        rendMobList["player"].y += 1 * rendMobList["player"].speed;
    }
}

document.addEventListener("keydown", (event) => {
    keySet[event.code] = true;
    checkKey();
});

document.addEventListener("keyup", (event) => {
    keySet[event.code] = false;
});