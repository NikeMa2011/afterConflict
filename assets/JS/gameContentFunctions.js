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

function drowPlayerInformation() {
    ctx.fillStyle = "#ffffff";

    ctx.fillText("玩家X坐标: " + Math.floor(player.x / 100) + " 玩家Y坐标" + Math.floor(player.y / 100), 10, 30);
}

function drowUI() {
    drowPlayerInformation();
}

function checkKey() {
    if (keySet["KeyA"]) {
        player.x -= 1 * player.speed;
    } else if (keySet["KeyD"]) {
        player.x += 1 * player.speed;
    } else if (keySet["KeyS"]) {
        player.y -= 1 * player.speed;
    } else if (keySet["KeyW"]) {
        player.y += 1 * player.speed;
    }
}

document.addEventListener("keydown", (event) => {
    keySet[event.code] = true;
    checkKey();
});

document.addEventListener("keyup", (event) => {
    keySet[event.code] = false;
});