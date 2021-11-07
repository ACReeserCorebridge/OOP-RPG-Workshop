import { ICharacter, CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isMeleeWeapon, isRangedWeapon, isEnchantedItem, isConsumable } from '../off-limits/IWeapons';
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

export class Hero implements Character{
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
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }
  getASCIIStatus(): string {
    return this.health <= 0 ? "X"  : "@";
  }

}

export class Warrior extends Hero {
  classname(): CharacterClassName {
    return 'Warrior';
  }
  constructor(public name: string, public key: number) {
    super(name, key);
    equip(WarriorStartItem, this);
  }
  getASCIIStatus(): string {
    return this.health <= 0 ? "X~"  : "@";
  }
}

export class Cleric extends Hero{
  classname(): CharacterClassName {
    return 'Cleric';
  }
  constructor(public name: string, public key: number) {
    super(name, key);
    equip(ClericStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    if(this.item)
      return {
        use: this.item
      }
    else
      return {
        use: this.weapons[0]
      }
  }
  getASCIIStatus(): string {
    return this.health <= 0 ? "X!"  : "@";
  }
}

export class Mage extends Hero {
  classname(): CharacterClassName {
    return 'Mage';
  }
  constructor(public name: string, public key: number) {
    super(name, key);
    equip(MageStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    if(this.item)
      return {
        use: this.item
      }
    else
      return {
        use: this.weapons[0]
      }
  }
  getASCIIStatus(): string {
    return this.health <= 0 ? "X@"  : "@";
  }
}

export class Thief extends Hero {
  classname(): CharacterClassName {
    return 'Thief';
  }
  constructor(public name: string, public key: number) {
    super(name, key);
    equip(ThiefStartItem, this);
  }
  getASCIIStatus(): string {
    return this.health <= 0 ? "X#"  : "@";
  }
}

//todo: something about this class is code smell...
export class Feet{
  constructor(private character: ICharacter){}
  move(){
    console.log(this.character.name, this.character.item);
    if (this.character.weapons.some(x => isMeleeWeapon(x) || isRangedWeapon(x)) || 
        this.character.item  && (isConsumable(this.character.item) || isEnchantedItem(this.character.item))){
      this.character.position = Math.max(this.character.position - 5, 1);
    }
  }
}
