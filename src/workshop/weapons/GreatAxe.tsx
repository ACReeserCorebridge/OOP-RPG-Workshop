import { IMeleeWeapon } from "../../off-limits/IWeapons";

export class GreatAxe implements IMeleeWeapon {
  name: string;
  damage: number;
  meleeRange: number;
  
  constructor() {
    this.name = "Great Axe";
    this.damage = 9;
    this.meleeRange = 2;
  }
}