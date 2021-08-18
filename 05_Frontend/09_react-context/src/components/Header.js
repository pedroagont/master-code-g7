import { useContext } from 'react';

import { themeContext } from '../contexts/themeContext';

function Header() {
  const { toggle, toggleFunction } = useContext(themeContext);
  return (
    <div className={ `header ${toggle ? 'dark' : 'light' }` }>
      <h2>Soy el header! 🎩</h2>
      <button className={ `boton ${toggle ? 'dark' : 'light' }` } onClick={ toggleFunction }>Cambiar tema: { toggle ? '🌚' : '🌞' }</button>
    </div>
  );
}

export default Header;
