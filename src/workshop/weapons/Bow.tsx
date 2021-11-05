import { IRangedWeapon } from "../../off-limits/IWeapons";
import { Arrow } from "./projectiles/Arrow";

export class Bow implements IRangedWeapon<Arrow> {
  name: string;
  damage: 0;
  projectiles: Arrow[];
  
  constructor() {
    this.name = "Bow";
    this.damage = 0;
    this.projectiles = Array.from(Array(10).keys()).map(a => new Arrow());
  }
}