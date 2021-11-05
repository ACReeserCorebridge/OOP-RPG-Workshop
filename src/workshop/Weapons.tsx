import { IItem } from "../off-limits/IWeapons";
import { EyeOfSszzaas } from "./Artifacts/EyeOfSszzaas";
import { DivinePotion } from "./Items/DivinePotion";
import { DivineAmulet } from "./Artifacts/DivineAmulet";
import { LongSword } from "./Weapons/LongSword";
import { Grimoire } from "./Weapons/Grimoire";
import { Crossbow } from "./Weapons/Crossbow";
import { DivineScepter } from "./Weapons/DivineScepter";
import { Sling } from "./Weapons/Sling";


// ITEM ASSIGNMENTS
export const WarriorStartItem: IItem|undefined = new LongSword();
export const ClericStartItem: IItem|undefined = new DivineScepter();
export const MageStartItem: IItem|undefined = new Grimoire();
export const ThiefStartItem: IItem|undefined = new Crossbow();

// TREASURE ASSIGNMENTS
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new DivinePotion(), //this will be found by the warrior
    new DivineAmulet(), //this will be found by the cleric
    new EyeOfSszzaas(), //this will be found by the mage
    new Sling(), //this will be found by the thief
  ];
}
