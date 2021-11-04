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

export class Warrior extends Character implements ICharacter {
  constructor(public name: string, public key: number) {
    super(name,key, WarriorStartItem);
    this.characterClass = 'Warrior';
  }
}

export class Cleric extends Character implements ICharacter{
  constructor(public name: string, public key: number) {
    super(name,key, ClericStartItem);
    this.characterClass = 'Cleric';
  }
}

export class Mage extends Character implements ICharacter {
  constructor(public name: string, public key: number) {
    super(name,key, MageStartItem);
    this.characterClass = 'Mage';
  }
}

export class Thief extends Character implements ICharacter {
  constructor(public name: string, public key: number) {
    super(name,key, ThiefStartItem);
    this.characterClass = 'Thief';
  }
}

//todo: something about this class is code smell...
export class Feet{
  constructor(private character: ICharacter){}
  move(){
    if (this.character.weapons.some(x => isMeleeWeapon(x))){
      this.character.position = Math.max(this.character.position - 5, 1);
    }
  }
}
