"use strict";

title.innerHTML = "After Servived - Github version" + gameVersion;

setCanvasHeightWidth();
calcFramePerSecondAndSetMilliSecond();

let crosshair = new setCrosshair();

gameObjectList.length = 2000;

setCanvasFontSize();

loadObjects();

level.load("test");

runGameTick();