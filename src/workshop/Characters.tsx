import { equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IItem } from '../off-limits/IWeapons';
import { Character } from './BaseCharacter';
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

//todo: too many duplicate classes in this file! 
//todo: customize the chooseAction() to better fight the dragon
//todo: update the `getASCIIStatus` function(s) to return X when dead and a unique character per class

export class Warrior extends Character {
  constructor(public name: string, public key: number) {
    super('Warrior', 'W', WarriorStartItem);
  }
}

export class Cleric extends Character {
  constructor(public name: string, public key: number) {
    super('Cleric', 'C', ClericStartItem);
  }
}

export class Mage extends Character {
  constructor(public name: string, public key: number) {
    super('Mage', 'M', MageStartItem);
  }

  chooseAction(): ICharacterActionDecision {
    if (this.amIAlmostDying()) {
      return {
        use: this.item as IItem
      }
    }

    return {
      attack: this.weapons[0]
    }
  }
}

export class Thief extends Character {
  constructor(public name: string, public key: number) {
    super('Thief', 'T', ThiefStartItem);
  }
}
