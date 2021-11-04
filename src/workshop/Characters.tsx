import { ICharacter, CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isMeleeWeapon } from '../off-limits/IWeapons';
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
    super();
    equip(WarriorStartItem, this);
  }
}

export class Cleric extends Character{
  constructor(public name: string, public key: number) {
    super();
    equip(ClericStartItem, this);
  }
}

export class Mage extends Character {
  constructor(public name: string, public key: number) {
    super();
    equip(MageStartItem, this);
  }
}

export class Thief extends Character {
  constructor(public name: string, public key: number) {
    super();
    equip(ThiefStartItem, this);
  }
}