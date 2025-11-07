class gameObjectMoudle {
    constructor(objectIdstring, objectIDcode, objectType) {

    }

    addToObjectList() {
        if (this.objectIDcode == "player") {
            gameObjectList["player"] = this;

            return;
        }

        for (let i = 0; i < gameObjectList.length; i++) {
            if (gameObjectList[i] == null) {
                gameObjectList[i] = this;

                return;
            }
        }
    }
}

class people extends gameObjectMoudle {
    constructor(x, y, z, width, height, name, color, speed, health, maximumHealth, fullHealth, weight, maximumWeight, armor, outfit, gear, backpacking, dead, equiptedItem) {
        super();

        this.objectType = "entity";
    }

    hurt(damage) {
        let healthAfterHurt = this.health - damage;

        if (healthAfterHurt > 0) {
            return healthAfterHurt;
        } else {
            this.health = 0;
            this.dead = true;
        }
    }

    equipt(item) {
        this.equiptedItem = item;
        item.equipted = true;
    }

    unequipt() {
        this.equiptedItem.equipted = false;
        this.equiptedItem = null;
    }
}

class drops extends gameObjectMoudle {
    constructor(x, y, z, name, model, diraction) {
        super();

        this.objectType = "entity";
    }
}

class item extends gameObjectMoudle{
    constructor(name, shortspell, description, type, weight, width, height, depth, x, y, z, model, equipted, failure, broken) {
        super();

        this.objectType = "entity";
    }
}

class ammo extends item {
    constructor(number, maximumNumber, caliber, damage, armorPiercing, durabilityCost, loaded) {
        super();
    }
}

class magazine extends item {
    constructor(ammoCaliber, ammoContain, maximumAmmoRound, magazineType) {
        super();
    }

    reload(ammo) {
        if (ammo.caliber == this.ammoType) {
            if (ammo.number < this.maximumAmmoRound) {
                 return ammo.number - this.maximumAmmoRound;
            }

            this.ammoContain = ammo;
        } else {
            return false;
        }
    }

    strip() {
        this.ammoContain = null;

        return this.ammo;
    }
}

class hotweapon extends item {
    constructor(ammoCaliber, ammoLoaded, magazineType, magazineUsed, durability, maximumDurability, fullDurability, weaponType) {
        super();

        this.ammoCaliber = ammoCaliber;
        this.ammoLoaded = ammoLoaded;

        this.magazineType = magazineType;
        this.magazineUsed = magazineUsed;

        this.durability = durability;
        this.maximumDurability = maximumDurability;
        this.fullDurability = fullDurability;

        this.weaponType = weaponType;
    }

    fire() {
        if (this.magazineUsed.ammoContain.number > 0) {
            if (this.ammoLoaded == this.ammoCaliber) {
                this.magazineUsed.ammoContain.number --;

                // 子弹发射
            } else {
                this.failure = true;

                return this.ammoLoaded;
            }
        } else {
            return false;
        }
    }

    reload(magazineInput) {
        if (this.magazineType == magazineInput.type) {
            this.magazineTypeUsed = magazineInput;
            this.ammoLoaded = magazineInput.ammoContain;
        } else {
            return magazineInput;
        }
    }
}

class scene extends gameObjectMoudle {
    constructor(type, height, width, color) {
        super();

        this.objectType = "scene";
    }
}

class text extends scene {
    constructor(string) {
        super();
    }
}

function setCrosshair() {
    this.size = 20;

    this.x = Math.floor(windowSize.width / 2);
    this.y = Math.floor(windowSize.height / 2);

    this.thickness = 2;

    this.color = "#ffffff";
}