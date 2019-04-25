import React from 'react';
import Screen from './Screen';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

function Egg(props){
  return(
    <div className='egg'>
      <Screen tamagotchi={props.tamagotchi} user={props.user} onRestart={props.onRestart}/>
      <Buttons onFeedTamagotchi={props.onFeedTamagotchi}
        onPlayTamagotchi={props.onPlayTamagotchi}
        onRestTamagotchi={props.onRestTamagotchi}
        tamagotchi={props.tamagotchi}
      />
      <style jsx>{`
          .egg{
            width:375px;
            height:450px;
            border: solid 1px black;
            border-bottom-right-radius:200px;
            border-bottom-left-radius:200px;
            border-top-left-radius:55%;
            border-top-right-radius:55%;
            position: relative;
            left:50%;
            transform:translateX(-50%);
            background-image:radial-gradient(red, darkred);
            box-shadow: inset 0px 0px 10px rgba(255,255,255,.75), 0px 0px 20px rgba(0,0,0,.9);
          }
        `}
      </style>
    </div>
  );
}

Egg.propTypes = {
  tamagotchi: PropTypes.object,
  user: PropTypes.object,
  onFeedTamagotchi: PropTypes.func,
  onPlayTamagotchi: PropTypes.func,
  onRestTamagotchi: PropTypes.func,
  onRestart: PropTypes.func
};
export default Egg;
