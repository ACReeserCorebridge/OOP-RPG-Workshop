import { CharacterClassName, equip, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon } from "../off-limits/IWeapons";
import { ClericStartItem, MageStartItem, ThiefStartItem, WarriorStartItem } from "./Weapons";

//todo: use this base class somehow in Characters.tsx
export class Character implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;
    
    classname(): CharacterClassName {
        switch(this.weapons[0]){
            case ThiefStartItem:
                return 'Thief';
            case ClericStartItem:
                return 'Cleric';
            case MageStartItem:
                return 'Mage';
            default:
                return 'Warrior'
        }
    }
    move(){
        if (this.weapons.some(x => isMeleeWeapon(x))){
            this.position = Math.max(this.position - 5, 1);
        }
    }
    chooseAction(): ICharacterActionDecision{
        if(this.item && this.health <= 2) {
            return {
              use: this.item
            }
        }
        return {
            attack: this.weapons[0]
        }
    }
    getASCIIStatus(): string {
        if(this.health <= 0){
            return `X`;
        }else{
            return `${this.name} (${this.classname()})`;
        }
    }
}