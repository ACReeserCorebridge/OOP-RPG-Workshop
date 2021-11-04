import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon, isWeapon, isEnchantedItem, isConsumable, IConsumableItem, IMeleeWeapon } from "../off-limits/IWeapons";

export class Character implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;
    imgUrl: string = '';

    classname(): CharacterClassName {
        throw new Error("Method not implemented.");
    }
    move(): void {
        if (this.weapons.some(x => isMeleeWeapon(x))) {
            if (this.weapons.some(x => !isMeleeWeapon(x))) {
                if (this.weapons.some(x => (x as IMeleeWeapon).meleeRange > 1) && this.position > 2) {
                    this.position = this.position - 2;
                }
                else if (!this.weapons.some(x => (x as IMeleeWeapon).meleeRange > 1) && this.position > 1) {
                    this.position = this.position - 2
                }
            }
            else {
                this.position = Math.max(this.position - 5, 1);
            }
        }
    }
    chooseAction(): ICharacterActionDecision {
        if (this.item && this.health <= 3) {
            return { use: this.item };
        }

        if (this.position > 2 && this.weapons.some(x => !isMeleeWeapon(x))) {
            const ranged = this.weapons.find(x => !isMeleeWeapon(x));
            if (ranged) {
                return { attack: ranged }
            }
        }

        return { attack: this.weapons[0] };
    }
    getASCIIStatus(): string {
        if (this.health == 0)
            return "X";
        return `${this.imgUrl}`;
    }
}