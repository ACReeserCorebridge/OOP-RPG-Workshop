import { IRangedWeapon } from "../../off-limits/IWeapons";
import { FireBolt } from "./projectiles/FireBolt";

export class FireStaff implements IRangedWeapon<FireBolt> {
  name: string;
  damage: 0;
  projectiles: FireBolt[];
  
  constructor() {
    this.name = "Fire Staff";
    this.damage = 0;
    this.projectiles = Array.from(Array(10).keys()).map(a => new FireBolt());
  }
}