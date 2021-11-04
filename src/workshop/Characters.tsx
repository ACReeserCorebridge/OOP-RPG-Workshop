import { ICharacter, CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isMeleeWeapon, isRangedWeapon } from '../off-limits/IWeapons';
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

abstract class BaseCharacter implements ICharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  feet = new Feet(this);

  abstract classname(): CharacterClassName;
  abstract doEquip(): string;
  abstract chooseAction(): ICharacterActionDecision;
  abstract ASCIIChar(): string;

  constructor(public name: string, public key: number) {
    this.doEquip();
  }

  move(){
    this.feet.move();
  }

  getASCIIStatus(): string {
    if (this.health > 0) {
      return this.ASCIIChar();
    }

    return "X";
  }
}

export class Warrior extends BaseCharacter {
  classname(): CharacterClassName {
    return 'Warrior';
  }

  doEquip(): string {
    return equip(WarriorStartItem, this);
  }

  chooseAction(): ICharacterActionDecision {
    let currentWeapon: IWeapon | undefined = undefined;
    for (let weapon of this.weapons) {
      if (isMeleeWeapon(weapon) && weapon.meleeRange >= this.position) {
        currentWeapon = weapon;
        break;
      } else if (isRangedWeapon(weapon)) {
        currentWeapon = weapon;
      } else if (currentWeapon && !isRangedWeapon(currentWeapon) && currentWeapon.damage < weapon.damage) {
        currentWeapon = weapon;
      }
    };

    if (currentWeapon) {
      return {
        attack: currentWeapon
      };
    }
    
    if (this.item) {
      return {
        use: this.item
      };
    }
    return {
      attack: this.weapons[0]
    };
  }

  ASCIIChar(): string {
    return "W";
  }
}

export class Cleric extends BaseCharacter {
  classname(): CharacterClassName {
    return 'Cleric';
  }

  doEquip(): string {
    return equip(ClericStartItem, this);
  }

  chooseAction(): ICharacterActionDecision {
    let currentWeapon: IWeapon | undefined = undefined;
    for (let weapon of this.weapons) {
      if (isMeleeWeapon(weapon) && weapon.meleeRange >= this.position) {
        currentWeapon = weapon;
        break;
      } else if (currentWeapon && currentWeapon.damage < weapon.damage) {
        currentWeapon = weapon;
      }
    };

    if (currentWeapon) {
      return {
        attack: currentWeapon
      };
    }
    
    if (this.item) {
      return {
        use: this.item
      };
    }
    return {
      attack: this.weapons[0]
    };
  }

  ASCIIChar(): string {
    return "C";
  }
}

export class Mage extends BaseCharacter {
  classname(): CharacterClassName {
    return 'Mage';
  }

  doEquip(): string {
    return equip(MageStartItem, this);
  }

  chooseAction(): ICharacterActionDecision {
    let currentWeapon: IWeapon | undefined = undefined;
    for (let weapon of this.weapons) {
      if (isRangedWeapon(weapon)) {
        currentWeapon = weapon;
        break;
      } else if (currentWeapon && currentWeapon.damage < weapon.damage) {
        currentWeapon = weapon;
      }
    };

    if (currentWeapon) {
      return {
        attack: currentWeapon
      };
    }
    
    if (this.item) {
      return {
        use: this.item
      };
    }
    return {
      attack: this.weapons[0]
    };
  }

  ASCIIChar(): string {
    return "M";
  }
}

export class Thief extends BaseCharacter {
  classname(): CharacterClassName {
    return 'Thief';
  }

  doEquip(): string {
    return equip(ThiefStartItem, this);
  }

  chooseAction(): ICharacterActionDecision {
    let currentWeapon: IWeapon | undefined = undefined;
    for (let weapon of this.weapons) {
      if (isMeleeWeapon(weapon) && weapon.meleeRange >= this.position) {
        currentWeapon = weapon;
        break;
      } else if (isRangedWeapon(weapon)) {
        currentWeapon = weapon;
      } else if (!currentWeapon) {
        currentWeapon = weapon;
      } else if (!isRangedWeapon(currentWeapon) && currentWeapon.damage < weapon.damage) {
        currentWeapon = weapon;
      }
    };

    if (currentWeapon) {
      return {
        attack: currentWeapon
      };
    }
    
    if (this.item) {
      return {
        use: this.item
      };
    }
    return {
      attack: this.weapons[0]
    };
  }


  ASCIIChar(): string {
    return "T";
  }
}

//todo: something about this class is code smell...
export class Feet{
  constructor(private character: ICharacter){}
  move(){
    if (this.character.weapons.some(x => isMeleeWeapon(x))){
      this.character.position = Math.max(this.character.position - 5, 1);
    }
  }
}
