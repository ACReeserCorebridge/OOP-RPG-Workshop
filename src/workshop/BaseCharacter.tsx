import { CharacterClassName, equip, ICharacter, ICharacterActionDecision } from "../off-limits/ICharacter";
import { IWeapon, IItem, isMeleeWeapon, isRangedWeapon } from "../off-limits/IWeapons";


//todo: use this base class somehow in Characters.tsx
export abstract class Character implements ICharacter {
    name: string = '';
    health: number = 5;
    position: number = 10;
    weapons: IWeapon[] = [];
    item?: IItem;    
    
    constructor(protected avatar:string,     
                protected characterClass: CharacterClassName, 
                protected equipment: IItem|undefined, 
                public key: number) { equip(equipment, this); }    

    classname: () => CharacterClassName = () => this.characterClass;
    move: () => void = () => this.position = Math.max(this.position - 5, 1);
    chooseAction: () => ICharacterActionDecision = () => {        
        let canAttack:boolean = false;  
        let weapon = this.weapons[0];
        if(this.health < 2 && this.item) return { use: this.item };                    
        if(weapon) {    
          if(isMeleeWeapon(weapon) && this.position <= weapon.meleeRange)
            canAttack = true;                            
          if(isRangedWeapon(weapon) && weapon.projectiles.length > 0)
            canAttack = true;                            
          return canAttack ? { attack: weapon } : { use: this.item } as ICharacterActionDecision;
        } else {
          return { use: this.item } as ICharacterActionDecision;
        } 
    };
    getASCIIStatus:() => string = () => this.health <= 0 ? "X" : this.avatar;
}