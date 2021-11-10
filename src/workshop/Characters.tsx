import { ICharacter, CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isMeleeWeapon } from '../off-limits/IWeapons';
import { Character } from './BaseCharacter';
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

export class Warrior extends Character {
  classname(): CharacterClassName {
    return 'Warrior';
  }

  constructor(public name: string, public key: number) {
    super(WarriorStartItem, 'W');
  }
}

export class Cleric extends Character {
  classname(): CharacterClassName {
    return 'Cleric';
  }

  constructor(public name: string, public key: number) {
    super(ClericStartItem, 'C');
  }
}

export class Mage extends Character {
  classname(): CharacterClassName {
    return 'Mage';
  }
  constructor(public name: string, public key: number) {
    super(MageStartItem, 'M');    
  }
}

export class Thief extends Character {
  classname(): CharacterClassName {
    return 'Thief';
  }
  constructor(public name: string, public key: number) {
    super(ThiefStartItem, 'T');
  }
}
