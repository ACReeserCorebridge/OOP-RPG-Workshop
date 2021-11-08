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
export class Club implements IMeleeWeapon {
  name = 'Club';
  damage = 1;
  meleeRange = 1;
}

export class GreatSword implements IMeleeWeapon {
  name = 'Great Sword';
  damage = 5;
  meleeRange = 2;
}

export class RustyKnife implements IMeleeWeapon {
  name = 'Rust Knife';
  damage = 2;
  meleeRange = 1;
}

export class HolySword implements IMeleeWeapon {
  name = 'Holy Sword';
  damage = 5;
  meleeRange = 1;
}
export class ArcaneBolt implements IWeapon {
  name = "Arcane bolt";
  damage = 3;
}
export class MagicStaff implements IRangedWeapon<ArcaneBolt> {
  name = "Magic Staff";
  damage = 2 as 0;
  projectiles = [new ArcaneBolt(), new ArcaneBolt(), new ArcaneBolt(), new ArcaneBolt(), new ArcaneBolt()];
}

export class Ammo implements IWeapon {
  name = ".270 caliber bullet";
  damage = 2;
}

export class Rifle implements IRangedWeapon<IWeapon> {
  name = "Rifle";
  damage = 1 as 0;
  projectiles = [new Ammo(), new Ammo(), new Ammo(), new Ammo(), new Ammo()];
}

// ITEM VAULT
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class HealingPotion implements IConsumableItem {
  name = 'Healing Potion';
  healthBonus = 2;
}

export class HolyLocket implements IEnchantedItem {
    name = "Holy Locket";
    partyHealthBonus = 2;
}
export class FireGrimoire implements IEnchantedItem {
    name = "Fire Grimoire";
    fireDamage = 2;
}

// ITEM ASSIGNMENTS
export const WarriorStartItem: IItem|undefined = new GreatSword();
export const ClericStartItem: IItem|undefined = new HolySword();
export const MageStartItem: IItem|undefined = new MagicStaff();
export const ThiefStartItem: IItem|undefined = new Rifle();

// TREASURE ASSIGNMENTS
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new HealingPotion(), //this will be found by the warrior
    new HolyLocket(), //this will be found by the cleric
    new FireGrimoire(), //this will be found by the mage
    new RustyKnife(), //this will be found by the thief
  ];
}
