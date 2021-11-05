import { CharacterClassName, ICharacter, ICharacterActionDecision } from "../../off-limits/ICharacter";
import { IWeapon, IItem, isRangedWeapon, IRangedWeapon, isEnchantedItem, isMeleeWeapon, isConsumable, IEnchantedItem } from "../../off-limits/IWeapons";

export abstract class Character implements ICharacter {
  className: CharacterClassName;
  name: string = '';
  health: number = 5;
  position: number = 10;
  weapons: IWeapon[] = [];
  key: number;
  item?: IItem;

  constructor(className: CharacterClassName, key: number) {
    this.className = className;
    this.key = key;
  }

  classname(): CharacterClassName {
    return this.className;
  }

  move() {
    const bestWeapon = this.getBestUseableWeapon();

    if(bestWeapon.index <= -1) {
      this.position = 10;
    } else {
      const weapon = this.weapons[bestWeapon.index];

      if(isMeleeWeapon(weapon))
        this.position = weapon.meleeRange;
  
      if(isRangedWeapon(weapon))
        this.position = 10;
    }
  }

  chooseAction(): ICharacterActionDecision {
    const bestWeapon = this.getBestUseableWeapon();
    
    //Verify my current HP pool and check if I can heal
    if(this.item) {
      if(isConsumable(this.item)) {
        return {
          use: this.item
        }
      }

      if(isEnchantedItem(this.item)) {
        if(this.health <= 3 && this.item.partyHealthBonus) {
          return {
            use: this.item
          }
        } else if(this.item.fireDamage) {
          //Must check if we have a weapon and if it can do more or less damage than our item
  
          if(bestWeapon.index <= -1) { // there is no weapon
            return {
              use: this.item
            }
          } else {
            if(this.item.fireDamage > bestWeapon.damage) {
              return {
                use: this.item
              }
            } else {
              return {
                attack: this.weapons[bestWeapon.index]
              }
            }
          }
        }
      }
    }

    if(this.health <= 3 && this.canHeal(this.weapons[bestWeapon.index]))
      return {
        use: this.weapons[bestWeapon.index]
      }  

    return {
      attack: this.weapons[bestWeapon.index]
    }
  }

  canHeal(weapon: any): weapon is IEnchantedItem {
    return weapon.partyHealthBonus && weapon.partyHealthBonus > 0;
  }

  getASCIIStatus(): string {
    return this.health <= 0 ? "X" : this.className?.substring(0, 1);
  }

  getBestUseableWeapon(): { damage: number, index: number } {
    let damage = 0;
    let index = -1;

    for (let i = 0; i < this.weapons.length; i++) {
      const weapon = this.weapons[i];
      let cWeaponDamage = 0;
      if(isRangedWeapon(weapon) && weapon.projectiles.length > 0) {
        cWeaponDamage = weapon.damage + weapon.projectiles[0].damage;
      } else {
        cWeaponDamage = weapon.damage;
      }

      if(cWeaponDamage > damage) {
        damage = cWeaponDamage;
        index = i;
      }
    }

    return { damage, index };
  }
}