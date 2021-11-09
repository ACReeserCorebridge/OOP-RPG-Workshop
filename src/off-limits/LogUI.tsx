import React from "react";

export const LogUI: React.FC<{
    log: string[]
}> = (props) => {
    return <div className="flex">
        <div className="box-outer"> </div>
        <div className="pad-top box-center">
            <span className="block">☞ {props.log[0]}</span>
            <span className="block">{props.log[1]}</span>
            <span className="block">{props.log[2]}</span>
            <span className="block">{props.log[3]}</span>
        </div>
        <div className="box-outer"> </div>
    </div>
}