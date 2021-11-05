import { IEnchantedItem, IRangedWeapon } from "../../off-limits/IWeapons";
import { Arrow } from "./projectiles/Arrow";
import { FireBolt } from "./projectiles/FireBolt";

export class FireStaff implements IRangedWeapon<Arrow> {
  name: string;
  damage: 0;
  projectiles: Arrow[];
  
  constructor() {
    this.name = "Fire Staff";
    this.damage = 0;
    this.projectiles = Array.from(Array(10).keys()).map(a => new FireBolt());
  }
}