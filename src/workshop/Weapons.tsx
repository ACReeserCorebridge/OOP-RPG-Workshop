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

export class Hammer implements IMeleeWeapon {
  name = 'Hammer';
  damage = 5;
  meleeRange = 2;
}

export class Flail implements IMeleeWeapon {
  name = 'Flail';
  damage = 8;
  meleeRange = 2;
}

export class FlamingArrow implements IMeleeWeapon {
  name = 'Flaming Arrow';
  damage = 4;
  meleeRange = 2;
}

export class ArrowSpray implements IRangedWeapon<FlamingArrow> {
  name = 'Arrow Spray';
  damage: 0 = 0;
  projectiles = [new FlamingArrow, new FlamingArrow, new FlamingArrow, new FlamingArrow, new FlamingArrow]
}

// ITEM VAULT
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class MagicFog implements IEnchantedItem {
  name = 'MagicFog';
  fireDamage = 4;
  partyHealthBonus = 1;
}

export class HealthBoost implements IConsumableItem {
  name = 'Health Boost';
  healthBonus = 10;
}


// ITEM ASSIGNMENTS
export const WarriorStartItem: IItem|undefined = new ArrowSpray();
export const ClericStartItem: IItem|undefined = new Hammer();
export const MageStartItem: IItem|undefined = undefined;
export const ThiefStartItem: IItem|undefined = new Flail();

// TREASURE ASSIGNMENTS
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new Hammer(),
    new HealthBoost(),
    new MagicFog(),
    new ArrowSpray()
  ];
}
