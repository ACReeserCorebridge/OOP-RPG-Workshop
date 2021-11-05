import { equip, ICharacterActionDecision } from '../off-limits/ICharacter';
import { IEnchantedItem } from '../off-limits/IWeapons';
import { BaseCharacter } from './BaseCharacter';
import {
  ClericStartItem,
  MageStartItem,
  ThieAditionalfStartItem as ThiefAditionalStartItem,
  ThiefStartItem,
  WarriorStartItem,
} from './Weapons';

export class Warrior extends BaseCharacter {
  constructor(name: string, key: number) {
    super(name, key, 'Warrior', '⚔️');
    equip(WarriorStartItem, this);
  }
}

export class Cleric extends BaseCharacter{
  constructor(name: string, key: number) {
    super(name, key, 'Cleric', '⚒️');
    equip(ClericStartItem, this);
  }
}

export class Mage extends BaseCharacter {
  constructor(name: string, key: number) {
    super(name, key, 'Mage', '✨');
    equip(MageStartItem, this);
  }

  chooseAction(): ICharacterActionDecision {
    if (this.item && (this.item as IEnchantedItem).partyHealthBonus) // mage prioritizes healing
      return { use: this.item };
    return super.chooseAction();
  }
}

export class Thief extends BaseCharacter {
  constructor(name: string, key: number) {
    super(name, key, 'Thief', '🏹');
    equip(ThiefStartItem, this);
    equip(ThiefAditionalStartItem, this);
  }
}