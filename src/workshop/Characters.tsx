import { CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { Character } from './BaseCharacter';
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

export class Warrior extends Character {

  constructor(public name: string, public key: number) {
    super();
    equip(WarriorStartItem, this);
  }

  classname(): CharacterClassName {
    return 'Warrior';
  }
}

export class Cleric extends Character {

  constructor(public name: string, public key: number) {
    super();
    equip(ClericStartItem, this);
  }
  classname(): CharacterClassName {
    return 'Cleric';
  }
}

export class Mage extends Character {

  constructor(public name: string, public key: number) {
    super();
    equip(MageStartItem, this);
  }

  classname(): CharacterClassName {
    return 'Mage';
  }
}

export class Thief extends Character {

  constructor(public name: string, public key: number) {
    super();
    equip(ThiefStartItem, this);
  }

  classname(): CharacterClassName {
    return 'Thief';
  }
}
