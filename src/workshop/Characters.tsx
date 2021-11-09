import { ICharacter, CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isMeleeWeapon } from '../off-limits/IWeapons';
import { Character } from './BaseCharacter';
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

//todo: customize the chooseAction() to better fight the dragon

export class Warrior extends Character {
  feet = new Feet(this);
  classname(): CharacterClassName {
    return 'Warrior';
  }
  move(){
    this.feet.move();
  }
  constructor(public name: string, public key: number) {
    super(WarriorStartItem, 'W');
  }
}

export class Cleric extends Character {
  feet = new Feet(this);
  classname(): CharacterClassName {
    return 'Cleric';
  }
  move(){
    this.feet.move();
  }
  constructor(public name: string, public key: number) {
    super(ClericStartItem, 'C');
  }
}

export class Mage extends Character {
  feet = new Feet(this);
  classname(): CharacterClassName {
    return 'Mage';
  }
  constructor(public name: string, public key: number) {
    super(MageStartItem, 'M');    
  }
  move(){
    this.feet.move();
  }
}

export class Thief extends Character {
  feet = new Feet(this);
  move(){
    this.feet.move();
  }
  classname(): CharacterClassName {
    return 'Thief';
  }
  constructor(public name: string, public key: number) {
    super(ThiefStartItem, 'T');
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
