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
  damage = 9;
  meleeRange = 1;
}

export class Poleaxe implements IMeleeWeapon {
  name = 'Poleaxe';
  damage = 9;
  meleeRange = 2;
}

export class Arrow implements IWeapon {
  name = 'Arrow';
  damage = 3;
}

export class Bow implements IRangedWeapon<Arrow> {
  name = 'Bow';
  damage = 0;
  projectiles = [
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
  ];
}

export class Spell implements IWeapon {
  name = 'Spell';
  damage = 3;
}


export class Staff implements IRangedWeapon<Spell> {
  name = 'Bow';
  damage = 0;
  projectiles = [
    new Spell(),
    new Spell(),
    new Spell(),
  ];
}

export class Dagger implements IMeleeWeapon {
  name = 'Dagger';
  damage = 6;
  meleeRange = 1;
}


// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class BronzeAmulet implements IItem {
  name = 'Bronze Amulet';
  healthBonus = 1;
}

export class SilverAmulet implements IItem {
  name = 'Silver Amulet';
  healthBonus = 3;
}

export class GoldAmulet implements IItem {
  name = 'Gold Amulet';
  healthBonus = 4;
}

export class CrystalAmulet implements IEnchantedItem {
  name = 'Crystal Amulet';
  fireDamage = 3;
  partyHealthBonus = 2;
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new Sword();
export const ClericStartItem: IItem|undefined = new Poleaxe();
export const MageStartItem: IItem|undefined = new Staff();
export const ThiefStartItem: IItem|undefined = new Bow();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new SilverAmulet(), //this will be found by the warrior
    new GoldAmulet(), //this will be found by the cleric
    new CrystalAmulet(), //this will be found by the mage
    new BronzeAmulet(), //this will be found by the thief
  ];
}
