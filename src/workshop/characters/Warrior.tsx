import { equip } from "../../off-limits/ICharacter";
import { WarriorStartItem } from "../systems/Loot";
import { Character } from "./Character";

export default class Warrior extends Character {
  constructor(public name: string, public key: number) {
    super('Warrior', key);
    equip(WarriorStartItem, this);
  }
}