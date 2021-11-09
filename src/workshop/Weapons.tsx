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

// Melee Weapon
export class ShortSword implements IMeleeWeapon {
  name = 'Short Sword';
  damage = 3;
  meleeRange = 2;
}

export class LongSword implements IMeleeWeapon {
  name = 'Long Sword';
  damage = 5;
  meleeRange = 2;
}

export class DeadlySword implements IMeleeWeapon {
  name = 'Deadly Sword';
  damage = 9;
  meleeRange = 2
}

export class Javelin  implements IMeleeWeapon {
  name = 'Javelin';
  damage = 7;
  meleeRange = 2;
}

export class Staff implements IMeleeWeapon {
  name = 'Staff';
  damage = 5;
  meleeRange = 2;
}

export class StormHammer implements IMeleeWeapon {
  name = 'StormHammer';
  damage = 9;
  meleeRange = 2;
}

// Range Weapon
export class Bow implements IRangedWeapon<IWeapon> {
  name = 'Bow Range Item'
  damage: 0 = 0;
  projectiles = [ 
    {
      name: 'Bow',
      damage: 3
    }
  ];
}

export class Gun implements IRangedWeapon<IWeapon> {
  name = 'Gun'
  damage: 0 = 0;
  projectiles = [ 
    {
      name: 'Gun',
      damage: 8
    }
  ];
}

// Kludge temp name for the enchanted item
export class FireStone implements IEnchantedItem {
  name = 'FireStone';
  partyHealthBonus = 5;
}

export class SemiHealthPotion implements IConsumableItem {
  name = 'Health Potion';
  healthBonus = 3;

  randomHealthBonus(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

export class FullHealthPotion implements IConsumableItem {
  name = 'Health Potion';
  healthBonus = 5;
}

// ITEM ASSIGNMENTS
export const WarriorStartItem: IItem|undefined = new LongSword();
export const ClericStartItem: IItem|undefined = new Staff();
export const MageStartItem: IItem|undefined = new FireStone();
export const ThiefStartItem: IItem|undefined = new ShortSword();

export function randomItemPick(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function GenerateWarriorItemInChest(): IItem {
  const warriorItems = [
    new DeadlySword(),
    new StormHammer(),
    new Gun(),
    new Bow()
  ];

  return warriorItems[ randomItemPick(0, warriorItems.length) ];
}

function GenerateClericItemInChest(): IItem {
  const clericItems = [
    new Javelin(),
    new StormHammer()
  ];

  return clericItems[ randomItemPick(0, clericItems.length)];
}

function GenerateMageItemInChest(): IItem {
  const mageItems = [
    new SemiHealthPotion(),
    new FullHealthPotion(),
  ];

  return mageItems[ randomItemPick(0, mageItems.length)]
}

function GenerateThiefItemInChest(): IItem {
  const thiefItems = [
    new ShortSword(),
    new LongSword()
  ];

  return thiefItems[ randomItemPick(0, thiefItems.length) ];
}

// TREASURE ASSIGNMENTS
export function GetItemsInTreasureChests(): IItem[] {
  return [
    GenerateWarriorItemInChest(), //this will be found by the warrior
    GenerateClericItemInChest(), //this will be found by the cleric
    GenerateMageItemInChest(), //this will be found by the mage
    GenerateThiefItemInChest(), //this will be found by the thief
  ];
}
