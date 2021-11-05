import { useState } from "react";
import { IItem, isEnchantedItem, isMeleeWeapon, isRangedWeapon, isWeapon, IWeapon } from "./IWeapons";

export type CharacterClassName = 'Warrior' | 'Cleric' | 'Mage' | 'Thief';
export type ICharacterActionDecision = {
    attack: IWeapon;
} | {
    use: IItem;
};

export interface ICharacter {
    getASCIIStatus(): string;
    name: string;
    health: number;
    position: number;
    weapons: IWeapon[];
    item?: IItem;
    avatar: string;
    classname(): CharacterClassName;
    move(): void;
    chooseAction(): ICharacterActionDecision;
}

export function equip(item: IItem|undefined, char: ICharacter): string {
    if (item == null) 
        return '';
    if (isWeapon(item)) {
        if (isRangedWeapon(item) && char.classname() === 'Cleric') {
            throw `${char.name} doesn't know how to use the ${item.name}`;
        } else if (isMeleeWeapon(item) && char.classname() === 'Mage') {
            throw `${char.name} doesn't know how to use the ${item.name}`;
        } else {
            char.weapons.push(item);
            return `${char.name} holds the ${item.name}`;
        }
    } else {
        if (isEnchantedItem(item) && (char.classname() === 'Warrior' || char.classname() === 'Thief')) {
            throw `${char.name} doesn't know how to use the ${item.name}`;
        }
        char.item = item;
        return `${char.name} pockets the ${item.name}`;
    }
}
export function isAttack(obj: any): obj is { attack: IWeapon } {
    return isWeapon(obj.attack);
}
export function isUse(obj: any): obj is { use: IItem } {
    return obj.use !== undefined && obj.use.name !== undefined;
}