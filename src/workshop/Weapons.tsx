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


export class RareItemEffect implements IEnchantedItem {
  fireDamage = 5;
  damage = 6;
  name = 'Rare Item Effect';
}

export class LegendItemEffect implements IEnchantedItem {
  fireDamage = 10;
  damage = 6;
  name = 'Legend Item Effect';
}

export class Tango implements IConsumableItem {
  healthBonus = 1;
  name: string = 'Tango';
}

export class HealingSalve implements IConsumableItem {
  healthBonus = 2;
  name: string = 'Healing Salve';
}

export class EnchantedMango  implements IConsumableItem {
  healthBonus = 2;
  name: string = 'Enchanted Mango ';
}

export class Crystalys implements IMeleeWeapon {
  name = 'Crystalys';
  damage = 6;
  meleeRange = 1;
}

export class DivineRapier implements IMeleeWeapon {
  name = 'DivineR Rapier';
  damage = 9;
  meleeRange = 3
}

export class AbyssalBlade implements IMeleeWeapon {
  name = 'Abyssal Blade';
  damage = 8;
  meleeRange = 2
}

export class Mekansm implements IEnchantedItem {
  fireDamage?: number | undefined;
  partyHealthBonus?: number | undefined;
  name: string;

  constructor() {
    this.fireDamage = 2;
    this.partyHealthBonus = 10;
    this.name = 'Mekansm';

  }
}

export class OctarineCore implements IEnchantedItem {
  fireDamage?: number | undefined;
  partyHealthBonus?: number | undefined;
  name: string;

  constructor() {
    this.fireDamage = 5;
    this.partyHealthBonus = 2;
    this.name = 'Octarine Core';

  }
}

export class OrchidMalevolence  implements IRangedWeapon<LegendItemEffect> {
  projectiles: LegendItemEffect[] = [];
  damage: any;
  name = 'Orchid Malevolence';

  constructor() {
    this.projectiles = [
      new RareItemEffect(),
      new RareItemEffect(),
      new RareItemEffect()
    ];
  }

}

export class MalevolenceStaff implements IRangedWeapon<LegendItemEffect> {
  projectiles: LegendItemEffect[] = [];
  damage: any;
  name = 'Malevolence Staff';

  constructor() {
    for (let x = 1; x <= 10; x++) {
      this.projectiles.push(new LegendItemEffect());
    }
  }

}

// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}


// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem | undefined = new Tango();
export const ClericStartItem: IItem | undefined = new HealingSalve();
export const MageStartItem: IItem | undefined = new EnchantedMango();
export const ThiefStartItem: IItem | undefined = new Tango();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[] {
  return [
    new DivineRapier(), //this will be found by the warrior
    new OctarineCore(), //this will be found by the cleric
    new MalevolenceStaff(), //this will be found by the mage
    new AbyssalBlade(), //this will be found by the thief
  ];
}
