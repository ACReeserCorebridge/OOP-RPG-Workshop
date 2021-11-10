import { IWeapon, IItem, IMeleeWeapon, IRangedWeapon, IConsumableItem, IEnchantedItem } from "../off-limits/IWeapons";
import { RollDice } from "./Utils";

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

export class SwordChuks implements IMeleeWeapon {
  name = 'Sword-Chuks';
  damage = 9;
  meleeRange = 1;
}

export class Masamune implements IMeleeWeapon,IEnchantedItem {
  name = 'Masamune';
  damage = 9;
  fireDamage = 5;
  meleeRange = 1;
}

export class ElderWand implements IRangedWeapon<LightningBolt>,IItem,IEnchantedItem {
  name = "Elder Wand";
  damage = 9 as 0;
  fireDamage = 5;
  projectiles = ChargeElderWand();
}

export class LightningBolt implements IWeapon {
  damage = 9;
  name = 'Lightning Bolt';
}

export class Arrow implements IWeapon {
  damage = 9;
  name= 'Arrow';
}

export class ArtemisBow implements IRangedWeapon<Arrow>, IItem, IEnchantedItem
{
  name = 'ArtemisBow';
  damage = 9 as 0;
  fireDamage = 5;
  projectiles = FillQuiver();
}

// ITEM VAULT
// todo: add more and better items!
export class UselessAmulet implements IItem {
  name = 'Useless Amulet';
}

export class PotionOfHealing implements IConsumableItem {
  healthBonus = RollDice(2,4) + 2;
  name = "Potion of Healing";
}

export class PrayerBeads implements IEnchantedItem {
  healthBonus = 5;
  name = "Prayer Beads";
}

export class WandOfFireball implements IEnchantedItem,IConsumableItem {
  fireDamage = 50;
  healthBonus = 0;
  name = "Wand of Fireball";
}

export class BagOfMoney implements IItem {
  name= "Giant bag of money";
}

// ITEM ASSIGNMENTS
// todo: assign starting items
export const WarriorStartItem: IItem|undefined = new SwordChuks();
export const ClericStartItem: IItem|undefined = new Masamune();
export const MageStartItem: IItem|undefined = new ElderWand();
export const ThiefStartItem: IItem|undefined = new ArtemisBow();

// TREASURE ASSIGNMENTS
// todo: assign treasure from chests
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new PotionOfHealing(), //this will be found by the warrior
    new PrayerBeads(), //this will be found by the cleric
    new WandOfFireball(), //this will be found by the mage
    new BagOfMoney(), //this will be found by the thief
  ];
}
function FillQuiver() : Array<Arrow> {
  return [new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow(),
          new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow(),
          new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow(),
          new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow(),
          new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow(),
          new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow(),
          new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow(),
          new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow(),
          new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow(),
          new Arrow(),new Arrow(),new Arrow(),new Arrow(),new Arrow()];
}

function ChargeElderWand() : Array<LightningBolt> {
  return [new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),
          new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),
          new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),
          new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),
          new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),
          new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),
          new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),
          new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),
          new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),
          new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt(),new LightningBolt()];
}

