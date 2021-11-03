import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon } from "../off-limits/IWeapons";

//todo: use this base class somehow in Characters.tsx
export class BaseCharacter implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;
    feet = new Feet(this);

    classname(): CharacterClassName {
        throw new Error("Method not implemented.");
    }
    move(){
        this.feet.move();
    }
    chooseAction(): ICharacterActionDecision{
        throw new Error("Method not implemented.");
    }
    getASCIIStatus(): string {
        throw new Error("Method not implemented.");
    }
}

//todo: something about this class is code smell...
export class Feet {
  constructor(private character: ICharacter) { }
  move() {
    if (this.character.weapons.some(x => isMeleeWeapon(x))) {
      this.character.position = Math.max(this.character.position - 5, 1);
    }
  }
}