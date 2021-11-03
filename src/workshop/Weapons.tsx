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

export class FireMagic implements IEnchantedItem {
  name = "Fire Magic";
  fireDamage = 3;
}

export class Firebolt extends FireMagic implements IWeapon {
  name = "Firebolt";
  damage = 3;
}

export class MagicWand implements IRangedWeapon<Firebolt> {
  name = 'Magic Wand';
  damage: 0 = 0;
  projectiles = [
    new Firebolt, new Firebolt, new Firebolt, new Firebolt, new Firebolt,
    new Firebolt, new Firebolt, new Firebolt, new Firebolt, new Firebolt,
    new Firebolt, new Firebolt, new Firebolt, new Firebolt, new Firebolt,
    new Firebolt, new Firebolt, new Firebolt, new Firebolt, new Firebolt,
    new Firebolt, new Firebolt, new Firebolt, new Firebolt, new Firebolt,
  ];
}

export class Arrow implements IWeapon {
  name = "Arrow";
  damage = 3;
}

export class LongBow implements IRangedWeapon<Arrow> {
  name = "Long Bow";
  damage: 0 = 0;
  projectiles = [
    new Arrow, new Arrow, new Arrow, new Arrow, new Arrow,
    new Arrow, new Arrow, new Arrow, new Arrow, new Arrow,
    new Arrow, new Arrow, new Arrow, new Arrow, new Arrow,
    new Arrow, new Arrow, new Arrow, new Arrow, new Arrow,
    new Arrow, new Arrow, new Arrow, new Arrow, new Arrow,
  ];
}


export class FlamingSword extends FireMagic implements IMeleeWeapon {
  name = "Flaming Sword";
  damage = 3;
  meleeRange = 1;
  fireDamage = 3;
}

export class ArcaneDagger extends FireMagic implements IMeleeWeapon {
  name = "Arcane Dagger";
  damage = 3;
  meleeRange = 2; // throwing and returning
  fireDamage = 3;
}


// ITEM VAULT
export class AmuletOfHealth implements IEnchantedItem {
  name = 'Amulet Of Health';
  partyHealthBonus = 5;
}

export class Potion implements IConsumableItem {
  name = 'Potion';
  healthBonus = 5;
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new FlamingSword();
export const ClericStartItem: IItem|undefined = new ArcaneDagger();
export const MageStartItem: IItem|undefined = new MagicWand();
export const ThiefStartItem: IItem|undefined = new ArcaneDagger();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new Potion(), //this will be found by the warrior
    new AmuletOfHealth(), //this will be found by the cleric
    new Potion(), //this will be found by the mage
    new LongBow(), //this will be found by the thief
  ];
}
