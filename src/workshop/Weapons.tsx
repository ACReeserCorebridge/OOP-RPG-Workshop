import { IWeapon, IItem, IMeleeWeapon, IRangedWeapon, IConsumableItem, IEnchantedItem } from "../off-limits/IWeapons";

// INTERFACE QUICK REFERENCE
// export interface IItem {
//   name: string;
// }
// export interface IWeapon extends IItem {
//   damage: number;
// }
// export interface IMeleeWeapon extends IWeapon {
//   meleeRange: number;
// }
// export interface IRangedWeapon<T extends IWeapon> {
//   damage: 0;
//   projectiles: T[];
// }
// export interface IEnchantedItem extends IItem {
//   fireDamage?: number;
//   partyHealthBonus?: number;
// }
// export interface IConsumableItem extends IItem {
//   healthBonus: number;
// }

// WEAPON ARMORY
// todo: add more and better weapons!
export class Club implements IMeleeWeapon {
  name = 'Club';
  damage = 1;
  meleeRange = 1;
}

export class Broadsword implements IMeleeWeapon {
  name = 'Broadsword';
  damage = 3;
  meleeRange = 1;
}

export class Dagger implements IMeleeWeapon {
  name = 'Dagger';
  damage = 2;
  meleeRange = 1;
}

export class Mace implements IMeleeWeapon {
  name = 'Mace';
  damage = 2;
  meleeRange = 1;
}

export class MagicBolt implements IWeapon {
  name = 'Magic Bolt';
  damage = 5;
}

export class Staff implements IRangedWeapon<MagicBolt> {
  name = 'Staff';
  damage: 0 = 0;
  projectiles = [
    new MagicBolt, new MagicBolt, new MagicBolt, new MagicBolt,
    new MagicBolt, new MagicBolt, new MagicBolt, new MagicBolt,
    new MagicBolt, new MagicBolt, new MagicBolt, new MagicBolt,
  ]
}

export class HolyAmulet implements IEnchantedItem {
  name = 'Holy Amulet';
  partyHealthBonus = 4;
}

export class HealthPotion implements IConsumableItem {
  name = 'Health Potion';
  healthBonus = 3
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new Broadsword();
export const ClericStartItem: IItem|undefined = new Mace();
export const MageStartItem: IItem|undefined = new Staff();
export const ThiefStartItem: IItem|undefined = new Dagger();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new HealthPotion(), //this will be found by the warrior
    new HolyAmulet(), //this will be found by the cleric
    new HealthPotion(), //this will be found by the mage
    new HealthPotion(), //this will be found by the thief
  ];
}
