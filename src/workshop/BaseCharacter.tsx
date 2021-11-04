import { CharacterClassName,  equip, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem } from "../off-limits/IWeapons";
import { Feet } from "./Characters";
import { AwesomeAmulet } from "./Weapons";

export class Character implements ICharacter {
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;
    name: string;
    characterClass: CharacterClassName = "Cleric";
    feet = new Feet(this);
    constructor(public nameInit: string, public key: number, equipItem: IItem|undefined) {
        this.name = nameInit;
        equip(equipItem, this);
    }
    classname(): CharacterClassName {
        return this.characterClass;
    }
    move(){
        this.feet.move();
    }
    chooseAction(): ICharacterActionDecision{
        if (this.health<5) return {
            use: this.item || new AwesomeAmulet()
        } 
        return {
            attack: this.weapons[0]
          }
    }
    getASCIIStatus(): string {
        if (this.health>0) return this.characterClass.charAt(0);
        return "X"; 
    }
}