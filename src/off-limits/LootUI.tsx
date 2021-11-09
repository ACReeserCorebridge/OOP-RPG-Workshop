import React, { useEffect } from "react";
import { AppState } from "..";
import { ChestText } from "./ChestText";
import { LogUI } from "./LogUI";

export const LootUI: React.FC<{
    state: AppState;
    start: () => void;
    loot: (index: number) => void;
}> = (props) => {
    useEffect(() => {
        const tID = setInterval(() => {
            for (let i = 0; i < props.state.chests.length; i++) {
                const chest = props.state.chests[i];
                if (chest.opened){
                    continue;
                } else {
                    props.loot(i);
                    return;
                }
            }
            props.start();
        }, 3000);
        return () => clearInterval(tID)
    });
    const anyClosed = props.state.chests.some(x => !x.opened);
    return (
        <div>
            <div className="game">
                <table className="grid wide">
                    <tbody>
                        <tr>
                            <td colSpan={3}>Your party finds 4 treasure chests</td>
                        </tr>
                        {props.state.characters.map((x, i) => (
                            <tr key={i}>
                                <td>
                                    {x.name} the {x.classname()} finds
                                </td>
                                {
                                    props.state.chests[i].opened ? 
                                        <td className="loot-chest">
                                            <img
                                                className='size-128px'
                                                src={'/assets/OOP ' + props.state.chests[i].item.name.replace(' ', '') + '.svg'}>
                                            </img>
                                            <span className="display-block">
                                                {props.state.chests[i].item.name}
                                            </span>
                                        </td>
                                    :
                                        <td className="loot-chest">
                                            <ChestText></ChestText>
                                            <button onClick={() => props.loot(i)} className="smaller">
                                                LOOT
                                            </button>
                                        </td>
                                }
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2}>
                                <button role="button" onClick={() => props.start()} disabled={anyClosed}>
                                    ASSAULT BOSS DRAGON
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <LogUI log={props.state.log}></LogUI>
        </div>
    );
};