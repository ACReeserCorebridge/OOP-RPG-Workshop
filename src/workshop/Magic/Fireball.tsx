import { IWeapon } from "../../off-limits/IWeapons";
import { Magic } from "./BaseMagic";

export class Fireball extends Magic implements IWeapon {
    name = "Fireball";
    damage = 5;
    fireDamage = 10;
}