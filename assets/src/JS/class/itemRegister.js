function loadObjects() {
    // 建筑
    building_playerPlatform = new building();
    building_playerPlatform.type = "floor";
    building_playerPlatform.height = 4000;
    building_playerPlatform.width = 4000;
    building_playerPlatform.id = "testPlatform";

    // 人物
    people_player = new people();
    people_player.width = 50;
    people_player.height = 100;
    people_player.id = "player";
    people_player.name = playerName;
    people_player.speed = 10;
    people_player.health = 460;
    people_player.maximumHealth = people_player.health;
    people_player.fullHealth = people_player.maximumHealth;
    people_player.weight = 0;
    people_player.maximumWeight = 500000;

    // 物品
    item_ammo_9x19mm = new ammo();
    item_ammo_9x19mm.maximumNumber = 60;
    item_ammo_9x19mm.damage = 202;
    item_ammo_9x19mm.armorPiercing = 34;
    item_ammo_9x19mm.caliber = "9x19mm";
    item_ammo_9x19mm.durability = 0.018;
    item_ammo_9x19mm.name = "9×19毫米帕拉贝鲁姆弹";
    item_ammo_9x19mm.shortspell = "9×19毫米子弹";
    item_ammo_9x19mm.description = "9*19毫米帕拉贝鲁姆弹", "9*19mm*", "9*19毫米帕拉贝鲁姆弹（9*19 mm Parabellum）是一种手枪及冲锋枪使用的无缘间缩式子弹，是现今全世界最广泛使用的手枪弹种，经常被直接简称为\"9毫米弹\"（\"9 mm\"或\"9 mil\"）。";
    item_ammo_9x19mm.type = "ammo";
    item_ammo_9x19mm.weight = 8.5;
    item_ammo_9x19mm.width = 1;
    item_ammo_9x19mm.height = 1;
    item_ammo_9x19mm.depth = 1;
    item_ammo_9x19mm.model = undefined;

    item_magazine_pistol_glock19 = new magazine();
    item_magazine_pistol_glock19.ammoCaliber = "9x19mm";
    item_magazine_pistol_glock19.maximumAmmoRound = 15;
    item_magazine_pistol_glock19.magazineType = "glock19_doubleStack_magazine";
    item_magazine_pistol_glock19.name = "格洛克19 15发标准弹匣";
    item_magazine_pistol_glock19.shortspell = "格洛克15发弹匣";
    item_magazine_pistol_glock19.description = "适用于格洛克19的15发标准弹匣, 也可以装备于格洛克17使用.";
    item_magazine_pistol_glock19.type = "magazine";
    item_magazine_pistol_glock19.weight = 75;
    item_magazine_pistol_glock19.width = 1;
    item_magazine_pistol_glock19.height = 2;
    item_magazine_pistol_glock19.depth = 1;
    item_magazine_pistol_glock19.model = undefined;

    // 武器
    weapon_pistol_glock19 = new hotweapon();
    weapon_pistol_glock19.ammoCaliber = "9x19mm";
    weapon_pistol_glock19.magazineType = "glock19_doubleStack_magazine";
    weapon_pistol_glock19.durability = 140;
    weapon_pistol_glock19.fullDurability = weapon_pistol_glock19.durability;
    weapon_pistol_glock19.maximumDurability = weapon_pistol_glock19.fullDurability;
    weapon_pistol_glock19.weaponType = "pistol";
    weapon_pistol_glock19.id = "playerGlock";
    weapon_pistol_glock19.name = "第三代格洛克19 半自动手枪";
    weapon_pistol_glock19.shortspell = "格洛克19";
    weapon_pistol_glock19.description = "格洛克19（Glock 19）是由奥地利格洛克公司设计及生产的半自动手枪，是格洛克17的紧凑型版本，发射9×19毫米帕拉贝鲁姆弹，标准弹匣为15发。";
    weapon_pistol_glock19.type = "weapon";
    weapon_pistol_glock19.weight = 595;
    weapon_pistol_glock19.width = 3;
    weapon_pistol_glock19.height = 3;
    weapon_pistol_glock19.depth = 1;
    weapon_pistol_glock19.model = undefined;

    console.log(weapon_pistol_glock19, item_magazine_pistol_glock19, item_ammo_9x19mm);
}

function addObjectInList(object) {
    if (object.objectType == "building") {
        gameBuildingList[object.id] = object;
    } else if (object.objectType == "entity") {
        gameEntityList[object.id] = object;
    }
}

const level = {
    load(levelName) {
        if (levelName == "test") {
            people_player.x = 0;
            people_player.y = 0;
            people_player.z = 0;
            people_player.color = "#c0c0c0";

            item_ammo_9x19mm.number = item_ammo_9x19mm.maximumNumber;

            item_magazine_pistol_glock19.ammoUsed = item_ammo_9x19mm;

            weapon_pistol_glock19.magazineUsed = item_magazine_pistol_glock19;

            people_player.equipt(weapon_pistol_glock19);

            building_playerPlatform.x = 0;
            building_playerPlatform.y = 0;
            building_playerPlatform.color = "#383838";

            addObjectInList(building_playerPlatform);
            addObjectInList(people_player);
            addObjectInList(weapon_pistol_glock19);
        }
    }
}