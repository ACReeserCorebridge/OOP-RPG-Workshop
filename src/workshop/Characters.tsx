import { BaseCharacter } from "./BaseCharacter";
import { GetRandomName, GetRandomClass } from "./GameConfig";

export class RandomCharacter extends BaseCharacter {
  constructor(public key: number) {
    super(GetRandomName(), key, GetRandomClass());
  }
}
