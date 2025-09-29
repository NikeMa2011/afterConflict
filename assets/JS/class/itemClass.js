class people {
    constructor(x, y, z, height, width, IDcode, health, maximumHealth, weight, maximumWeight, dead) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.height = height;
        this.width = width;

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

    setUp(type) {
        if (type == "standard") {
            this.maximumHealth = 460;
            this.maximumWeight = 700000;

            this.health = this.maximumHealth;
            this.weight = this.maximumWeight;

            this.dead = false;
        } else {
            console.error("setUp value undefined");
        }
    }
}