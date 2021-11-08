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

export class Sword implements IMeleeWeapon {
  name = 'Sword';
  damage = 5;
  meleeRange = 1;
}

export class Dagger implements IMeleeWeapon {
  name = 'Dagger';
  damage = 4;
  meleeRange = 1;
}

export class Hammer implements IMeleeWeapon {
  name = 'Hammer';
  damage = 3;
  meleeRange = 1;
}

export class Arrow implements IMeleeWeapon {
  name = "Arrow";
  damage = 1;
  meleeRange = 1;
}

export class MagicArrow implements IMeleeWeapon {
  name = "Magic Arrow";
  damage = 2;
  meleeRange = 1;
}

export class Bow implements IRangedWeapon<Arrow> {
  name = "Bow";
  damage: 0 = 0;
  projectiles: Arrow[] = [
    new Arrow(),
    new Arrow(),
    new Arrow()
  ];
}

export class Staff implements IRangedWeapon<MagicArrow> {
  name = "Staff";
  damage: 0 = 0;
  projectiles: MagicArrow[] = [
    new MagicArrow(),
    new MagicArrow(),
    new MagicArrow()
  ];
}

export class DivineAmulet implements IEnchantedItem {
  name = "Divine Amulet";
  partyHealthBonus = 2;
}

export class RingOfFire implements IEnchantedItem {
  name = "Ring of Fire";
  fireDamage = 3;
}

// ITEM VAULT
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class SmallHealthPotion implements IConsumableItem {
  name = 'Small Health Potion';
  healthBonus = 2;
}

export class LargeHealthPotion implements IConsumableItem {
  name = 'Large Health Potion';
  healthBonus = 3;
}


// ITEM ASSIGNMENTS
export const WarriorStartItem: IItem|undefined = new Sword();
export const ClericStartItem: IItem|undefined = new Hammer();
export const MageStartItem: IItem|undefined = new Staff();
export const ThiefStartItem: IItem|undefined = new Bow();
export const ClericAmuletItem: IItem|undefined = new DivineAmulet();
export const MageRingItem: IItem|undefined = new RingOfFire();
export const ThiefDaggerItem: IItem|undefined = new Dagger();

// TREASURE ASSIGNMENTS
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new LargeHealthPotion(), //this will be found by the warrior
    new SmallHealthPotion(), //this will be found by the cleric
    new SmallHealthPotion(), //this will be found by the mage
    new LargeHealthPotion(), //this will be found by the thief
  ];
}
