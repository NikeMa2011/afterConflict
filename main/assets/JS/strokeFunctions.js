function strokeBulletLine(x1, y1, x2, y2, width) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "#ffee00";
    ctx.lineWidth = 3;
    ctx.stroke();
}