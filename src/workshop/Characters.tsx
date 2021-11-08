import { CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isRangedWeapon } from '../off-limits/IWeapons';
import { Character } from './BaseCharacter';
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

export class Warrior extends Character {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;

  classname(): CharacterClassName {
    return 'Warrior';
  }

  constructor(public name: string, public key: number) {
    super(name, key);
    equip(WarriorStartItem, this);
  }

  chooseAction(): ICharacterActionDecision {
    if (this.health == 1 && this.item) {
      return {
        use: this.item
      }
    } else {
      return {
        attack: this.weapons[0]
      }
    }
  }

  getASCIIStatus(): string {
    if (this.health) {
      return "W";
    } else {
      return super.getASCIIStatus();
    }
  }
}

export class Cleric extends Character {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;

  classname(): CharacterClassName {
    return 'Cleric';
  }

  constructor(public name: string, public key: number) {
    super(name, key);
    equip(ClericStartItem, this);
  }

  chooseAction(): ICharacterActionDecision {
    if (this.health <= 2 && this.item) {
      return {
        use: this.item
      }
    } else {
      return {
        attack: this.weapons[0]
      }
    }
  }

  getASCIIStatus(): string {
    if (this.health) {
      return "C";
    } else {
      return super.getASCIIStatus();
    }
  }
}

export class Mage extends Character {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;

  classname(): CharacterClassName {
    return 'Mage';
  }

  constructor(public name: string, public key: number) {
    super(name, key);
    equip(MageStartItem, this);
  }

  chooseAction(): ICharacterActionDecision {
    if (this.item && isRangedWeapon(this.weapons[0]) && this.weapons[0].projectiles.length == 0) {
      return {
        use: this.item
      }
    } else {
      return {
        attack: this.weapons[0]
      }
    }
  }

  getASCIIStatus(): string {
    if (this.health) {
      return "M";
    } else {
      return super.getASCIIStatus();
    }
  }
}

export class Thief extends Character {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;

  classname(): CharacterClassName {
    return 'Thief';
  }

  constructor(public name: string, public key: number) {
    super(name, key);
    equip(ThiefStartItem, this);
  }

  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0]
    }
  }

  getASCIIStatus(): string {
    if (this.health) {
      return "T";
    } else {
      return super.getASCIIStatus();
    }
  }
}