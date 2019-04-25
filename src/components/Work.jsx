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
      <div>
        <h1>Work Time, Button Pushers!</h1>
        <button className="workButton" style={workStyle} onClick={props.onDoWork}>Work!</button>
      </div>
      <div>
        <button className="upgradeButton" onClick={props.onUpgradeTo6}>6 auto-clicks per minute! $50</button>
        <button className="upgradeButton" onClick={props.onUpgradeTo12}>12 auto-clicks per minute! $80</button>
      </div>
      <style jsx>{`
        .workPage {
          text-align: center;
        }
        .workButton {
          margin: 50px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          font-size: 2em;
          border: 5px solid peru;
        }
        .upgradeButton {
          margin: 50px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          font-size: 1.0em;
          border: 5px solid sienna;
          background-color: peru;
        }
        button:active {
          border: 7px solid peru;
        }
        `}</style>
    </div>
  );
}

Work.propTypes = {
  onDoWork: PropTypes.func
}

export default Work;
