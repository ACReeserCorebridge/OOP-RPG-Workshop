import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon } from "../off-limits/IWeapons";

//todo: use this base class somehow in Characters.tsx
export class BaseCharacter implements ICharacter {
    health: number = 5;
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

    chooseAction(): ICharacterActionDecision{
        throw new Error("Method not implemented.");
    }

    getASCIIStatus(): string {
        return this.ASCIIStatus;
    }
}

//todo: something about this class is code smell...
export class Feet {
  constructor(private character: ICharacter) { }
  move() {
    if (this.character.weapons.length && isMeleeWeapon(this.character.weapons[0])) {
      this.character.position = Math.max(this.character.position - 5, 1);
    }
  }
}