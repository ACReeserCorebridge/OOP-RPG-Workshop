import React from "react";

export const ChestText: React.FC<{isOpen: boolean}> = (props) => {
    return (
      <div>
        <img src={props.isOpen ? '/images/chest-open.png' : '/images/chest-closed.png'} width="10%"></img>
      </div>
    );
  };