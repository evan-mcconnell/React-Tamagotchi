import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props) {
  function moodColor(b){
    let mood = props.tamagotchi.mood;
    let r = 255-(mood*2.55);
    let g = mood*2.55;
    return (`rgb(${r},${g},${b})`);
  }


  return(
    <div>
      {props.tamagotchi.alive ?
        <div className='tamagotchi'></div> :
        <div className='dead'><button onClick={props.onRestart}>Restart</button></div>}
      <style jsx>{`
          .tamagotchi{
            max-width:100px;
            max-height:100px;
            min-width:10px;
            min-height:10px;
            width:${props.tamagotchi.hunger}px;
            height:${props.tamagotchi.hunger}px;
            border: double ${(props.tamagotchi.hunger)/6}px ${moodColor(255)};
            border-radius:100%;
            border-bottom-left-radius: ${props.tamagotchi.energy}%;
            border-bottom-right-radius: ${props.tamagotchi.energy}%;
            box-sizing:border-box;
            background-color: ${moodColor(0)};
            position:absolute;
            bottom:25%;
            left: 50%;
            transform: translateX(-50%);
          }
          `}</style>
    </div>
  );
}

Tamagotchi.propTypes = {
  tamagotchi: PropTypes.object,
  onRestart: PropTypes.func
};

export default Tamagotchi;
