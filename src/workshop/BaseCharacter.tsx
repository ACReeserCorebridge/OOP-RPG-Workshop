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
    class: CharacterClassName = 'Warrior';
    image: string = '';
    deadImage: string = '';

    constructor(public _name: string, public _key: number, _class: CharacterClassName, public _item?: IItem){
        this.name = _name;
        this.class = _class;
        this.image = `assets/images/${this.class.toLowerCase()}.png`
        this.deadImage = `assets/images/${this.class.toLowerCase()}_dead.png`
        equip(_item, this);
    }
    
    classname(): CharacterClassName {
        return this.class;
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
            return this.deadImage;
        }else{
            return this.image;
        }
    }
}