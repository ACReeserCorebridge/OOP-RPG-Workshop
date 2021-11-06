import React from "react";

export const LogUI: React.FC<{
    log: string[]
}> = (props) => {
    return <div className="log-ui">
        <span className="current block"><span>☞</span> {props.log[0]}</span>
        <span className="block">{props.log[1]}</span>
        <span className="block">{props.log[2]}</span>
        <span className="block">{props.log[3]}</span>
    </div>
}