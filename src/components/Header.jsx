import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Tamagotchi</h1>
      <Link to="/">Your Pet</Link> | <Link to="/store">Store</Link> | <Link to="/work">Work</Link>
    </div>
  );
}

export default Header;
