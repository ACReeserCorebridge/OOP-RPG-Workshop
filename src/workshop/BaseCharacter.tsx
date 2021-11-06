import { CharacterClassName, equip, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon, isConsumable, isRangedWeapon, IRangedWeapon, isEnchantedItem } from "../off-limits/IWeapons";
import { Tango } from "./Weapons";

export const LOW_HEALTH_AMOUNT = 2;

//todo: use this base class somehow in Characters.tsx
export class Character implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;

    constructor(private charterClass: CharacterClassName, private starterItem: IItem | undefined, private ascii: string) {
        this.item = starterItem;
        equip(this.item, this);
    }

    classname(): CharacterClassName {
        return this.charterClass;
    }

    move() {
        if (this.weapons.some(x => isMeleeWeapon(x))) {
            this.position = Math.max(this.position - 10, 1);
        }
    }

    chooseAction(): ICharacterActionDecision {
        if (this.health <= LOW_HEALTH_AMOUNT && this.item != null) {
            return { use: this.item };
        }

        if (this.item != null && isRangedWeapon(this.item) && this.item.projectiles != null && this.item.projectiles.length > 0) {
            return { use: this.item.projectiles.shift() as IItem };
        }

        const randomWeapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        if (randomWeapon != null) {
            return this.executeItem(randomWeapon) as any;
        }

        return { attack: randomWeapon }
    }

    executeItem(item: IWeapon) {
        if (isRangedWeapon(item)) {
            if (item.projectiles != null && item.projectiles.length > 0) {
                return { use: (item.projectiles.shift() as IItem) };
            }
        }
        if (isEnchantedItem(item)) {
            return { use: item }
        }
        if (isMeleeWeapon(item)) {
            return { attack: item };
        }

        return { attack: item };
    }

    getASCIIStatus(): string {
        return this.health > 0 ? (this.ascii == null || this.ascii === '' ? 'C' : this.ascii) : 'X';
    }
}