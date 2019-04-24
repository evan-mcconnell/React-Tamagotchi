import React from 'react';
import PropTypes from 'prop-types';


function Store(props) {
  return(
    <div>
      <h2>Your Current Food: {props.user.food} | Your Current Money: ${props.user.money}</h2>
      <button onClick={props.onBuyFood}>Purchase Food</button>
      <style jsx>{`
          div {
            text-align: center;
          }
          button {
            font-size: 1.6em;
          }
        `}</style>
    </div>
  )
}


export default Store;
