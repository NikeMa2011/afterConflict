class people {
    constructor(x, y, z, IDcode, health, maximumHealth, weight, maximumWeight, dead) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.IDcode = IDcode;
        this.health = health;
        this.maximumHealth = maximumHealth;
        this.weight = weight;
        this.maximumWeight = maximumWeight;
        this.dead = dead;
    }

    hurt(damage) {
        let healthAfterHurt = health - damage;

        if (healthAfterHurt > 0) {
            return healthAfterHurt;
        } else {
            health = 0;
            dead = true;
        }
    }

    setUp() {
        health = maximumHealth;
        weight = maximumWeight;
        dead = false;
    }
}