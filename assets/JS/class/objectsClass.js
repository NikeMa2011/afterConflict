class people {
    constructor(x, y, z, width, height, id, name, speed, health, maximumHealth, fullHealth, weight, maximumWeight, armor, outfit, gear, backpacking, dead, equiptedItem) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.width = width;
        this.height = height;

        this.id = id;
        this.name = name;

        this.speed = speed;

        this.health = health;
        this.maximumHealth = maximumHealth;
        this.fullHealth = fullHealth;

        this.weight = weight;
        this.maximumWeight = maximumWeight;

        this.armor = armor;
        this.outfit = outfit;
        this.gear = gear;
        this.backpacking = backpacking;

        this.dead = dead;

        this.equiptedWeapon = equiptedItem;
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
}

class drops {
    constructor(x, y, z, id, name, model, diraction) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.id = id;
        this.name = name;

        this.model = model;

        this.diraction = diraction
    }
}

class item {
    constructor(id, name, shortspell, description, type, weight, width, height, depth, x, y, z, model, equipted, failure, broken) {

        this.id = id;
        this.name = name;

        this.shortspell = shortspell;
        this.description = description;

        this.type = type;

        this.weight = weight;

        this.width = width;
        this.height = height;
        this.depth = depth;

        this.x = x;
        this.y = y;
        this.z = z;

        this.model = model;

        this.equipted = equipted;

        this.failure = failure;
        this.broken = broken;
    }
}

class ammo extends item {
    constructor(number, maximumNumber, caliber, damage, armorPiercing, durabilityCost) {
        super();

        this.number = number;
        this.maximumNumber = maximumNumber;

        this.caliber = caliber;

        this.damage = damage;
        this.armorPiercing = armorPiercing;

        this.durabilityCost = durabilityCost;
    }
}

class magazine extends item {
    constructor(ammoType, ammoContain, maximumAmmoRound) {
        super();

        this.ammoType = ammoType;
        this.ammoTypeContain = ammoContain;

        this.maximumAmmoRound = maximumAmmoRound;
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
    constructor(ammoType, ammoTypeUsed, magazineType, magazineUsed, durability, maximumDurability, fullDurability) {
        super();

        this.ammoType = ammoType;
        this.ammoTypeUsed = ammoTypeUsed;

        this.magazineType = magazineType;
        this.magazineUsed = magazineUsed;

        this.durability = durability;
        this.maximumDurability = maximumDurability;
        this.fullDurability = fullDurability;
    }

    fire() {
        if (this.magazineUsed.ammoContain.number > 0) {
            if (this.ammoTypeUsed == this.ammoType) {
                this.magazineUsed.ammoContain.number --;

                // 子弹发射
            } else {
                this.failure = true;

                return this.ammoTypeUsed;
            }
        } else {
            return false;
        }
    }

    reload(magazineTypeInput) {
        if (this.magazineType == magazineTypeInput) {
            this.magazineTypeUsed = this.magazineTypeUsed;
        } else {
            return magazineTypeInput;
        }
    }
}

class building {
    constructor(type, height, width, id, color) {
        this.type = type;

        this.height = height;
        this.width = width;

        this.id = id;

        this.color = color;
    }
}