import React, { useEffect } from "react";
import { AppState } from "..";

export const MenuUI: React.FC<{
    state: AppState;
    start: () => void;
}> = (props) => {
    return (
        <div className="game">
            <table className="grid wide">
                <tbody>
                    <tr>
                        <td colSpan={3}>
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
                        <td colSpan={3}>
                            Once upon a time, four heroes banded together to defeat BOSS
                            DRAGON. They were:
                        </td>
                    </tr>
                    {props.state.characters.map((x, i) => (
                        <tr key={i}>
                            <td>{x.name}</td>
                            <td>the</td>
                            <td>{x.classname()}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={3}>
                            <button onClick={() => props.start()}>BEGIN GAME</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};