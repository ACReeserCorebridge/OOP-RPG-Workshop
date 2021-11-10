import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon } from "../off-limits/IWeapons";

export class CharacterClass implements ICharacter {
  item?: IItem | undefined;
  constructor(
    public name: string,
    public face: string,
    public health: number,
    public position: number,
    public weapons: IWeapon[],
    // the following line is not a typo. we don't have to implement
    // ICharacter.item, and instead we use a list of class-specific
    // items instead, just like we do with weapons.
    public items: IItem[]
  ) {}
  // ICharacter
  classname = (): CharacterClassName => this.name as CharacterClassName;
  getASCIIStatus = (): string => this.face;
  move(): void {
    throw new Error("Method not implemented.");
  }
  chooseAction(): ICharacterActionDecision {
    throw new Error("Method not implemented.");
  }
  // Other
  public getRandomWeapon(): IWeapon {
    return this.weapons[Math.floor(Math.random() * this.weapons.length)];
  }
  public getRandomItem(): IItem {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}
