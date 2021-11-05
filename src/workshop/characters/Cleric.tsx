import { equip } from "../../off-limits/ICharacter";
import { ClericStartItem } from "../systems/Loot";
import { Character } from "./Character";

export default class Cleric extends Character {
  constructor(public name: string, public key: number) {
    super('Cleric', key);
    equip(ClericStartItem, this);
  }
}