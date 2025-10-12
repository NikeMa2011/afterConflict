setCanvasHeightWidth();
calcFramePerSecondAndSetMilliSecond();



crosshair = new crosshairObject();
crosshair.setup("normal");

ctx.font = 20 * rendRatio + "px sans-senif";

runTick();