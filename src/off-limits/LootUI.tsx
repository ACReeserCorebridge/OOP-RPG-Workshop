import React, { useEffect } from "react";
import { AppState } from "..";
import { ChestText } from "./ChestText";
import { LogUI } from "./LogUI";

export const LootUI: React.FC<{
    state: AppState;
    start: () => void;
    loot: (index: number) => void;
}> = (props) => {
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
                                    props.state.chests[i].opened ? <td className="loot-chest">
                                        {props.state.chests[i].item.name}
                                    </td> : <td className="loot-chest">
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