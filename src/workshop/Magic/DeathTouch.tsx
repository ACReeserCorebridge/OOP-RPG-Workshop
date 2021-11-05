import { IWeapon } from "../../off-limits/IWeapons";
import { Magic } from "./BaseMagic";

export class DeathTouch extends Magic implements IWeapon {
    name = "Death Touch";
    damage = 30;
  }