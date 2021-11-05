import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon, IConsumableItem, IEnchantedItem, IMeleeWeapon } from "../off-limits/IWeapons";
import { isWeaponFitForUse as isWeaponFit } from "./Weapons";

export class BaseCharacter implements ICharacter {
    health: number = 10;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;
    feet = new Feet(this);

    constructor(
        public name: string,
        public key : number,
        private className : CharacterClassName,
        private ASCIIStatus : string) {
    }

    classname(): CharacterClassName {
        return this.className;
    }

    move(){
        this.feet.move();
    }

    chooseAction(): ICharacterActionDecision {
      if (this.health < 3 && this.item && (this.item as IConsumableItem).healthBonus)
        return { use: this.item };
      if (this.health < 5 && this.item && (this.item as IEnchantedItem).partyHealthBonus)
        return { use: this.item };

      let availableWeapons = this.weapons.filter(weapon => isWeaponFit(weapon));

      return { attack: availableWeapons[0] };
    }

    getASCIIStatus(): string {
        return this.ASCIIStatus;
    }
}

export class Feet {
  constructor(private character: ICharacter) { }
  move() {
    if (this.character.weapons.length &&
        isMeleeWeapon(this.character.weapons.filter(weapon => isWeaponFit(weapon))[0])) {
      this.character.position = Math.max(this.character.position - 5, 1);
    }
  }
}