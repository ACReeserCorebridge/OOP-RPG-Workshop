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

export class Sword implements IMeleeWeapon {
  name = 'Sword';
  damage = 3;
  meleeRange = 3;
}

export class Bullet implements IMeleeWeapon {
  name = 'Bullet';
  damage = 3;
  meleeRange = 5;
}

export class Cannonball implements IRangedWeapon<IWeapon> {
  name = 'Cannonball';
  damage: 0 = 0;
  projectiles = Array(10).fill(new Bullet());
}

// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class Spell implements IEnchantedItem {
  name = "Spell";
  fireDamage = 5;
  partyHealthBonus = 4;
}

export class Cure implements IConsumableItem {
  name = "Cure";
  healthBonus = 3;
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new Sword();
export const ClericStartItem: IItem|undefined = new Club();
export const MageStartItem: IItem|undefined = new Spell();
export const ThiefStartItem: IItem|undefined = new Cannonball();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new Cure(), //this will be found by the warrior
    new Spell(), //this will be found by the cleric
    new Cannonball(), //this will be found by the mage
    new Sword(), //this will be found by the thief
  ];
}
