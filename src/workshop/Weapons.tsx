import { IWeapon, IItem, IMeleeWeapon, IRangedWeapon, IConsumableItem, IEnchantedItem, MaximumConsumableHealthBonus, MaximumWeaponDamage, MaximumFireDamage, MaximumProjectileWeaponDamage } from "../off-limits/IWeapons";

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

export class SteelSword implements IMeleeWeapon {
  meleeRange: number = MaximumWeaponDamage;
  damage: number = MaximumWeaponDamage;
  name = 'Steel Sword';
}

export class HeavyMace implements IMeleeWeapon {
  meleeRange: number = MaximumWeaponDamage;
  damage: number = MaximumWeaponDamage;
  name = 'Heavy Mace';
}

export class FireArrow implements IWeapon{
  damage: number = MaximumProjectileWeaponDamage;
  name: string = "Fire Arrow";
}
export class SilverBow implements IRangedWeapon<FireArrow> {
  readonly damage = 0;
  projectiles: FireArrow[] = [];

  constructor(){
    for(let i = 0; i < 100; i++){
      this.projectiles.push(new FireArrow())
    }
  }

  name = 'Silver Bow';
}
// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class HealthPotion implements IConsumableItem {
  healthBonus = MaximumConsumableHealthBonus;
  name = 'Health Potion';
  
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new SteelSword();
export const ClericStartItem: IItem|undefined = new HeavyMace();
export const MageStartItem: IItem|undefined = undefined;
export const ThiefStartItem: IItem|undefined = new SilverBow();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new HealthPotion(), //this will be found by the warrior
    new HealthPotion(), //this will be found by the cleric
    new HealthPotion(), //this will be found by the mage
    new HealthPotion(), //this will be found by the thief
  ];
}
