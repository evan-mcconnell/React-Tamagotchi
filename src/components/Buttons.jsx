import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  let sleep;
  let click;

  {props.tamagotchi.sleeping ?
    sleep = 'sleeping':
    sleep = '';}

  function handleSleepClick() {
    if (!props.tamagotchi.sleeping) {
      props.onRestTamagotchi();
    }
  }

  function handlePlayClick() {
    if (!props.tamagotchi.sleeping) {
      props.onPlayTamagotchi();
    }
  }

  function handleFeedClick() {
    if (!props.tamagotchi.sleeping) {
      props.onFeedTamagotchi();
    }
  }


  return(
    <div className="buttons">
      <button className={`${sleep}`} onClick={handleFeedClick}>Feed</button>
      <button className={`${sleep}`} onClick={handlePlayClick}>Play</button>
      <button className={`${sleep}`} onClick={handleSleepClick}>sleep</button>
      <style jsx>{`
          .buttons {
            width: 100%;
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translateX(-50%);
            text-align:center;
          }
          button {
            margin: 10px;
            font-size: 1.4em;
            border:solid 2px darkred;
            border-radius: 5px;
            background-color:red;
            color:white;
            box-shadow: 0px 3px 5px black;
          }
          .sleeping {
            border:solid 2px darkblue;
            background-color:darkslateblue;
            color: midnightblue;
          }
            `}</style>
    </div>
  );
}

Buttons.propTypes = {
  onFeedTamagotchi: PropTypes.func,
  onPlayTamagotchi: PropTypes.func,
  onRestTamagotchi: PropTypes.func
};

export default Buttons;
