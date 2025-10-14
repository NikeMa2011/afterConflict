setCanvasHeightWidth();
calcFramePerSecondAndSetMilliSecond();

let crosshair = new setCrosshair();

ctx.font = 20 * rendRatio + "px sans-senif";

loadObjects();

console.log(playerPlatform)

console.log(level.foo());

level.load("test");

runTick();