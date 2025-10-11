setCanvasHeightWidth();
calcFramePerSecondAndSetMilliSecond();

player = new people(0, 0, 0, 0);
player.setup("standard");

crosshair = new crosshairObject();
crosshair.setup("normal");

setRendOffsetMiddle();

runTick();