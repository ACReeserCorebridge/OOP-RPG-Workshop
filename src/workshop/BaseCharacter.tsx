import { CharacterClassName, equip, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon, MaximumMeleeWeaponRange } from "../off-limits/IWeapons";

//todo: use this base class somehow in Characters.tsx
export class Character implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;

    constructor(public characterClassName: CharacterClassName, public ASCIIStatus: string, startItem: IItem|undefined) {
        equip(startItem, this);
    }

    classname(): CharacterClassName {
        return this.characterClassName;
    }

    move() {
        if (this.weapons.some(x => isMeleeWeapon(x))) {
            this.position = Math.max(this.position - 5, 1);
        }
    }

    chooseAction(): ICharacterActionDecision {
        if (this.isMeleeWeaponAttachOutOfRange() || this.amIAlmostDying()) {
            return {
                use: this.item as IItem
            }
        }

        return {
            attack: this.weapons[0]
        }
    }

    getASCIIStatus(): string {
        return this.health > 0 ? this.ASCIIStatus : 'X';
    }

    isMeleeWeaponAttachOutOfRange(): boolean {
        let currentWeapon = this.weapons[0];
        if (isMeleeWeapon(currentWeapon)) {
            let isOutOfRange = this.position > Math.min(currentWeapon.meleeRange, MaximumMeleeWeaponRange);
            if (isOutOfRange) {
                return true;
            }
        }

        return false;
    }

    amIAlmostDying(): boolean {
        return this.health <= 2;
    }
}