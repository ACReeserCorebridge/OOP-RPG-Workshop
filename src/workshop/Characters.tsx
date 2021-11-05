import { ICharacter, CharacterClassName, equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IWeapon, IItem, isConsumable, isMeleeWeapon } from "../off-limits/IWeapons";
import {
  ClericStartItem,
  MageStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

const STARTING_HEALTH = 5;
const STARTING_POSITION = 10;
class DragonWarrior implements ICharacter {
  health: number = STARTING_HEALTH;
  position: number = STARTING_POSITION;
  weapons: IWeapon[] = [];
  item?: IItem;
  
  constructor(public name: string, public key: number) {
  }
  classname(): CharacterClassName {
    throw new Error("Method not implemented.");
  }
  move(){
    if (this.weapons.some(x => isMeleeWeapon(x))){
      this.position = Math.max(this.position - 10, 1);
    }
  }
  getASCIIStatus(): string {
    return this.health > 0 ? "@" : "X";
  }
  chooseAction(): ICharacterActionDecision {
    let healthPercentage = (this.health / STARTING_HEALTH) * 100;
    if (healthPercentage > 20) {
      return {
        attack: this.weapons[0]
      };
    } else {
      if (this.item && isConsumable(this.item)) {
        return {
          use: this.item
        };
      }
    }

    // fallback
    return {
      attack: this.weapons[0]
    };
  }
}

export class Warrior extends DragonWarrior {
  classname(): CharacterClassName {
    return 'Warrior';
  }
  constructor(public name: string, public key: number) {
    super(name, key);
    equip(WarriorStartItem, this);
  }
}

export class Cleric extends DragonWarrior{
  classname(): CharacterClassName {
    return 'Cleric';
  }
  constructor(public name: string, public key: number) {
    super(name, key);
    equip(ClericStartItem, this);
  }
  chooseAction(): ICharacterActionDecision {
    if (this.item) {
      return {
        use: this.item
      }
    }

    return {
      attack: this.weapons[0]
    }
  }
}

export class Mage extends DragonWarrior {
  classname(): CharacterClassName {
    return 'Mage';
  }
  constructor(public name: string, public key: number) {
    super(name, key);
    equip(MageStartItem, this);
  }
}

export class Thief extends DragonWarrior {
  classname(): CharacterClassName {
    return 'Thief';
  }
  constructor(public name: string, public key: number) {
    super(name, key);
    equip(ThiefStartItem, this);
  }
}
