import React from 'react';
import PropTypes from 'prop-types'

function Buttons(props) {
  let sleeping;
  let sleepButtonText = "Sleep";
  function handleClickOnSleep() {
    sleeping = true;
  }

  return(
    <div className="buttons">
      <button onClick={props.onFeedTamagotchi}>Feed</button>
      <button onClick={props.onPlayTamagotchi}>Play</button>
      <button onClick={props.onRestTamagotchi}>sleep</button>
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
            `}</style>
    </div>
  )
}

Buttons.propTypes = {
  onFeedTamagotchi: PropTypes.func,
  onPlayTamagotchi: PropTypes.func,
  onRestTamagotchi: PropTypes.func
}

export default Buttons;
