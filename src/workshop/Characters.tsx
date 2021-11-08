import { ICharacter, CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isMeleeWeapon, isRangedWeapon } from '../off-limits/IWeapons';
import { Character } from './BaseCharacter';
import {
  ClericAmuletItem,
  ClericStartItem,
  MageRingItem,
  MageStartItem,
  ThiefDaggerItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

//todo: customize the chooseAction() to better fight the dragon

export class Warrior extends Character {
  classname(): CharacterClassName {
    return 'Warrior';
  }
  constructor(public name: string, public key: number) {
    super();
    equip(WarriorStartItem, this);
  }
  chooseAction(): ICharacterActionDecision{
    if (this.item && this.health <= 2) {
      return {
        use: this.item
      }
    }

    return super.chooseAction();
  }
}

export class Cleric extends Character {
  classname(): CharacterClassName {
    return 'Cleric';
  }
  constructor(public name: string, public key: number) {
    super();
    equip(ClericStartItem, this);
  }
  chooseAction(): ICharacterActionDecision{
    if (this.health <= 3) {
      if (!this.item) {
        equip(ClericAmuletItem, this);
      }

      if (this.item) {
        return {
          use: this.item
        }
      }
    }
  
    return super.chooseAction();
  }
}

export class Mage extends Character {
  classname(): CharacterClassName {
    return 'Mage';
  }
  constructor(public name: string, public key: number) {
    super();
    equip(MageStartItem, this);
  }
  chooseAction(): ICharacterActionDecision{
    if (isRangedWeapon(this.weapons[0]) && this.weapons[0].projectiles.length === 0) {
      if (!this.item) {
        equip(MageRingItem, this);
      }

      if (this.item) {
        return {
          use: this.item
        }
      }
    }
  
    return super.chooseAction();
  }
}

export class Thief extends Character {
  classname(): CharacterClassName {
    return 'Thief';
  }
  constructor(public name: string, public key: number) {
    super();
    equip(ThiefStartItem, this);
  }

  chooseAction(): ICharacterActionDecision{
    if (isRangedWeapon(this.weapons[0]) && this.weapons[0].projectiles.length === 0) {
      if (!this.weapons.some(weap => weap.name === ThiefDaggerItem?.name)) {
        equip(ThiefDaggerItem, this);
      }

      return {
        attack: this.weapons.find(weap => weap.name === ThiefDaggerItem?.name) || this.weapons[0]
      }
    }
  
    return super.chooseAction();
  }
}
