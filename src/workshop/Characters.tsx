import { Champion } from './BaseCharacter';
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

//todo: too many duplicate classes in this file! 
//todo: customize the chooseAction() to better fight the dragon
//todo: update the `getASCIIStatus` function(s) to return X when dead and a unique character per class

export class Warrior extends Champion {
  constructor(public name: string, public key: number) {
    super('Warrior', '🦁', WarriorStartItem)
  }
}

export class Cleric extends Champion {
  constructor(public name: string, public key: number) {
    super('Cleric', '🐸', ClericStartItem)
  }
}

export class Mage extends Champion {
  constructor(public name: string, public key: number) {
    super('Mage', '🐱', MageStartItem)
  }
}

export class Thief extends Champion {
  constructor(public name: string, public key: number) {
    super('Thief', '🦊', ThiefStartItem);
  }
}
