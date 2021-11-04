
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
export class Warrior extends Character {  
  constructor(public name: string, public key: number) {    
    super('W', 'Warrior', WarriorStartItem, key);
  }  
}

export class Cleric extends Character{  
  constructor(public name: string, public key: number) {
    super('C', 'Cleric', ClericStartItem, key)
  }   
}

export class Mage  extends Character{
  constructor(public name: string, public key: number) {
    super('M', 'Mage', MageStartItem, key)
  }
}

export class Thief extends Character{
  constructor(public name: string, public key: number) {
    super('T', 'Thief', ThiefStartItem, key)
  } 
}
