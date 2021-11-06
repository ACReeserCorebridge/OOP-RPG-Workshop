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
        <div className="game-container">
            <div className="game">
                <table className="grid wide">
                    <tbody>
                        <tr>
                            <td colSpan={3}>Your party finds 4 treasure chests</td>
                        </tr>
                        {props.state.characters.map((x, i) => (
                            <tr key={i}>
                                <td>
                                    <img src={'assets/images/chest_'+x.classname().toLowerCase()+'.png'} alt="" />
                                </td>
                                {
                                    props.state.chests[i].opened ? 
                                    <td className="loot-chest">
                                        <img src={props.state.chests[i].item.image} alt="" />
                                        <p>{props.state.chests[i].item.name}</p>
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