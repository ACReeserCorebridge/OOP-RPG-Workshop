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
        <div className="game-container">
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
                        <tr>
                            <td colSpan={3}>
                                <img src="assets/images/warrior.png" alt="" />&nbsp;
                                <img src="assets/images/cleric.png" alt="" />&nbsp;
                                <img src="assets/images/mage.png" alt="" />&nbsp;
                                <img src="assets/images/thief.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <button onClick={() => props.start()}>BEGIN GAME</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};