import React from 'react';
import useBrazilMode from './useBrazilMode';

const Navbar = () => {
  const [brazilMode, setBrazilMode] = useBrazilMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setBrazilMode(!brazilMode);
  };
  return (
    <nav className="navbar">
      <h1>Womens World Cup Players</h1>
      <div className="brazil-mode__toggle">
        <button
          onClick={toggleMode}
          className={brazilMode ? 'toggle toggled' : 'toggle'}
        />Brazil or USA theme
      </div>
    </nav>
  );
};

export default Navbar;