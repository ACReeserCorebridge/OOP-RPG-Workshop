import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon, IMeleeWeapon, IRangedWeapon, isRangedWeapon } from "../off-limits/IWeapons";

export class Character implements ICharacter {

    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;
    avatar = '';

    classname(): CharacterClassName {
        throw new Error("Method not implemented.");
    }
    move() {
        if (this.weapons.some(x => isMeleeWeapon(x))) {
            const weapon = this.weapons.find(x => isMeleeWeapon(x)) as IMeleeWeapon;
            this.position = Math.max(this.position - 5, weapon.meleeRange);
        }
        else if (this.weapons.some(x => !isMeleeWeapon(x))) {
            this.position = Math.min(this.position + 2, 10);
        }
    }
    chooseAction(): ICharacterActionDecision {
        console.log(this.weapons);
        if (this.item && this.health <= 2) {
            return { use: this.item }
        }

        const meleeWeapon = this.weapons.filter(x => isMeleeWeapon(x))?.reduce((previousWeapon, currentWeapon) => {
            if (previousWeapon) {
                return previousWeapon.damage > currentWeapon.damage ? previousWeapon : currentWeapon;
            }
        }, this.weapons.find(x => isMeleeWeapon(x))) as IMeleeWeapon;
        if (meleeWeapon && this.position <= meleeWeapon.meleeRange) {
            return { attack: meleeWeapon }
        }
        else {
            const rangedWeapon = this.weapons.filter(x => isRangedWeapon(x))?.reduce((previousWeapon, currentWeapon) => {
                if (previousWeapon) {
                    const previousRanged = previousWeapon as unknown as IRangedWeapon<IWeapon>;
                    const currentRanged = currentWeapon as unknown as IRangedWeapon<IWeapon>;

                    const aProjectile = previousRanged.projectiles.length > 0 ? previousRanged.projectiles[0] : null;
                    const bProjectile = currentRanged.projectiles.length > 0 ? currentRanged.projectiles[0] : null;

                    if (aProjectile && bProjectile) {
                        return aProjectile.damage > bProjectile.damage ? previousWeapon : currentWeapon;
                    }
                    else if (aProjectile && !bProjectile) {
                        return previousWeapon;
                    }
                    else if (!aProjectile && bProjectile) {
                        return currentWeapon;
                    }
                    return previousWeapon.damage > currentWeapon.damage ? previousWeapon : currentWeapon;
                }
            }, this.weapons.find(x => isRangedWeapon(x))) as IWeapon;
            if (rangedWeapon) {
                return { attack: rangedWeapon }
            }
        }

        return { attack: this.weapons[0] };
    }
    getASCIIStatus(): string {
        if (this.health <= 0) {
            return 'X';
        } else return `${this.avatar}`;
    }
}