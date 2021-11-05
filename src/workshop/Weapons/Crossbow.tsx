import { IRangedWeapon } from "../../off-limits/IWeapons";
import { Arrow } from "../Items/Arrow";

export class Crossbow implements IRangedWeapon<Arrow> {
    name = "Crossbow";
    damage: 0 = 0;
    projectiles = [new Arrow(), new Arrow(), new Arrow(), new Arrow(),
        new Arrow(), new Arrow(), new Arrow(), new Arrow(), new Arrow(),
        new Arrow(), new Arrow(), new Arrow(), new Arrow(), new Arrow(),];
    
}