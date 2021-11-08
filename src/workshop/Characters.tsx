import { ICharacter, CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isMeleeWeapon, isWeapon } from '../off-limits/IWeapons';
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

export class Hero implements ICharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  private _className: CharacterClassName = 'Warrior';
  classname(): CharacterClassName {
    return this._className;
  }
  move(){
    if (this.weapons.some(x => isMeleeWeapon(x))){
      this.position = Math.max(this.position - 5, 1);
    }
  }
  constructor(public name: string, public key: number, className: CharacterClassName, startItem: IItem|undefined) {
    this._className = className;
    equip(startItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    if (this.health <= 1 && this.item) {
      return isWeapon(this.item) ? {attack: this.item} : {use: this.item};
    }
    return {attack: this.weapons[this.weapons.length-1]};
  }
  getASCIIStatus(): string {
      return this.health > 0 ? this.classname().substring(0, 1) : "X";
  }
}

export class Warrior extends Hero {
  constructor(public name: string, public key: number) {
    super(name, key, 'Warrior', WarriorStartItem);
  }
}

export class Cleric extends Hero {
  constructor(public name: string, public key: number) {
    super(name, key, 'Cleric', ClericStartItem);
  }
}

export class Mage extends Hero {
  constructor(public name: string, public key: number) {
    super(name, key, 'Mage', MageStartItem);
  }
}

export class Thief extends Hero {
  constructor(public name: string, public key: number) {
    super(name, key, 'Thief', ThiefStartItem);
  }
}

// //todo: something about this class is code smell...
// export class Feet{
//   constructor(private character: ICharacter){}
//   move(){
//     if (this.character.weapons.some(x => isMeleeWeapon(x))){
//       this.character.position = Math.max(this.character.position - 5, 1);
//     }
//   }
// }
