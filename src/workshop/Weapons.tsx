import { IItem } from "../off-limits/IWeapons";
import { Coffee } from "./my-items/Coffee";
import { MagicPotion } from "./my-items/MagicPotion";
import { Trident } from "./my-weapons/Trident";
import { MagicBow } from "./my-weapons/MagicBow";
import { Guandao } from "./my-weapons/Guandao";

// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new MagicBow();
export const ClericStartItem: IItem|undefined = new Guandao();
export const MageStartItem: IItem|undefined = new MagicBow();
export const ThiefStartItem: IItem|undefined = new Trident();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new Coffee(), //this will be found by the warrior
    new MagicPotion(), //this will be found by the cleric
    new MagicPotion(), //this will be found by the mage
    new Coffee(), //this will be found by the thief
  ];
}
