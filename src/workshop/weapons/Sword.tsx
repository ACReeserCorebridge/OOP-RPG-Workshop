import { IMeleeWeapon } from "../../off-limits/IWeapons";

export class Sword implements IMeleeWeapon {
  name: string;
  damage: number;
  meleeRange: number;
  
  constructor() {
    this.name = "Sword";
    this.damage = 2;
    this.meleeRange = 1;
  }
}