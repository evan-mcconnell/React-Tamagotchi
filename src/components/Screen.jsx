import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';


function Screen(props) {
  return (
    <div className="main">
      <Tamagotchi tamagotchi={props.tamagotchi}
        onRestart={props.onRestart}/>
      <div>
        <p>Tamagotchi!</p>
      </div>
      <style jsx>{`
          .main {
            width: 60%;
            height: 40%;
            border-radius: 5%;
            border: 1px solid black;
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
            background-color:lightgrey;
            box-shadow: inset 0px 0px 9px black;
            padding:15px;
            box-sizing:border-box;
          }
          p {
            margin: 2px;
          }
          .user {
            float: right;
          }
      `}</style>
    </div>
  );
}

Screen.propTypes = {
  tamagotchi: PropTypes.object,
  user: PropTypes.object,
};

export default Screen;
