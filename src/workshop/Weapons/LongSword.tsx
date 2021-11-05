import { IMeleeWeapon, IWeapon } from "../../off-limits/IWeapons";

export class LongSword implements IMeleeWeapon {
    name = "Long Sword";
    damage = 10;
    meleeRange = 1;
}