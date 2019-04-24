import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props) {

  function moodColor(b){
    let mood = props.tamagotchi.mood;
    let r = 255-(mood*2.55);
    let g = mood*2.55;
    return (`rgb(${r},${g},${b})`)
  }


  return(
    <div className='tamagotchi'>
      <style jsx>{`
      .tamagotchi{
        width:${props.tamagotchi.hunger}px;
        height:${props.tamagotchi.hunger}px;
        border: double ${(props.tamagotchi.hunger)/6}px ${moodColor(255)};
        border-radius:100%;
        box-sizing:border-box;
        background-color: ${moodColor(0)};
        position:absolute;
        bottom:25%;
        left: 50%;
        transform: translateX(-50%);
      }
    `}</style>
    </div>
  )
}

export default Tamagotchi;
