import { IEnchantedItem, IRangedWeapon } from "../../off-limits/IWeapons";
import { Bullet } from "./projectiles/Bullet";

export class Musket implements IRangedWeapon<Bullet> {
  name: string;
  damage: 0;
  projectiles: Bullet[];
  
  constructor() {
    this.name = "Musket";
    this.damage = 0;
    this.projectiles = Array.from(Array(10).keys()).map(a => new Bullet()); //Cant holds that much bullets
  }
}