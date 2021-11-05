import { equip } from "../../off-limits/ICharacter";
import { MageStartItem } from "../systems/Loot";
import { Character } from "./Character";

export default class Mage extends Character {
  constructor(public name: string, public key: number) {
    super('Mage', key);
    equip(MageStartItem, this);
  }
}