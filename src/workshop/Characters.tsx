import { BaseCharacter } from "./BaseCharacter";
import { GetRandomName, GetRandomClass } from "./GameConfig";

export class RandomCharacter extends BaseCharacter {
  constructor(public key: number) {
    super(GetRandomName(), key, GetRandomClass());
  }
}

export class Warrior extends RandomCharacter {
  constructor(public name: string, key: number) {
    super(key);
    this.name = GetRandomName();
  }
}

export class Cleric extends RandomCharacter {
  constructor(public name: string, key: number) {
    super(key);
    this.name = GetRandomName();
  }
}

export class Mage extends RandomCharacter {
  constructor(public name: string, key: number) {
    super(key);
    this.name = GetRandomName();
  }
}

export class Thief extends RandomCharacter {
  constructor(public name: string, key: number) {
    super(key);
    this.name = GetRandomName();
  }
}