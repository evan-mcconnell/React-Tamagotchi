import React from 'react';

function UserStats(props){
  return(
    <div>
      <h2>Your Money: ${props.user.money}</h2>
      <h2>Food: {props.user.food}</h2>
      <h1>Score: {props.user.score}</h1>
      <style jsx>{`
          div {
            width: 200px;
            text-align: right;
            margin-right: 10px;
          }
        `}</style>
    </div>
  );
}


export default UserStats;
