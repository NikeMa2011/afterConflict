setCanvasHeightWidth();
calcFramePerSecondAndSetMilliSecond();



crosshair = new crosshairObject(20, Math.floor(windowWidth / 2), Math.floor(windowWidth / 2), 2, "#ffffff");

ctx.font = 20 * rendRatio + "px sans-senif";

runTick();