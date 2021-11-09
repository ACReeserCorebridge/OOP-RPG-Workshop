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
    <div className="dragon ascii hack-center">
      <img id="flame1" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame2" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame3" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame4" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame5" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame6" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame7" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame8" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame9" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame10" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame11" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame12" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame13" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame14" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame15" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <img id="flame16" src="https://img.icons8.com/color/48/000000/fire-element--v2.png"/>
      <div className="text-center">BOSS DRAGON</div>
      <div className="hp text-center">{hpString}</div>
      <div className=""> </div>
      {' _/=======() \n' +
        '(/___   /|\\          ()==========__\n' +
        '      _/ | \\        //|   ______/ )\n' +
        '        _|  \\      // | _/\n' +
        '          |/|_/   //  //\n' +
        '           (oo) _//  /\n' +
        '          //_/_/ /  |\n' +
        '         @@/  |=    |\n' +
        '              |_=_  |\n' +
        '               \\ == |_ snd\n' +
        '             __(===(  ) \\\n' +
        '           (((~) __(_/   |\n' +
        '                 (((~)  /\n' +
        '                ______//\n' +
        'Art by Shanaka Dias'}
    </div>
  );
};

export const DeadDragon: React.FC<{
  hp: number;
}> = (props) => {
  let hpString = 'HP: [';
  for (var i = 1; i < 21; i++) {
    if (props.hp >= i * 5) hpString += '█';
    else hpString += ' ';
  }
  hpString += '] (' + props.hp + ')';
  return (
    <div className="dragon ascii hack-center">
      <div className="text-center">BOSS DRAGON</div>
      <div className="hp text-center">{hpString}</div>
      <div className="spacer"> </div>
      <div id="pile1">{
         '_/=======() \n' +
         '(/___   /|\\          ()==========__\n' +
         '      _/ | \\        //|   ______/ )\n' +
         '        _|  \\      // | _/\n'
      }</div>
      <div id="pile2">{
      '_|  \\      // | _/\n' +
      ' |/|_/   //  //\n' +
      ' (oo) _//  /\n' +
      ' //_/_/ /  |\n' +
      '@@/  |=    |'
      }</div>
      <div id="pile3">{
        '@@/  |=    |\n' +
        '    _=_  |\n' +
        '           == |_ snd\n' +
        '       __(===(  )'
      }</div>
      <div id="pile4">{ 
        '🪦   \n'+
        '   \n'+
        '   \n'+
        '      (((~) __(_/   |\n' +
        '              (((~)   /\n' +
        '                 ______/ /\n'
      }</div>
    </div>
  );
};
