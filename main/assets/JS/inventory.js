function inventory() {
    if (!inventoryOpen) {
        inventoryOpen = true;
    } else if (inventoryOpen) {
        inventoryOpen = false;
    }
    if (debugMode) inventoryOpenCout();
}