import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';


function Screen(props) {
  return (
    <div className="main">
      <Tamagotchi tamagotchi={props.tamagotchi} />
      <div>
        <p>Hunger: {props.tamagotchi.hunger}</p>
        <p>Mood: {props.tamagotchi.mood}</p>
        <p>Energy: {props.tamagotchi.energy}</p>
      </div>
      <div className='user'>
        <p>Food: {props.user.food}</p>
        <p>Money: {props.user.money}</p>
      </div>
      <style jsx>{`
          .main {
            width: 60%;
            height: 40%;
            border-radius: 10%;
            border: 1px solid black;
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
            background-color:lightgrey;
            box-shadow: inset 0px 0px 9px black;
          }
          p {
            margin: 2px;
          }
          .user {
            float: right;
          }
      `}</style>
    </div>
  )
}

Screen.propTypes = {
  tamagotchi: PropTypes.object,
  user: PropTypes.object,
}

export default Screen;
