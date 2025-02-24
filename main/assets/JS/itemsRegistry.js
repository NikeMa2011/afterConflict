class defalut {
    constructor(ID, name, discription) {
        this.ID = ID;
        this.name = name;
        this.discription = discription;
    }
}
class weapons extends defalut{
    constructor(reloadSpeed, fireSpeed, maxiumAmmo, ammo, weight, damage, penetrate) {
        this.reloadSpeed = reloadSpeed;
        this.fireSpeed = fireSpeed;
        this.maxiumAmmo = maxiumAmmo;
        this.ammo = ammo;
        this.weight = weight;
        this.damage = damage;
        this.penetrate = penetrate;
    }
}

// 定义物品
const glock_18 = new weapons("weapon_pistols_glock_18", "glock_18",);