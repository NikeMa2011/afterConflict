function loadObjects() {
    // 建筑
    scene_playerPlatform = new scene();
    scene_playerPlatform.objectIDstring = "scene_playerPlatform";
    scene_playerPlatform.type = "floor";
    scene_playerPlatform.height = 4000;
    scene_playerPlatform.width = 4000;

    scene_text = new text();
    scene_text.objectIDstring = "scene_text";
    scene_text.type = "text";

    // 人物
    entity_people = new people();
    entity_people.objectIDstring = "entity_people";

    entity_people_player = new people();
    entity_people_player.objectIDstring = "entity_people_player";
    entity_people_player.name = playerName;
    entity_people_player.objectIDcode = "player";

    // 物品
    item_ammo_9x19mm = new ammo();
    item_ammo_9x19mm.objectIDstring = "item_ammo_9x19mm";
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
    item_magazine_pistol_glock19.objectIDstring = "item_magazine_pistol_glock19";
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
    weapon_pistol_glock19.objectIDstring = "weapon_pistol_glock19";
    weapon_pistol_glock19.ammoCaliber = "9x19mm";
    weapon_pistol_glock19.magazineType = "glock19_doubleStack_magazine";
    weapon_pistol_glock19.durability = 140;
    weapon_pistol_glock19.fullDurability = weapon_pistol_glock19.durability;
    weapon_pistol_glock19.maximumDurability = weapon_pistol_glock19.fullDurability;
    weapon_pistol_glock19.weaponType = "pistol";
    weapon_pistol_glock19.name = "第三代格洛克19 半自动手枪";
    weapon_pistol_glock19.shortspell = "格洛克19";
    weapon_pistol_glock19.description = "格洛克19（Glock 19）是由奥地利格洛克公司设计及生产的半自动手枪，是格洛克17的紧凑型版本，发射9×19毫米帕拉贝鲁姆弹，标准弹匣为15发。";
    weapon_pistol_glock19.type = "weapon";
    weapon_pistol_glock19.weight = 595;
    weapon_pistol_glock19.width = 3;
    weapon_pistol_glock19.height = 3;
    weapon_pistol_glock19.depth = 1;
    weapon_pistol_glock19.model = undefined;
}

const level = {
    load(levelName) {
        if (levelName == "test") {
            // 场景
            scene_playerPlatform.x = 0;
            scene_playerPlatform.y = 0;
            scene_playerPlatform.color = "#383838";

            scene_playerPlatform.addToObjectList();

            scene_text.string = "测试地图";
            scene_text.x = 50;
            scene_text.y = 50;
            scene_text.z = 0;
            scene_text.addToObjectList();

            // 实体
            entity_people_player.x = 0;
            entity_people_player.y = 0;
            entity_people_player.z = 0;
            entity_people_player.width = 50;
            entity_people_player.height = 100;
            entity_people_player.speed = 10;
            entity_people_player.health = 460;
            entity_people_player.maximumHealth = entity_people.health;
            entity_people_player.fullHealth = entity_people.maximumHealth;
            entity_people_player.weight = 0;
            entity_people_player.maximumWeight = 500000;
            entity_people_player.color = "#c0c0c0";

            item_ammo_9x19mm.number = item_ammo_9x19mm.maximumNumber;

            item_magazine_pistol_glock19.ammoUsed = item_ammo_9x19mm;

            weapon_pistol_glock19.magazineUsed = item_magazine_pistol_glock19;

            entity_people_player.equipt(weapon_pistol_glock19);
            entity_people_player.addToObjectList();

            entity_people.x = 400;
            entity_people.y = 400;
            entity_people.z = 0;
            entity_people.color = "#00aeff";

            entity_people.addToObjectList();

            console.log(gameObjectList);
        }
    }
}