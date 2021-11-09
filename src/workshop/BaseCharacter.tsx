import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem } from "../off-limits/IWeapons";

export class Character implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;

    // Have an option to assign
    constructor(private readonly asciiCharacter: string) { }
    
    classname(): CharacterClassName {
        throw new Error("Method not implemented.");
    }
    move(){
        throw new Error("Method not implemented.");
    }
    chooseAction(): ICharacterActionDecision{
        throw new Error("Method not implemented.");
    }
    getASCIIStatus(): string {
        if (this.health <= 0) {
            return 'X';
        }

        return this.asciiCharacter ? this.asciiCharacter : '@';
    }
}