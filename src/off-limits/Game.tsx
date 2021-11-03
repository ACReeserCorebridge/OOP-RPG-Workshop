import React from 'react';
import { AppState } from '..';
import { ICharacter, isAttack, isUse } from './ICharacter';
import { isConsumable, isEnchantedItem, isMeleeWeapon, isRangedWeapon, IWeapon, MaximumConsumableHealthBonus, MaximumFireDamage, MaximumMeleeWeaponRange, MaximumProjectileWeaponDamage, MaximumWeaponDamage } from './IWeapons';


export enum CombatPhase {
  move,
  attack,
  dragon,
}


export function GameTick(state: AppState): Pick<AppState, keyof AppState> | undefined {
  switch (state.view) {
    case 'menu':
      return undefined;
    case 'loot':
      return undefined;
  }
  const activeChar = state.characters[state.currentCharacter];
  switch (state.currentCombatPhase) {
    case CombatPhase.move: {
      let verb = 'lies dead';
      if (activeChar.health > 0) {
        const oldPos = activeChar.position;
        activeChar.move(); //move
        let movement = oldPos - activeChar.position;
        // validate character didn't move too far
        if (movement > 5 && activeChar.classname() !== 'Warrior'){
          movement = oldPos - 5;
          activeChar.position = movement;
        }
        // validate minimum character position
        activeChar.position = Math.max(activeChar.position, 1);

        if (movement > 0){
          verb = 'moves';
        } else {
          verb = 'stays put';
        }
      }
      const newLog = activeChar.name + ' ' + verb;
      console.log(newLog);
      return {
        characters: state.characters,
        currentCombatPhase: CombatPhase.attack,
        log: [newLog, state.log[0], state.log[1], state.log[2]],
        dragonHP: state.dragonHP,
        currentCharacter: state.currentCharacter,
        view: state.view,
        chests: state.chests,
        lootStep: state.lootStep
      };
    }
    case CombatPhase.attack: {
      let newLog = `${activeChar.name} bleeds`;
      let dragonDamage: number | undefined = undefined;
      if (activeChar.health > 0) {
        const act = getCharacterAction(activeChar);
        if (act.dragonDamage)
          dragonDamage = act.dragonDamage;
        const partyHeal = act.partyHealthBonus;
        if (partyHeal != null){
          state.characters.forEach(x => x.health += partyHeal);
        }
        newLog = act.log;
      }
      console.log(newLog);
      return {
        log: [newLog,state.log[0], state.log[1], state.log[2]],
        currentCombatPhase: CombatPhase.dragon,
        dragonHP: state.dragonHP - (dragonDamage ?? 0),
        currentCharacter: state.currentCharacter,
        view: state.view,
        characters: state.characters,
        chests: state.chests,
        lootStep: state.lootStep
      };
    }
    case CombatPhase.dragon: {
      const nextCharI =
        state.currentCharacter + 1 === state.characters.length
          ? 0
          : state.currentCharacter + 1;
      if (state.dragonHP <= 0){
        const winners = state.characters.filter(x => x.health > 0).map(y => y.name);
        const winnerNoun = winners.length < 1 ? 'Nobody' : winners.join(',');
        const newLog = `${winnerNoun} rejoice${winners.length <= 1 ? 's' : ''}!`;
        console.log(newLog);
        return {
          log: [newLog, state.log[0], state.log[1], state.log[2]],
          currentCombatPhase: CombatPhase.dragon,
          currentCharacter: nextCharI,
          view: state.view,
          characters: state.characters,
          dragonHP: state.dragonHP,
          chests: state.chests,
          lootStep: state.lootStep
        }
      } else {
        let verb = 'gloats over ' + activeChar.name;
        if (activeChar.health > 0) {
          activeChar.health = Math.max(0, activeChar.health - 2);
          verb =
            activeChar.health > 0
              ? 'attacks ' + activeChar.name + ' for 2 dmg'
              : 'kills ' + activeChar.name;
        }
        const newLog = 'Dragon ' + verb;
        console.log(newLog);
        return {
          log: [newLog, state.log[0], state.log[1], state.log[2]],
          currentCombatPhase: CombatPhase.move,
          currentCharacter: nextCharI,
          view: state.view,
          characters: state.characters,
          dragonHP: state.dragonHP,
          chests: state.chests,
          lootStep: state.lootStep
        };
      }
    }
  }
}

function getCharacterAction(c: ICharacter): {dragonDamage?: number, partyHealthBonus?: number, log: string} {
  const act = c.chooseAction();
  if (isAttack(act)){
    const maybeEnchanted = act.attack as any;
    const fireDmg = isEnchantedItem(maybeEnchanted) ? Math.min(MaximumFireDamage, maybeEnchanted.fireDamage || 0) : 0;
    const dmg = Math.min(act.attack.damage, MaximumWeaponDamage);
    if (isMeleeWeapon(act.attack)){
      if (c.position <= Math.min(act.attack.meleeRange, MaximumMeleeWeaponRange)){
        return {
          dragonDamage: dmg + fireDmg,
          log: `${c.name} attacks with ${act.attack.name} for ${dmg + fireDmg} dmg`
        }
      } else {
        return {
          dragonDamage: 0,
          log: `${c.name} is out of range`
        }
      }
    } else if (isRangedWeapon(act.attack)){
      const bolt = act.attack.projectiles.pop();
      if (bolt){
        const boltDmg = Math.min(bolt.damage, MaximumProjectileWeaponDamage);
        return {
          dragonDamage: dmg + fireDmg + boltDmg,
          log: `${c.name} fires ${bolt.name} from ${act.attack.name} for ${dmg + fireDmg + boltDmg} dmg`
        }
      } else {
        return {
          dragonDamage: 0,
          log: `${c.name} is out of projectiles`
        }
      }
    }
  }
  if (isUse(act)){
    if (isConsumable(act.use)){
      const newHealth = Math.min(act.use.healthBonus, MaximumConsumableHealthBonus);
      c.item = undefined;
      c.health += newHealth;
      return {
        log: `${c.name} consumes a ${act.use.name} for ${newHealth}`
      }
    }
    if (isEnchantedItem(act.use)){
      const fire = Math.min(MaximumFireDamage, act.use.fireDamage || 0);
      const heal = Math.min(4, act.use.partyHealthBonus || 0);
      return {
        dragonDamage: fire,
        partyHealthBonus: heal,
        log: `${c.name} ${fire ? 'shoots fire for '+fire+' dmg' : ''}${fire && heal ? ' and ': ' '}${heal ? 'heals the party for '+heal+' hp': ''}`
      }
    }
  }
  return {
    log: `${c.name} does nothing`
  }
}