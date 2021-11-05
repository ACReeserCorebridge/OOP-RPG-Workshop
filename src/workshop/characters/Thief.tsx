import { equip } from "../../off-limits/ICharacter";
import { ThiefStartItem } from "../systems/Loot";
import { Character } from "./Character";

export default class Thief extends Character {
  constructor(public name: string, public key: number) {
    super('Thief', key);
    equip(ThiefStartItem, this);
  }
}