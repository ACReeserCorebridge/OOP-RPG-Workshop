import { equip } from '../off-limits/ICharacter';
import { Character } from './BaseCharacter';
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

export class Warrior extends Character {
  constructor(public name: string, public key: number) {
    super('Warrior');
    equip(WarriorStartItem, this);
  }
}

export class Cleric extends Character {
  constructor(public name: string, public key: number) {
    super('Cleric');
    equip(ClericStartItem, this);
  }
}
export class Mage extends Character {
  constructor(public name: string, public key: number) {
    super('Mage');
    equip(MageStartItem, this);
  }
}

export class Thief extends Character {
  constructor(public name: string, public key: number) {
    super('Thief');
    equip(ThiefStartItem, this);
  }
}