import { CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem } from '../off-limits/IWeapons';
import { Character } from './BaseCharacter';
import { ClericStartItem, MageStartItem, ThiefStartItem, WarriorStartItem } from './Weapons';

//todo: too many duplicate classes in this file! 
//todo: customize the chooseAction() to better fight the dragon
//todo: update the `getASCIIStatus` function(s) to return X when dead and a unique character per class

export class Warrior extends Character {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  imgUrl = "/images/conan.png";
  classname(): CharacterClassName {
    return 'Warrior';
  }
  constructor(public name: string, public key: number) {
    super();
    equip(WarriorStartItem, this);
  }
}

export class Cleric extends Character {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  imgUrl = "/images/cuthbert.png";
  classname(): CharacterClassName {
    return 'Cleric';
  }
  constructor(public name: string, public key: number) {
    super();
    equip(ClericStartItem, this);
  }
}

export class Mage extends Character {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  imgUrl = "/images/merlin.png";
  classname(): CharacterClassName {
    return 'Mage';
  }
  constructor(public name: string, public key: number) {
    super();
    equip(MageStartItem, this);
  }
}

export class Thief extends Character {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  imgUrl = "/images/bilbo.png";
  classname(): CharacterClassName {
    return 'Thief';
  }
  constructor(public name: string, public key: number) {
    super();
    equip(ThiefStartItem, this);
  }
}