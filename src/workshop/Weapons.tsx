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

export class Staff implements IMeleeWeapon {
  name = 'Staff';
  damage = 6;
  meleeRange = 2;
}

export class ElvishSword implements IMeleeWeapon {
  name = 'Sting'; //Bilbo's glowing sword in the Hobbit
  damage = 20;
  meleeRange = 1;
}

export class Mace implements IMeleeWeapon {
  name = 'Spikey Ball on a Stick';
  damage = 8;
  meleeRange = 2;
}

export class Arrow implements IWeapon {
  name = 'Arrow';
  damage = 3;
}

export class Bow implements IRangedWeapon<Arrow> {
  name = 'Bow and Arrow';
  damage: 0 = 0;
  projectiles: Arrow[] = [new Arrow(), new Arrow(), new Arrow()];
  //TODO: determine if should populate the array here or if you should load the quiver elsewhere
}

export class Bolt implements IWeapon {
  name = 'Bolt';
  damage = 5;
}

export class Crossbow implements IRangedWeapon<Bolt> {
  name = 'Crossbow';
  damage: 0 = 0;
  projectiles: Bolt[] = [new Bolt(), new Bolt(), new Bolt()];
}

// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class Ring implements IEnchantedItem {
  name = 'Ring';
  fireDamage = 0;
  partyHealthBonus = 5;
}

export class Mirror implements IEnchantedItem {
  name = 'Mirror';
  fireDamage = 8;
  partyHealthBonus = 2;
}

export class Book implements IEnchantedItem {
  name = 'Book';
  fireDamage = 3;
  partyHealthBonus = 3;
}

export class Elixer implements IConsumableItem {
  name = 'Elixer';
  healthBonus = 5;
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new Mace();
export const ClericStartItem: IItem|undefined = new Crossbow();
export const MageStartItem: IItem|undefined = new Staff();
export const ThiefStartItem: IItem|undefined = new ElvishSword();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new Elixer(), //this will be found by the warrior
    new Book(), //this will be found by the cleric
    new Mirror(), //this will be found by the mage
    new Ring(), //this will be found by the thief
  ];
}
