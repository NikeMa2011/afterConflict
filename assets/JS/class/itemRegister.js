function loadObjects() {
    // 建筑
    let playerPlatform = new building("testFloor", 3000, 3000, "testPlatform", "#c2c2c2");

    // 人物
    let player = new people(0, 0, 0, 50, 100, playerName, 10, null, 460, 460, 0, 700000, undefined, undefined, undefined, undefined, false, null);

    // 物品
    let ammo_9x9mm = new ammo("ammo", "9*19毫米帕拉贝鲁姆弹", "9*19mm*", "9*19毫米帕拉贝鲁姆弹（9*19 mm Parabellum）是一种手枪及冲锋枪使用的无缘间缩式子弹，是现今全世界最广泛使用的手枪弹种，经常被直接简称为\"9毫米弹\"（\"9 mm\"或\"9 mil\"）。", "ammo", 8, 1, 1, 1, null, null, null, undefined, null, false, false, 60, 60, "9x19", 42, 23, 0.06);
    let pistol_glock19_magazine = new magazine();

    // 武器
    let pistol_glock19 = new hotweapon("pistol", "格洛克19手枪", "格洛克19", "格洛克19（Glock 19）是由奥地利格洛克公司设计及生产的半自动手枪，是格洛克17的紧凑型版本，发射9×19毫米帕拉贝鲁姆弹，标准弹匣为15发。", "手枪", 670, 2, 2, 1, null, null, null, undefined, null, false, false, "9×19mm", "9×19mm", "glockSeries_doubleStack_magazine", "glockSeries_doubleStack_15round_magazine", 120, 120, 120);

    console.log(pistol_glock19);
}

function addObjectInList(object, type) {
    if (type == "building") {
        gameBuildingList[object.id] = object;
    } else if (type == "entity") {
        gameBuildingList[object.id] = object;
    } else if (type == "item") {
        gameItemList[object.id] = object;
    }
}

const level = {
    load(levelName) {
        if (levelName == "test") {
            addObjectInList(playerPlatform, "building");
            addObjectInList(player, "entity");
            addObjectInList(pistol_glock19, "item");
            player.equipt(pistol_glock19);
        }
    }
}