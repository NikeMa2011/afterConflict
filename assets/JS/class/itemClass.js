class people {
    constructor(x, y, z, width, height, IDcode, speed, health, maximumHealth, fullHealth, weight, maximumWeight, dead, equiptedWeapon) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.width = width;
        this.height = height;

        this.IDcode = IDcode;

        this.speed = speed;

        this.health = health;
        this.maximumHealth = maximumHealth;
        this.fullHealth = fullHealth;

        this.weight = weight;
        this.maximumWeight = maximumWeight;

        this.dead = dead;

        this.equiptedWeapon = equiptedWeapon;
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

    setup(type) {
        if (type == "standard") {
            this.speed = 10;

            this.maximumHealth = 460;
            this.fullHealth = this.maximumHealth;

            this.maximumWeight = 700000;

            this.width = 50;
            this.height = 100;

            this.health = this.maximumHealth;
            this.weight = 0;

            this.dead = false;
        }
    }
}

class crosshairObject {
    constructor(size, x, y, thickness, color) {
        this.size = size;
        this.x = x;
        this.y = y;
        this, thickness = thickness;
        this.color = color;
    }

    setup(type) {
        if (type == "normal") {
            this.x = Math.floor(windowWidth / 2);;
            this.y = Math.floor(windowHeight / 2);
            this.size = 20;
            this.thickness = 2;
            this.color = "#ffffff";
        }
    }
}

class hotweapon {
    constructor(id, name, description, type, weight, damage, armorPiercing, ammo, maximumAmmo, ammoType, ammoTypeUsed, magazineType, magazineTypeUsed, durability, maximumDurability, fullDurability, model, equipted, failure, broken) {
        this.id = id;
        this.name = name;
        this.description = description;

        this.type = type;

        this.weight = weight;

        this.damage = damage;
        this.armorPiercing = armorPiercing;

        this.ammo = ammo;
        this.maximumAmmo = maximumAmmo;
        this.ammoType = ammoType;
        this.ammoTypeUsed = ammoTypeUsed;

        this.magazineType = magazineType;
        this.magazineTypeUsed = magazineTypeUsed;

        this.durability = durability;
        this.maximumDurability = maximumDurability;
        this.fullDurability = fullDurability;

        this.model = model;

        this.equipted = equipted;

        this.failure = failure;
        this.broken = broken;
    }

    fire() {
        if (ammo > 0) {
            if (this.ammoTypeUsed == this.ammoType) {
                this.ammo --;

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