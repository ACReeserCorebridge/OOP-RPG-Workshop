import { IWeapon } from "../../off-limits/IWeapons";
import { Magic } from "../Magic/BaseMagic";

export class FlameRock extends Magic implements IWeapon {
    name = "Flame Rock";
    damage = 10;
}