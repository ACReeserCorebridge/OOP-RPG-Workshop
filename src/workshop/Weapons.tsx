import { IWeapon, IItem, IMeleeWeapon, IRangedWeapon, IConsumableItem, IEnchantedItem, MaximumProjectileWeaponDamage, MaximumMeleeWeaponRange, MaximumConsumableHealthBonus } from "../off-limits/IWeapons";

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
export class EnchantedQuiver implements IEnchantedItem {
  name = 'Enchanted Quiver';
  fireDamage = 2;
  partyHealthBonus = MaximumConsumableHealthBonus;
}

export class BattleFury implements IMeleeWeapon {
  name = 'Battle Fury';
  damage = 5;
  meleeRange = MaximumMeleeWeaponRange;
}

export class Elvenskin implements IMeleeWeapon {
  name = 'Elvin Skin';
  damage = 5;
  meleeRange = MaximumMeleeWeaponRange;
}

export class DragonLance implements IRangedWeapon<IWeapon> {
  name = 'Dragon Lance';
  damage: 0 = 0;
  projectiles = Array(MaximumProjectileWeaponDamage).fill(new Elvenskin());
}

// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new BattleFury();
export const ClericStartItem: IItem|undefined = new Elvenskin();
export const MageStartItem: IItem|undefined = new EnchantedQuiver();
export const ThiefStartItem: IItem|undefined = new DragonLance();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new BattleFury(), //this will be found by the warrior
    new Elvenskin(), //this will be found by the cleric
    new EnchantedQuiver(), //this will be found by the mage
    new DragonLance(), //this will be found by the thief
  ];
}
