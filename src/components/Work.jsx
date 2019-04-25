import React from 'react';
import PropTypes from 'prop-types';
import coin from './../assets/images/coin.png';

function Work(props){
  var workStyle = {
    backgroundSize: "100%",
    backgroundImage: `url(${coin})`
  }

  return(
    <div className="workPage">
      <h1>Work Time, Button Pushers!</h1>
      <button style={workStyle} onClick={props.onDoWork}>Work!</button>
      <style jsx>{`
        .workPage {
          text-align: center;
        }
        button {
          margin: 50px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          font-size: 2em;
          border: 5px solid peru;
        }
        button:active {
          border: 7px solid peru;
          

        }
        `}</style>
    </div>
  );
}

Work.propTypes = {
  onDoWOrk: PropTypes.func
}

export default Work;
