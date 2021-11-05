import { IRangedWeapon } from "../../off-limits/IWeapons";
import { DeathTouch } from "../Magic/DeathTouch";

export class EyeOfSszzaas implements IRangedWeapon<DeathTouch> {
    name = 'Eye of Sszzaas';
    damage: 0 = 0;
    projectiles = [new DeathTouch(), new DeathTouch()];
  }