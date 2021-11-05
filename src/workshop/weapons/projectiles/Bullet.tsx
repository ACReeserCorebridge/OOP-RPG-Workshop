import { IWeapon } from "../../../off-limits/IWeapons";

export class Bullet implements IWeapon {
  damage = 3;
  name = "Bullet";
}