import React from 'react';

function TamaStats(props){
  function progressColor(prop){
    let stat = prop;
    let r = 255-(stat*2.55);
    let g = stat*2.55;
    return (`rgb(${r},${g},0)`);
  }

  return(
    <div>
      <h3>Hunger : </h3>
      <div className="progressBar">
        <div className="progressHunger"></div>
        <p>{Math.floor(props.tamagotchi.hunger)}</p>
      </div>
      <h3>Mood : </h3>
      <div className="progressBar">
        <div className="progressMood"></div>
        <p>{Math.floor(props.tamagotchi.mood)}</p>
      </div>
      <h3>Energy : </h3>
      <div className="progressBar">
        <div className="progressEnergy"></div>
        <p>{Math.floor(props.tamagotchi.energy)}</p>
      </div>
      <style jsx>{`
        .progressBar {
          border: 1px solid black;
          width: 200px;
          height: 20px;
          position: relative;
        }
        .progressHunger {
          height: 100%;
          background-color: ${progressColor(props.tamagotchi.hunger)};
          width: ${(props.tamagotchi.hunger*2)}px;
        }
        .progressMood {
          height: 100%;
          background-color: ${progressColor(props.tamagotchi.mood)};
          width: ${(props.tamagotchi.mood*2)}px;
        }
        .progressEnergy {
          height: 100%;
          background-color: ${progressColor(props.tamagotchi.energy)};
          width: ${(props.tamagotchi.energy*2)}px;
        }
        h3 {
          margin: 0;
        }
        p {
          position: absolute;
          right: 10px;
          top: -15px;
          color: white;
        }
        `}</style>
    </div>
  );
}


export default TamaStats;
