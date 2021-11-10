import { CharacterClassName, equip, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isConsumable, isRangedWeapon, isMeleeWeapon, isWeapon } from "../off-limits/IWeapons";

export class Character implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;

    private selectedWeapon?: IWeapon;

    // Have an option to assign specific character
    constructor(
        private readonly characterItem?: IItem,
        private readonly asciiCharacter?: string,
    ) {
        equip(characterItem, this);
    }
    
    classname(): CharacterClassName {
        throw new Error("Method not implemented.");
    }
    move(){
        if (this.weapons.some(x => isMeleeWeapon(x))){
            this.position = Math.max(this.position - 5, 1);
        }
    }

    chooseAction(): ICharacterActionDecision{
        const minHealth = 2;

        if (this.position >=5 ) {
            const rangeItem = this.weapons?.find(item => isRangedWeapon(item));

            if (rangeItem) {
                return { use: rangeItem };
            }
        }

        if (this.health <= minHealth) {
            if (this.item) {
                return { use: this.item };
            }
        }


         // Kludge Assign best weapon to current hero
        if (!this.selectedWeapon) {
            this.selectedWeapon = this.weapons?.reduce(function(prev, current) {
                return isWeapon(current) && ((prev.damage ?? 0) > (current.damage ?? 0)) ? prev : current
            });
        }

        return { attack: this.selectedWeapon }
    }
    getASCIIStatus(): string {
        if (this.health <= 0) {
            return 'X';
        }

        return this.asciiCharacter ? this.asciiCharacter : '@';
    }
}