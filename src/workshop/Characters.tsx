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

export class Warrior implements ICharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  feet = new Feet(this);
  classname(): CharacterClassName {
    return 'Warrior';
  }
  move(){
    this.feet.move();
  }
  constructor(public name: string, public key: number) {
    equip(WarriorStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }
  getASCIIStatus(): string {
      return "@";
  }
}

export class Cleric implements ICharacter{
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  feet = new Feet(this);
  classname(): CharacterClassName {
    return 'Cleric';
  }
  move(){
    this.feet.move();
  }
  constructor(public name: string, public key: number) {
    equip(ClericStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }
  getASCIIStatus(): string {
      return "@";
  }
}

export class Mage implements ICharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  feet = new Feet(this);
  classname(): CharacterClassName {
    return 'Mage';
  }
  constructor(public name: string, public key: number) {
    equip(MageStartItem, this);
  }
  move(){
    this.feet.move();
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }
  getASCIIStatus(): string {
      return "@";
  }
}

export class Thief implements ICharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  feet = new Feet(this);
  move(){
    this.feet.move();
  }
  classname(): CharacterClassName {
    return 'Thief';
  }
  constructor(public name: string, public key: number) {
    equip(ThiefStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }
  getASCIIStatus(): string {
      return "@";
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
