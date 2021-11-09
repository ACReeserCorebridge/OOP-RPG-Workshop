import { CharacterClassName, equip, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon } from "../off-limits/IWeapons";

//todo: use this base class somehow in Characters.tsx
export class Character implements ICharacter {
    health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  item?: IItem;
  private _characterName: CharacterClassName;
  classname(): CharacterClassName {
    return this._characterName;
  }
  constructor(public name: string, public key: number, characterClassName: CharacterClassName, startItem: IItem|undefined) {
    this._characterName = characterClassName;
    equip(startItem, this);
  }

  getASCIIStatus(): string {
    return this.health > 0 ? this.classname().substring(0, 1) : "X";
  }

  move(): void {
    this.position = (this.weapons.some(x => isMeleeWeapon(x))) ? Math.max(this.position - 10) : this.position - 2;
  }

  chooseAction(): ICharacterActionDecision {
    return (this.health <= 2 && this.item) ?  { use: this.item } : {attack: this.weapons[this.weapons.length-1]};
  }
}