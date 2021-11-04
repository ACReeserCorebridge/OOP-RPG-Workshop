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

export class Excaliber implements IMeleeWeapon {
  name = 'Excaliber';
  damage = 100;
  meleeRange = 1;
}

export class Crossbow implements IRangedWeapon<Arrow> {
  damage: 0 = 0;
  name = 'Crossbow';
  meleeRange = 50;
  projectiles = [new Arrow()];
}

export class Arrow implements IWeapon {
  name = 'Arrow';
  damage = 100;
}

// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class AwesomeAmulet implements IConsumableItem {
  name = 'Awesome Amulet';
  healthBonus = 5;
}

// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new Excaliber();
export const ClericStartItem: IItem|undefined = new Excaliber();
export const MageStartItem: IItem|undefined = undefined;
export const ThiefStartItem: IItem|undefined = new Excaliber();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new AwesomeAmulet(), //this will be found by the warrior
    new AwesomeAmulet(), //this will be found by the cleric
    new AwesomeAmulet(), //this will be found by the mage
    new AwesomeAmulet(), //this will be found by the thief
  ];
}
