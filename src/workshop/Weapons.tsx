import { IWeapon, IItem, IMeleeWeapon, IRangedWeapon, IConsumableItem, IEnchantedItem } from "../off-limits/IWeapons";

// WEAPON ARMORY
export class Sword implements IMeleeWeapon {
  name = 'Sword';
  damage = 9;
  meleeRange = 2;
}

export class EnchantedSword extends Sword {
  name = 'Enchanted Sword';
  fireDamage = 3;
}

export class Knife implements IMeleeWeapon {
  name = 'Knife';
  damage = 9;
  meleeRange = 1;
}

export class EnchantedKnife extends Knife {
  name = 'Enchanted Knife';
  fireDamage = 3;
}

export class Staff implements IRangedWeapon<StaffCharge> {
  name = 'Staff';
  damage: any;
  projectiles:StaffCharge[] = [];
  constructor() {
    for (let i = 0; i <= 100; i++) {
      this.projectiles.push(new StaffCharge());
    }
  }
}

// dragonDamage: dmg + fireDmg + boltDmg,
export class EnchantedStaff extends Staff {
  name = 'Fire bolt Staff';
  fireDamage = 3;
  damage = 9;
}

export class StaffCharge implements IWeapon {
  name = 'Fire bolt';
  damage = 3;
}

// ITEM VAULT
export class UnstablePotion implements IEnchantedItem {
  name = 'Unstable Potion';
  fireDamage = 3;
  partyHealthBonus = 4;
}

export class Stimpack implements IConsumableItem {
  name = 'Stimpack';
  healthBonus = 4;
}

// ITEM ASSIGNMENTS
// NOTES: EnchantedStaff is too OP
export const WarriorStartItem: IItem|undefined = new EnchantedSword();
export const ClericStartItem: IItem|undefined = new EnchantedSword();
export const MageStartItem: IItem|undefined = new EnchantedStaff();
export const ThiefStartItem: IItem|undefined = new EnchantedKnife();
// export const WarriorStartItem: IItem|undefined = new EnchantedStaff();
// export const ClericStartItem: IItem|undefined = new EnchantedSword();
// export const MageStartItem: IItem|undefined = new EnchantedStaff();
// export const ThiefStartItem: IItem|undefined = new EnchantedStaff();

// TREASURE ASSIGNMENTS
export function GetItemsInTreasureChests(): IItem[]{
  return [
    new Stimpack(), //this will be found by the warrior
    new UnstablePotion(), //this will be found by the cleric
    new UnstablePotion(), //this will be found by the mage
    new Stimpack(), //this will be found by the thief
  ];
}
