import { CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem } from '../off-limits/IWeapons';
import { BaseCharacter } from './BaseCharacter';
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

//todo: too many duplicate classes in this file! 
//todo: customize the chooseAction() to better fight the dragon
//todo: update the `getASCIIStatus` function(s) to return X when dead and a unique character per class

export class Warrior extends BaseCharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  classname(): CharacterClassName {
    return 'Warrior';
  }
  constructor(public name: string, public key: number) {
    super();
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

export class Cleric extends BaseCharacter{
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  classname(): CharacterClassName {
    return 'Cleric';
  }
  constructor(public name: string, public key: number) {
    super();
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

export class Mage extends BaseCharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  classname(): CharacterClassName {
    return 'Mage';
  }
  constructor(public name: string, public key: number) {
    super();
    equip(MageStartItem, this);
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

export class Thief extends BaseCharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  move(){
    this.feet.move();
  }
  classname(): CharacterClassName {
    return 'Thief';
  }
  constructor(public name: string, public key: number) {
    super();
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