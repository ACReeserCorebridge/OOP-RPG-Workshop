import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon } from "../off-limits/IWeapons";

export class Character implements ICharacter {
    name: string = '';
    _className: CharacterClassName;
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;

    constructor(className: CharacterClassName) {
        this._className = className;
    }
    
    classname(): CharacterClassName {
        if (this._className)
            return this._className;
        else 
            throw new Error("Character class name not set");
    }
    move(){
        if (this.weapons.some(x => isMeleeWeapon(x))){
            this.position = Math.max(this.position - 5, 1);
          }
    }
    chooseAction(): ICharacterActionDecision{
        if (this.health <= 3 && this.item)
            return {
                use: this.item
            }
        else 
            return {
                attack: this.weapons[0]
            }
    }
    getASCIIStatus(): string {
        if (this.health <= 0)
            return 'X';
        else 
            return this._className.toString().charAt(0);
    }
}