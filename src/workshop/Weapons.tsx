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
export class ArrowShot implements IMeleeWeapon {
  name = "Arrow Shot";
  damage = 2;
  meleeRange = 1;
}

export class MagicArrow implements IMeleeWeapon {
  name = "Magic Arrow";
  damage = 2;
  meleeRange = 1;
}

export class CriticalShot implements IMeleeWeapon {
  name = "Critical Shot";
  damage = 3;
  meleeRange = 1;
}

export class IceDriver implements IMeleeWeapon {
  name = "Ice Driver";
  damage = 3;
  meleeRange = 1;
}

export class Snipe implements IMeleeWeapon {
  name = "Snipe";
  damage = 5;
  meleeRange = 1;
}

export class EarthSpike implements IMeleeWeapon {
  name = "Earth Spike";
  damage = 3;
  meleeRange = 1;
}

export class ManaStrike implements IMeleeWeapon {
  name = "Mana Strike";
  damage = 5;
  meleeRange = 1;
}

export class GreatSword implements IMeleeWeapon {
  name = 'Great Sword';
  damage = 5;
  meleeRange = 1;
}

export class GreatMace implements IMeleeWeapon {
  name = 'Great Mace';
  damage = 3;
  meleeRange = 1;
}

export class GreatBow implements IRangedWeapon<IWeapon> {
  name = "Great Bow";
  damage: 0 = 0;
  projectiles = [
    new ArrowShot(),
    new CriticalShot(),
    new Snipe(),
  ];
}

export class GreatStaff implements IRangedWeapon<IWeapon> {
  name = "Great Staff";
  damage: 0 = 0;
  projectiles = [
    new MagicArrow(),
    new EarthSpike(),
    new IceDriver(),
    new ManaStrike(),
  ];
}
// ITEM VAULT
// todo: add more and better items!
export class AmuletofHealth implements IEnchantedItem {
  name = "Amulet of Health"
  partyHealthBonus = 5
}

export class FireLordRing implements IEnchantedItem {
  name = "Fire Lord Ring"
  partyHealthBonus = 2
  fireDamage = 5
}

export class LargeHealthPotion implements IConsumableItem {
  name = 'Large Health Potion';
  healthBonus = 3;
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new GreatSword();
export const ClericStartItem: IItem|undefined = new GreatMace();
export const MageStartItem: IItem|undefined = new GreatStaff();
export const ThiefStartItem: IItem|undefined = new GreatBow();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new LargeHealthPotion(), //this will be found by the warrior
    new AmuletofHealth(), //this will be found by the cleric
    new FireLordRing(), //this will be found by the mage
    new LargeHealthPotion(), //this will be found by the thief
  ];
}
