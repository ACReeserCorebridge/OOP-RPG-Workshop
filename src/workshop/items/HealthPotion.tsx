import { IConsumableItem, IMeleeWeapon } from "../../off-limits/IWeapons";

export class HealthPotion implements IConsumableItem {
  name: string;
  healthBonus: number;
  consume: boolean;
  
  constructor() {
    this.name = "Health Potion";
    this.healthBonus = 5;
    this.consume = true;
  }
}