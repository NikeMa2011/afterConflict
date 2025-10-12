function loadObjects() {
    // 建筑
    let playerPlatform = new building.setup("test_platform");

    // 人物
    let player = new people(0, 0, 0, 50, 100, "player", 10, null, 460, 460, 0, 700000, undefined, undefined, undefined, undefined, false, null);

    // 武器
    let pistol_glock19 = new hotweapon(undefined, "格洛克19", "奥地利格洛克公司研制的半自动手枪，为Glock17的紧凑型版本，具有更小的尺寸与重量，便于隐蔽携带。其标准弹匣容量为15发，部分型号（如\"C\"型）设计有枪管顶端开孔。(摘自 百度百科)", "手枪", 670, 15, null, null, 15, "9x19mm", null, "glock19_15round_doubleStack_magzine", null, null, 230, 230, undefined, null, null, null);
}