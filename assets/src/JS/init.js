title.innerHTML = "After Conflict - Github version" + gameVersion;

setCanvasHeightWidth();
calcFramePerSecondAndSetMilliSecond();

let crosshair = new setCrosshair();

setCanvasFontStyle();

loadObjects();

level.load("test");

runTick();