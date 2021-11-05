import { IMeleeWeapon, IEnchantedItem } from "../../off-limits/IWeapons";

export class Guandao implements IMeleeWeapon, IEnchantedItem {
  name = 'Guandao';
  damage = 9;
  meleeRange = 10;
  fireDamage = 3;
}
