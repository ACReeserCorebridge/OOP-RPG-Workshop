import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon } from "../off-limits/IWeapons";

export class Character implements ICharacter {
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;

    constructor(public name: string, public key: number) {
    }

    classname(): CharacterClassName {
        throw new Error("Method not implemented.");
    }

    move() {
        if (this.weapons.some(x => isMeleeWeapon(x))){
            this.position = Math.max(this.position - 5, 1);
        }
    }

    chooseAction(): ICharacterActionDecision{
        return {
            attack: this.weapons[0]
        }
    }

    getASCIIStatus(): string {
        return 'X'
    }
}