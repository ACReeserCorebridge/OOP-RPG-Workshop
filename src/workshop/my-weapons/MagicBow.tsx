import { IWeapon, IRangedWeapon, IEnchantedItem } from "../../off-limits/IWeapons";

export class Arrow implements IWeapon {
    name = 'Arrow';
    damage = 3;
}

export class MagicBow implements IRangedWeapon<Arrow>, IEnchantedItem {
    damage: 0 = 0;
    name = 'Bow';
    fireDamage = 5;
    projectiles = [
        new Arrow(), 
        new Arrow(), 
        new Arrow(), 
        new Arrow(), 
        new Arrow()
    ];
}