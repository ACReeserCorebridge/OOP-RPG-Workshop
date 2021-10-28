import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem } from "../off-limits/IWeapons";

//todo: use this base class somehow in Characters.tsx
export class Character implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;
    
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
        throw new Error("Method not implemented.");
    }
}