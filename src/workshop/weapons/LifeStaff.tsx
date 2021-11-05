import { IEnchantedItem, IMeleeWeapon, IRangedWeapon } from "../../off-limits/IWeapons";

export class LifeStaff implements IMeleeWeapon, IEnchantedItem{
  name: string;
  damage: number;
  partyHealthBonus?: number;
  meleeRange: number;
  
  constructor() {
    this.name = "Life Staff";
    this.meleeRange = 2;
    this.damage = 3;
    this.partyHealthBonus = 4; // Heals
  }  
}