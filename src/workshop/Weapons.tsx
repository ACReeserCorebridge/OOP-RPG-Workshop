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

// Melee Weapon
export class UnicornSword implements IMeleeWeapon {
  name = 'Short Sword';
  damage = 3;
  meleeRange = 2;
}

export class DeadlySword implements IMeleeWeapon {
  name = 'Long Sword';
  damage = 4;
  meleeRange = 2;
}

export class DivineSword implements IMeleeWeapon {
  name = 'Deadly Sword';
  damage = 9;
  meleeRange = 2
}

export class Javelin  implements IWeapon {
  name = 'Javelin';
  damage = 7;
}

export class Staff implements IMeleeWeapon {
  name = 'Staff';
  damage = 5;
  meleeRange = 2;
}

export class StormHammer implements IMeleeWeapon {
  name = 'StormHammer';
  damage = 9;
  meleeRange = 2;
}

// Range Weapon
export class JavelinLightning implements IRangedWeapon<Javelin> {
  name = 'Javelin Lightning'
  damage: 0 = 0;
  projectiles = [ 
    new Javelin(),
    new Javelin(),
    new Javelin()
  ];
}

export class Gun implements IWeapon {
  name = 'Gun';
  damage = 3
}

export class AirGun implements IRangedWeapon<Gun> {
  name = 'Gun'
  damage: 0 = 0;
  projectiles = [ 
    new Gun(),
    new Gun()
  ];
}

// Kludge temp name for the enchanted item
export class FireStone implements IEnchantedItem {
  name = 'FireStone';
  partyHealthBonus = 5;
}

export class StormRegun implements IEnchantedItem {
  name = 'Storm Regun';
  fireDamage = 5;
  partyHealthBonus = 3;
}

export class HealingWater implements IConsumableItem {
  name = 'Healing Water';
  healthBonus = 3;  
}

export class HolyHealingWater implements IConsumableItem {
  name = 'Holy Healing Water';
  healthBonus = 5;
}

// ITEM ASSIGNMENTS
export const WarriorStartItem: IItem|undefined = new DeadlySword();
export const ClericStartItem: IItem|undefined = new Staff();
export const MageStartItem: IItem|undefined = new JavelinLightning();
export const ThiefStartItem: IItem|undefined = new UnicornSword();

export function randomItemPick(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

class TreasureChestItems {
  public constructor(
    private readonly weapons: IItem[]
  ) { }

  public createRandomItemInChest() {
    return this.weapons[ this.generateRandomItemInChest(0, this.weapons?.length) ];
  }

  private generateRandomItemInChest(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}


function GenerateWarriorItemInChest(): IItem {
  const warriorItems = [
    new HealingWater(),
    new StormHammer(),
    new DivineSword(),
    new HolyHealingWater()
  ];

  return new TreasureChestItems(warriorItems)
    .createRandomItemInChest();
}

function GenerateClericItemInChest(): IItem {
  const clericItems = [
    new Javelin(),
    new HolyHealingWater()
  ];

  return new TreasureChestItems(clericItems)
    .createRandomItemInChest();
}

function GenerateMageItemInChest(): IItem {
  const mageItems = [
    new StormRegun(),
    new FireStone()
  ];

  return new TreasureChestItems(mageItems)
    .createRandomItemInChest();
}

function GenerateThiefItemInChest(): IItem {
  const thiefItems = [
    new HealingWater(),
    new AirGun()
  ];

  return new TreasureChestItems(thiefItems)
    .createRandomItemInChest();
}

// TREASURE ASSIGNMENTS
export function GetItemsInTreasureChests(): IItem[] {
  return [
    GenerateWarriorItemInChest(), //this will be found by the warrior
    GenerateClericItemInChest(), //this will be found by the cleric
    GenerateMageItemInChest(), //this will be found by the mage
    GenerateThiefItemInChest(), //this will be found by the thief
  ];
}
