class defalutClass {
    constructor(ID, name, discription, damage, weight) {
        this.ID = ID;
        this.name = name;
        this.discription = discription;
        this.damage = damage;
        this.weight = weight;
    }
}
class coolWeapons extends defalutClass {
    constructor(attackSpeed) {
        this.attackSpeed = attackSpeed;
    }
}
class hotWeapons extends defalutClass {
    constructor(reloadSpeed, fireSpeed, maxiumAmmo, ammo, penetrate) {
        super();
        this.reloadSpeed = reloadSpeed;
        this.fireSpeed = fireSpeed;
        this.maxiumAmmo = maxiumAmmo;
        this.ammo = ammo;
        this.penetrate = penetrate;
    }
}