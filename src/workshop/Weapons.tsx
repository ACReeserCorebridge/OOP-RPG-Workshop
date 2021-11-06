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

export class Bonk implements IMeleeWeapon {
  name = 'Bonk';
  damage = 9;
  meleeRange = 2;
}

export class SuperBonk implements IRangedWeapon<Club> {
  name = 'Super Bonk';
  damage: 0 = 0;
  projectiles: Bonk[] = [new Bonk, new Bonk, new Bonk, new Bonk, new Bonk, new Bonk, new Bonk, new Bonk, new Bonk, new Bonk];
}

// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}
export class PowerAmulet implements IEnchantedItem {
  name = 'Ice Cream';
  fireDamage = 3;
  partyHealthBonus = 4;
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new Bonk();
export const ClericStartItem: IItem|undefined = new Bonk();
export const MageStartItem: IItem|undefined = new SuperBonk();
export const ThiefStartItem: IItem|undefined = new Bonk();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new UselessAmulet(), //this will be found by the warrior
    new PowerAmulet(), //this will be found by the cleric
    new UselessAmulet(), //this will be found by the mage
    new UselessAmulet(), //this will be found by the thief
  ];
}
