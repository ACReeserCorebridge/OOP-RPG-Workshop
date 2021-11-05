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

// ITEM VAULT
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class Arrow implements IWeapon {
  name = 'Arrow';
  damage = 2;
}

export class Bow implements IRangedWeapon<Arrow>{
  name: string = 'Bow';
  damage: 0 = 0;
  projectiles: Arrow[] = [];
  constructor(startingArrows: number = 10) {
    for (let i = 0; i < startingArrows; i++) {
      this.projectiles.push(new Arrow());
    }
  }
}

export class Fireball implements IWeapon {
  name = 'Fireball';
  damage = 4;
}
export class FireStaff implements IRangedWeapon<Fireball>{
  name: string = 'Fire Staff';
  damage: 0 = 0;
  projectiles: Fireball[] = [];
  constructor(manaPoints: number) {
    for (let i = 0; i < manaPoints; i++) {
      this.projectiles.push(new Fireball());
    }
  }
}

export class HealingWand implements IEnchantedItem {
  name = 'Healing Wand';
  fireDamage = 0;
  partyHealthBonus = 1;
}

export class Hammer implements IMeleeWeapon {
  name = 'Hammer';
  damage = 5;
  meleeRange = 1;
}

export class Longsword implements IMeleeWeapon {
  name = 'Longsword';
  damage = 7;
  meleeRange = 2;
}

export class HealingPotion implements IConsumableItem {
  name = 'Healing Potion';
  healthBonus = 5;
}

export class FireGloves implements IEnchantedItem {
  name = 'Fire Gloves';
  fireDamage = 3;
}

// ITEM ASSIGNMENTS
export const WarriorStartItem: IItem|undefined = new Longsword();
export const ClericStartItem: IItem|undefined = new Hammer();
export const MageStartItem: IItem|undefined = new FireStaff(30);
export const ThiefStartItem: IItem|undefined = new Bow(20);

// TREASURE ASSIGNMENTS
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new UselessAmulet(), //this will be found by the warrior
    new FireGloves(), //this will be found by the cleric
    new HealingWand(), //this will be found by the mage
    new HealingPotion(), //this will be found by the thief
  ];
}