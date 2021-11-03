import React, { useEffect } from "react";
import { AppState } from "..";

export const MenuUI: React.FC<{
    state: AppState;
    start: () => void;
}> = (props) => {
    useEffect(() => {
        const tID = setTimeout(() => {
            props.start();
        }, 12000);
        return () => clearTimeout(tID)
    })
    return (
        <div className="game">
            <table className="grid wide">
                <tbody>
                    <tr>
                        <td colSpan={4}>
                            <h1 className="ascii">
                                OOP RPG
                            </h1>
                            vs
                            <h2 className="ascii">
                                BOSS DRAGON
                            </h2>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            Once upon a time, four heroes banded together to defeat BOSS
                            DRAGON. They were:
                        </td>
                    </tr>
                    <tr>
                    {props.state.characters.map((x, i) => (
                        <td key={i}>
                            <br />
                            <img src={x.imgUrl} className="avatarImage"></img>
                            <br /><br />
                            <span className="bolder">{x.name} the {x.classname()}</span>
                            <br /><br />
                        </td>
                    ))}
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <button onClick={() => props.start()}>BEGIN GAME</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};