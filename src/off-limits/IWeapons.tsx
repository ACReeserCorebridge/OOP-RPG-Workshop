export const MaximumWeaponDamage = 9;
export const MaximumProjectileWeaponDamage = 3;
export const MaximumFireDamage = 3;
export const MaximumMeleeWeaponRange = 2;
export const MaximumConsumableHealthBonus = 4;
export interface IItem {
  name: string;
}
export interface IWeapon extends IItem {
  damage: number;
}
export interface IMeleeWeapon extends IWeapon {
  meleeRange: number;
}
export interface IRangedWeapon<T extends IWeapon> {
  damage: number;
  projectiles: T[];
}
export interface IEnchantedItem extends IItem {
  fireDamage?: number;
  partyHealthBonus?: number;
}
export interface IConsumableItem extends IItem {
  healthBonus: number;
}


export function isWeapon(obj: any): obj is IWeapon {
    return obj?.damage !== undefined;
}

export function isMeleeWeapon(obj: any): obj is IMeleeWeapon {
    return obj?.meleeRange !== undefined;
}

export function isRangedWeapon(obj: any): obj is IRangedWeapon<IWeapon> {
    return Array.isArray(obj.projectiles);
}

export function isConsumable(obj: any): obj is IConsumableItem {
    return obj.healthBonus !== undefined;
}

export function isEnchantedItem(obj: any): obj is IEnchantedItem {
    return obj.fireDamage > 0 || obj.partyHealthBonus > 0;
}
