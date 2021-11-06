import React from "react";
import { AppState } from "..";
import { Dragon } from "./Dragon";
import { ICharacter } from "./ICharacter";
import { LogUI } from "./LogUI";

export const CombatUI: React.FC<{
    state: AppState;
}> = (props) => {
    return (
        <div className="game-container">
            <div className="game" style={{backgroundImage: "url(assets/images/background.png)"}}>
                <table className="game-field">
                    <tbody className="field">
                        {props.state.characters.map((char, i) => (
                            <CharacterRow
                                key={i}
                                charPos={char.position}
                                character={char}
                            ></CharacterRow>
                        ))}
                    </tbody>
                </table>
                <Dragon hp={props.state.dragonHP} />
                {props.state.characters.every((x) => x.health < 1) ? (
                    <div className="gameover">GAME OVER</div>
                ) : null}
                {props.state.dragonHP <= 0 ? (
                    <div className="winner">VICTORY!</div>
                ) : null}
            </div>
            <LogUI log={props.state.log}></LogUI>
        </div>
    );
};

export const CharacterRow: React.FC<{
    character: ICharacter;
    charPos: number;
}> = (props) => {
    const cols: Array<{ c?: ICharacter }> = [];
    for (var i = 10; i > 0; i--) {
        if (i === props.charPos) {
            cols.push({ c: props.character });
        } else {
            cols.push({});
        }
    }
    return (
        <tr>
            {cols.map((c, i) => {
                return (
                    <td className="col" key={i}>
                        {c.c ? (
                            <CharacterCombatUI
                                character={props.character}
                            ></CharacterCombatUI>
                        ) : null}
                    </td>
                );
            })}
        </tr>
    );
};

export const CharacterCombatUI: React.FC<{
    character: ICharacter;
}> = (props) => {
    const isDead = props.character.health <= 0;
    const hpClass = props.character.health <= 1 ? 'red' : props.character.health < 5 ? 'yellow': ''
    return (
        <span className={isDead? 'player red': 'player'}>
            <img src={props.character.getASCIIStatus()} alt="" />
            {/* <span className={"block "+hpClass}>[{props.character?.health}]</span> */}
            <div className="player-healthbar">
                <div className="player-hp" style={{width: props.character.health*10+'px', backgroundColor: hpClass}}>

                </div>
            </div>
        </span>
    );
};