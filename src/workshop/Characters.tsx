import { equip, ICharacterActionDecision } from '../off-limits/ICharacter';
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
  constructor(name: string, key: number) {
    super(name, key, 'Warrior', '⚔️');
    equip(WarriorStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }
}

export class Cleric extends BaseCharacter{
  constructor(name: string, key: number) {
    super(name, key, 'Cleric', '⚒️');
    equip(ClericStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }
}

export class Mage extends BaseCharacter {
  constructor(name: string, key: number) {
    super(name, key, 'Mage', '✨');
    equip(MageStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }
}

export class Thief extends BaseCharacter {
  constructor(name: string, key: number) {
    super(name, key, 'Thief', '🗡️');
    equip(ThiefStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }
}