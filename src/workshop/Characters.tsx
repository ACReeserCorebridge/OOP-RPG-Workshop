import { ICharacter, CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isMeleeWeapon, isEnchantedItem } from '../off-limits/IWeapons';
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
export class BaseCharacter implements ICharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  feet = new Feet(this);
  classname(): CharacterClassName {
    return this.className;
  }
  move(){
    this.feet.move();
  }
  constructor(public className: CharacterClassName, public name: string, public key: number) {
  }
  chooseAction(): ICharacterActionDecision {
    let weapon = this.getLatestWeapon();
    // use the Item before the dragon attacks: 
    // it saves few moves
    if (this.item) {
      return {
        use: this.item
      }
    }
    return {
      attack: weapon
    }
  }
  getLatestWeapon(): IWeapon {
    return this.weapons[this.weapons.length - 1];
  }
  getASCIIStatus(): string {
    if (this.isDead()) {
      return "X";
    }
    return this.className[0];
  }
  isDead(): boolean {
    return this.health < 1;
  }
}


export class Warrior extends BaseCharacter {
  constructor(public name: string, public key: number) {
    super('Warrior', name, key);
    equip(WarriorStartItem, this);
  }
}

export class Cleric extends BaseCharacter{
  constructor(public name: string, public key: number) {
    super('Cleric', name, key);
    equip(ClericStartItem, this);
  }
}

export class Mage extends BaseCharacter {
  mana = 1;
  constructor(public name: string, public key: number) {
    super('Mage', name, key);
    equip(MageStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    let weapon = this.getLatestWeapon();
    if (this.health < 3 && this.item && this.mana > 0) {
      this.mana--;
      return {
        use: this.item
      }
    }
    return {
      attack: weapon
    }
  }
}

export class Thief extends BaseCharacter {
  constructor(public name: string, public key: number) {
    super('Thief', name, key);
    equip(ThiefStartItem, this);
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
