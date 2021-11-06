import { IRangedWeapon } from "../../off-limits/IWeapons";
import { FlameRock } from "../Items/FlameRock";

export class Sling implements IRangedWeapon<FlameRock>{
    name = "Sling";
    damage: 0 = 0;
    projectiles = [new FlameRock(), new FlameRock(), new FlameRock(), new FlameRock(),
        new FlameRock(), new FlameRock(), new FlameRock(), new FlameRock(), new FlameRock()];

}