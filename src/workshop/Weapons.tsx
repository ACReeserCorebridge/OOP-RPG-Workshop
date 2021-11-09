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

export class Staff implements IMeleeWeapon {
  name = 'Staff';
  damage = 3;
  meleeRange = 2;
}

export class ElvishSword implements IMeleeWeapon {
  name = 'Sting'; //Bilbo's glowing sword in the Hobbit
  damage = 6;
  meleeRange = 1;
}

export class Mace implements IMeleeWeapon {
  name = 'Spikey Ball on a Stick';
  damage = 7;
  meleeRange = 2;
}

export class Arrow implements IWeapon {
  name = 'Arrow';
  damage = 3;
}

export class Bow implements IRangedWeapon<Arrow> {
  name = 'Bow and Arrow';
  damage: 0 = 0;
  quiverSize = 10;
  projectiles: Arrow[] = [new Arrow(), new Arrow(), new Arrow(), new Arrow(), new Arrow(), new Arrow(), new Arrow(), new Arrow(), new Arrow(), new Arrow()];
}

export class Bolt implements IWeapon {
  name = 'Bolt';
  damage = 5;
}

export class Crossbow implements IRangedWeapon<Bolt> {
  name = 'Crossbow';
  damage: 0 = 0;
  projectiles: Bolt[] = [new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt()];
}

// ITEM VAULT
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class Ring implements IEnchantedItem {
  name = 'Ring';
  fireDamage = 2;
  partyHealthBonus = 3;
}

export class Mirror implements IEnchantedItem {
  name = 'Sarcastic Magic Mirror';
  fireDamage = 4;
  partyHealthBonus = 1;
}

export class Book implements IEnchantedItem {
  name = 'Epic Tales of Times Past';
  fireDamage = 5;
  partyHealthBonus = 1;
}

export class Elixer implements IConsumableItem {
  name = 'Guava Nectar';
  healthBonus = 2;
}

export class Food implements IConsumableItem {
  name = 'Krispy Kremes';
  healthBonus = 1;
}


// ITEM ASSIGNMENTS
export const WarriorStartItem: IItem|undefined = new ElvishSword();
export const ClericStartItem: IItem|undefined = new Mace();
export const MageStartItem: IItem|undefined = new Crossbow();
export const ThiefStartItem: IItem|undefined = new Bow();

// TREASURE ASSIGNMENTS
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new Elixer(), //this will be found by the warrior
    new Book(), //this will be found by the cleric
    new Mirror(), //this will be found by the mage
    new Food(), //this will be found by the thief
  ];
}
