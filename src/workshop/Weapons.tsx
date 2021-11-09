import { IItem, IMeleeWeapon, IRangedWeapon, IConsumableItem, IEnchantedItem } from "../off-limits/IWeapons";

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
export class Mana implements IEnchantedItem {
  fireDamage = 5;
  damage = 6;
  name = 'Mana';
}
export class IceAmmo implements IEnchantedItem {
  fireDamage = 10;
  damage = 6;
  name = 'Ice Ammo';
}
export class MoonstoneRenewer implements IConsumableItem {
  healthBonus = 1;
  name: string = 'Moonstone Renewer';
}
export class BiscuitOfEverlastingWill implements IConsumableItem {
  healthBonus = 2;
  name: string = 'Biscuit of Everlasting Will';
}
export class Redemption  implements IConsumableItem {
  healthBonus = 2;
  name: string = 'Redemption';
}
export class LongSword implements IMeleeWeapon {
  name = 'Long Sword';
  meleeRange = 1;
  damage = 6;
}
export class InfinityEdge implements IMeleeWeapon {
  name = 'Infinity Edge';
  meleeRange = 3
  damage = 9;
}
export class BloodThirster implements IMeleeWeapon {
  name = 'Blood Thirster';
  meleeRange = 2
  damage = 8;
}
export class MikaelsBlessing implements IEnchantedItem {
  name: string;
  fireDamage: number;
  partyHealthBonus: number;

  constructor() {
    this.fireDamage = 3;
    this.partyHealthBonus = 10;
    this.name = 'Mikael\'s Blessing';
  }
}
export class StarCaster implements IEnchantedItem {
  name: string;
  fireDamage: number;
  partyHealthBonus: number;

  constructor() {
    this.fireDamage = 3;
    this.partyHealthBonus = 2;
    this.name = 'Star Caster';
  }
}

export class BlastingWand implements IRangedWeapon<IceAmmo> {
  name = 'Blasting Wand';
  projectiles: IceAmmo[] = [];
  damage: 0 = 0;

  constructor() {
    this.projectiles = new Array(3).fill(new Mana());
  }
}

export class LichBane implements IRangedWeapon<IceAmmo> {
  name = 'Lich Bane';
  projectiles: IceAmmo[] = [];
  damage: 0 = 0;

  constructor() {
    this.projectiles = new Array(10).fill(new IceAmmo());
  }
}

// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new MoonstoneRenewer();
export const ClericStartItem: IItem|undefined = new BiscuitOfEverlastingWill();
export const MageStartItem: IItem|undefined = new Redemption();
export const ThiefStartItem: IItem|undefined = new MoonstoneRenewer();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[] {
  return [
    new InfinityEdge(), //this will be found by the warrior
    new StarCaster(), //this will be found by the cleric
    new LichBane(), //this will be found by the mage
    new BloodThirster(), //this will be found by the thief
  ];
}