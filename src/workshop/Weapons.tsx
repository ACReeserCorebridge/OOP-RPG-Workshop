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

export class Redhorse implements IConsumableItem {
  healthBonus = 4;
  name = 'Redhorse';
  
}

export class Club implements IMeleeWeapon {
  name = 'Club';
  damage = 2;
  meleeRange = 2;
}

export class Grenade implements IMeleeWeapon {
  name = 'Grenade';
  damage = 2;
  meleeRange = 2;
}

export class GrenadeLauncher implements IRangedWeapon<Grenade> {
  name = 'GrenadeLauncher';
  damage:0 = 0;
  projectiles: Grenade[] = [
    new Grenade(), new Grenade()
  ];
  
}

export class BattleFury implements IMeleeWeapon {
  name = 'Battle Fury';
  damage = 2;
  meleeRange = 2;
}

export class BloodThorn implements IMeleeWeapon {
  name = 'Blood Thorn';
  damage = 2;
  meleeRange = 2;
}

export class AghanimsBlessing implements IEnchantedItem {
  name = 'Aghanims Blessing';
  fireDamage = 3;
  partyHealthBonus = 4;
}


// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new Redhorse();
export const ClericStartItem: IItem|undefined = new Redhorse();
export const MageStartItem: IItem|undefined = undefined;
export const ThiefStartItem: IItem|undefined = new Redhorse();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new GrenadeLauncher(), //this will be found by the warrior
    new BattleFury(), //this will be found by the cleric
    new AghanimsBlessing(), //this will be found by the mage
    new BloodThorn(), //this will be found by the thief
  ];
}
