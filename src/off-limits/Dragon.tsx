import React from 'react';

export const Dragon: React.FC<{
  hp: number;
}> = (props) => {
  // let hpString = 'HP: [';
  // for (var i = 1; i < 21; i++) {
  //   if (props.hp >= i * 5) hpString += '█';
  //   else hpString += ' ';
  // }
  // hpString += '] (' + props.hp + ')';
  return (
    <div className="dragon">
      <div className="dragon-healthbar">
        <p>Mushu</p>
        <div className="dragon-hp" style={{width: props.hp+'%'}}></div>
      </div>
      <img src="assets/images/dragon.png" alt="" />
    </div>
  );
};
