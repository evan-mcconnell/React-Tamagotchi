import React from 'react';
import { Link } from 'react-router-dom';
import TamaStats from './TamaStats';
import UserStats from './UserStats';
import PropTypes from 'prop-types';

function Header(props){
  var linkStyle = {
    textDecoration:'none',
  };
  return (
    <div className='header'>
      <style jsx>{`
        p{
          color:white;
          display:inline;
        }
        .header{
          padding: 5px;
          display:flex;
          flex-direction:row;
          justify-content: space-between;
          height:150px;
          border:solid 1px red;
          margin-bottom: 25px;
          animation: headerColor 10s linear infinite alternate
        }
        .links{

        }
        h1{
          color:
        }
        @keyframes headerColor{
          0% {background-color:Crimson;}
          25% {background-color:MediumVioletRed}
          50% {background-color:DodgerBlue}
          100% {background-color:MediumSpringGreen;}
        }
        `}</style>
      <TamaStats tamagotchi={props.state.tamagotchi}/>
      <div className='links'>
        <Link style={linkStyle} to='/'><h1>Tamagotchi</h1></Link>
        <Link style={linkStyle} to="/"><p>Your Pet</p></Link>
        <p> | </p>
        <Link style={linkStyle} to="/store"><p>Store</p></Link>
        <p> | </p>
        <Link style={linkStyle} to="/work"><p>Work</p></Link>
      </div>
      <UserStats user={props.state.user} />
    </div>
  );
}

export default Header;
