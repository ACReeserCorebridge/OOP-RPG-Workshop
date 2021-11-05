import { IEnchantedItem, IMeleeWeapon } from "../../off-limits/IWeapons";


export class Trident implements IMeleeWeapon, IEnchantedItem {
  name = 'Trident';
  damage = 9;
  meleeRange = 3;
  fireDamage = 3;
}
