class defalutClass {
    constructor(ID, name, discription, damage) {
        this.ID = ID;
        this.name = name;
        this.discription = discription;
        this.damage = damage;
    }
}
class coolWeapons extends defalutClass {
    constructor(attackSpeed, weight) {
        this.attackSpeed = attackSpeed;
        this.weight = weight;
    }
}
class hotWeapons extends defalutClass {
    constructor(reloadSpeed, fireSpeed, maxiumAmmo, ammo, weight, penetrate) {
        super();
        this.reloadSpeed = reloadSpeed;
        this.fireSpeed = fireSpeed;
        this.maxiumAmmo = maxiumAmmo;
        this.ammo = ammo;
        this.weight = weight;
        this.penetrate = penetrate;
    }
}