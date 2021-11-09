import { CharacterClassName, equip, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon,  isWeapon } from "../off-limits/IWeapons";
//todo: use this base class somehow in Characters.tsx
export class Champion implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;

    constructor(
        private characterClassName: CharacterClassName,
        private ascii: string,
        private startItem: IItem | undefined
    ) {
        this.item = this.startItem;
        equip(this.item, this);
    }

    classname(): CharacterClassName {
        return this.characterClassName;
    }

    move() {
        if (this.weapons.some(x => isMeleeWeapon(x))) {
            this.position = Math.max(this.position - 7, 1);
        }
    }

    chooseAction(): ICharacterActionDecision {
        let action: ICharacterActionDecision;
        if (this.isMinimumHealth && this.item) {
            if (isWeapon(this.item)) {
                action = { attack: this.item };
            }
            action = { use: this.item };
        } else {
            action = { attack: this.weapons[this.weapons.length - 1] };
        }

        return action;
    }

    getASCIIStatus(): string {
        if (this.health > 0) {
            return this.ascii;
        }
        return 'X';
    }

    private get isMinimumHealth() {
        return this.health <= 1;
    }
}