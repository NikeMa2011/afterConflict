setCanvasHeightWidth();
calcFramePerSecondAndSetMilliSecond();

player = new people(0, 0, 0, 0, null, null, null, null, null);
player.setUp("standard");

runTick();