import { IRangedWeapon } from "../../off-limits/IWeapons";
import { Fireball } from "../Magic/Fireball";

export class Grimoire implements IRangedWeapon<Fireball> {
    name = "Grimoire";
    damage: 0 = 0;
    projectiles = [new Fireball(), new Fireball(), new Fireball(), new Fireball(), 
        new Fireball(), new Fireball(), new Fireball(), new Fireball(), new Fireball(),
        new Fireball(), new Fireball(), new Fireball(), new Fireball(), new Fireball()];
}