import React from 'react';

export const Dragon: React.FC<{
  hp: number;
}> = (props) => {
  let hpString = 'HP: [';
  for (var i = 1; i < 21; i++) {
    if (props.hp >= i * 5) hpString += '█';
    else hpString += ' ';
  }
  hpString += '] (' + props.hp + ')';
  return (
    <div className="dragon ascii">
      <div>BOSS DRAGON</div>
      <div className="hp">{hpString}</div>
      <div><img src="/images/skeleton-dragon.gif"></img></div>
    </div>
  );
};
