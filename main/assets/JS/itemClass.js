class defalut {
    constructor(ID, name, discription) {
        this.ID = ID;
        this.name = name;
        this.discription = discription;
    }
}
class weapons extends defalut{
    constructor(reloadSpeed, fireSpeed, maxiumAmmo, ammo, weight, damage, penetrate) {
        super();
        this.reloadSpeed = reloadSpeed;
        this.fireSpeed = fireSpeed;
        this.maxiumAmmo = maxiumAmmo;
        this.ammo = ammo;
        this.weight = weight;
        this.damage = damage;
        this.penetrate = penetrate;
    }
}