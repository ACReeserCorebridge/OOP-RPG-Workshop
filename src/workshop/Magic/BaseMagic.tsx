import { IEnchantedItem } from "../../off-limits/IWeapons";

export class Magic implements IEnchantedItem {
    name = "Magic";
    fireDamage = 5;
  }
  
  export class DivineMagic implements IEnchantedItem {
    name = "Divine Magic";
    partyHealthBonus = 10;
  }