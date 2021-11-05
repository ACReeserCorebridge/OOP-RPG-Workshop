import { IItem } from "../../off-limits/IWeapons";
import { HealthPotion } from "../items/HealthPotion";
import { FireStaff } from "../weapons/FireStaff";
import { LifeStaff } from "../weapons/LifeStaff";
import { Musket } from "../weapons/Musket";
import { GreatAxe } from "../weapons/GreatAxe";

export const WarriorStartItem: IItem|undefined = new GreatAxe();
export const ClericStartItem: IItem|undefined = new LifeStaff();
export const MageStartItem: IItem|undefined = new FireStaff();
export const ThiefStartItem: IItem|undefined = new HealthPotion(); // He stole from someone

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new HealthPotion(), //this will be found by the warrior
    new HealthPotion(), //this will be found by the cleric
    new HealthPotion(), //this will be found by the mage
    new Musket(), //this will be found by the thief
  ];
}