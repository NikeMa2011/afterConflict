function drowPlayer() {
    ctx.fillStyle = "#ffffff";

    ctx.fillRect(rendXOffset - (player.width / 2), rendYOffset - (player.height / 2), player.width, player.height);
}

function drowCrosshair() {
    ctx.fillStyle = crosshair.color;

    ctx.fillRect(crosshair.x - (crosshair.size / 2), crosshair.y - (crosshair.thickness / 2), crosshair.size, crosshair.thickness);
    ctx.fillRect(crosshair.x - (crosshair.thickness / 2), crosshair.y - (crosshair.size / 2), crosshair.thickness, crosshair.size);
}