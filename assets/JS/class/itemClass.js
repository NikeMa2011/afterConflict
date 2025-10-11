class people {
    constructor(x, y, z, width, height, IDcode, health, maximumHealth, weight, maximumWeight, dead) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.width = width;
        this.height = height;

        this.IDcode = IDcode;

        this.health = health;
        this.maximumHealth = maximumHealth;

        this.weight = weight;
        this.maximumWeight = maximumWeight;

        this.dead = dead;
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
            this.maximumHealth = 460;
            this.maximumWeight = 700000;

            this.width = 50;
            this.height = 100;

            this.health = this.maximumHealth;
            this.weight = this.maximumWeight;

            this.dead = false;
        }
    }
}

class crosshairObject {
    constructor(size, x, y, thickness, color) {
        this.size = size;
        this.x = x;
        this.y = y;
        this,thickness = thickness;
        this.color = color;
    }

    setup(type) {
        if (type == "normal") {
            this.size = 20;
            this.thickness = 2;
            this.color = "#ffffff";
        }
    }
}