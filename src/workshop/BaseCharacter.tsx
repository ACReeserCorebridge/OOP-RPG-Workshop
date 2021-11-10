import { equip, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon, isConsumable, isEnchantedItem, isRangedWeapon } from "../off-limits/IWeapons";
import { CharacterClass } from "./Class";
import { BareHands } from "./Weapons";

export class BaseCharacter implements ICharacter {
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;

  constructor(
    public name: string,
    public key: number,
    public _class: CharacterClass
  ) {
    this.health = _class.health;
    this.position = _class.position;
    equip(this._class.getRandomWeapon(), this);
  }
  classname = () => this._class.classname();
  getASCIIStatus = () => (this.health < 1 ? "X" : this._class.getASCIIStatus());

  chooseAction(): ICharacterActionDecision {
    if (this.item) {
      if (isConsumable(this.item)) {
        if (this.item.healthBonus / this.health > 1.0) {
          return {
            use: this.item,
          };
        }
      } else if (isEnchantedItem(this.item)) {
        return {
          use: this.item,
        };
      }
    }
    if (isRangedWeapon(this.weapons[0])) {
      if (this.weapons[0].projectiles.length < 1) {
        this.weapons[0] = new BareHands();
      }
    }
    return {
      attack: this.weapons[0],
    };
  }

  move() {
    // run away!
    if (this.health <= 2) {
      this.position = Math.min(this.position + 5, 10);
    } else if (this.weapons.some((x) => isMeleeWeapon(x))) {
      this.position = Math.max(this.position - 5, 1);
    }
  }
}
