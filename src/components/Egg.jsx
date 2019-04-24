import React from 'react';
import Screen from './Screen';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

function Egg(props){
  return(
    <div className='egg'>
      <Screen tamagotchi={props.tamagotchi} user={props.user} />
      <Buttons onFeedTamagotchi={props.onFeedTamagotchi}
              onPlayTamagotchi={props.onPlayTamagotchi}
              onRestTamagotchi={props.onRestTamagotchi}/>
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
            background-image:repeating-radial-gradient(red, yellow 10%);
            box-shadow: inset 0px -15px 15px #500000;
          }
        `}
      </style>
    </div>
  )
}

Egg.propTypes = {
  tamagotchi: PropTypes.object,
  user: PropTypes.object,
  onFeedTamagotchi: PropTypes.func,
  onPlayTamagotchi: PropTypes.func,
  onRestTamagotchi: PropTypes.func
}
export default Egg;
