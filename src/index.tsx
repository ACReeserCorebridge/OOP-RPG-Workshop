import React, { Component } from 'react';
import { render } from 'react-dom';
import { Cleric, Mage, RandomCharacter, Thief, Warrior } from './workshop/Characters';
import {  GameTick, CombatPhase } from './off-limits/Game';
import './style.css';
import { CombatUI } from './off-limits/CombatUI';
import { LootUI } from './off-limits/LootUI';
import { MenuUI } from './off-limits/MenuUI';
import { equip, ICharacter } from './off-limits/ICharacter';
import { GetItemsInTreasureChests } from './workshop/GameConfig';
import { IItem } from './off-limits/IWeapons';

interface AppProps {}
export interface AppState {
  characters: ICharacter[];
  chests: Array<{item: IItem, opened: boolean}>,
  dragonHP: number;
  currentCharacter: number;
  currentCombatPhase: CombatPhase;
  lootStep: number,
  log: string[];
  view: 'menu' | 'loot' | 'fight';
}

function getNewGameState(): AppState{
  return {
    characters: [
      new Warrior('Conan', 1),
      new Cleric('Cuthbert', 2),
      new Mage('Merlin', 3),
      new Thief('Bilbo', 4)
    ],
    chests: GetItemsInTreasureChests().map(x => {return {item: x, opened: false}}),
    dragonHP: 100,
    currentCharacter: 0,
    currentCombatPhase: CombatPhase.move,
    lootStep: 0,
    log: ['Game Start','-','-','-'],
    view: 'menu',
  }
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = getNewGameState();
  }

  private intID?: number;
  componentDidMount() {
    this.intID = setInterval(() => {
      const newState = GameTick(this.state);
      if (newState)
        this.setState(newState);
    }, 1000);
  }
  componentWillUnmount() {
    if (this.intID != null) {
      clearInterval(this.intID);
    }
  }

  render() {
    switch (this.state.view) {
      default:
        return <MenuUI state={this.state} start={() => this.setState({view: 'loot'})}></MenuUI>;
      case 'loot':
        return <LootUI state={this.state} start={() => this.setState({
          log: ['Combat Start', this.state.log[0], this.state.log[1], this.state.log[2]],
          view: 'fight'
        })} loot={(i: number) => {
          const newChests = this.state.chests.slice();
          newChests[i].opened = true;
          const chars = this.state.characters.slice();
          const log = equip(newChests[i].item, chars[i]);
          this.setState({
            chests: newChests,
            characters: chars,
            log: [log, this.state.log[0], this.state.log[1], this.state.log[2]]
          });
        }}></LootUI>;
      case 'fight':
        return <CombatUI state={this.state}></CombatUI>;
    }
  }
}



render(<App />, document.getElementById('root'));
