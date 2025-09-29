function setCanvasHeightWidth() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    canvas.width = windowWidth;
    canvas.height = windowHeight;
}

window.onresize = setCanvasHeightWidth;