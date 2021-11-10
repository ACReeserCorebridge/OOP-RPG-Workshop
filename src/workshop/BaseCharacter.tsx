import {
  CharacterClassName,
  ICharacter,
  ICharacterActionDecision,
} from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon } from "../off-limits/IWeapons";

//todo: use this base class somehow in Characters.tsx
export class Character implements ICharacter {
  name: string = "";
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;

  classname(): CharacterClassName {
    throw new Error("Method not implemented.");
  }
  move() {
    if (this.weapons.some((x) => isMeleeWeapon(x))) {
      this.position = Math.max(this.position - 5, 1);
    }
  }
  chooseAction(): ICharacterActionDecision {
    return {
      attack: this.weapons[0],
    };
  }
  getASCIIStatus(): string {
    if (this.health === 0) return "❌";

    switch (this.classname()) {
      case "Warrior":
        return "⚔️";
      case "Thief":
        return "🏹";
      case "Mage":
        return "🧙‍♂️";
      case "Cleric":
        return "✨";
    }
  }
}
