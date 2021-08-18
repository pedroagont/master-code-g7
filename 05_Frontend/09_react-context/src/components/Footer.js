import { useContext } from 'react';

import { themeContext } from '../contexts/themeContext';

function Footer() {
  const { toggle } = useContext(themeContext);

  return (
    <div className={ `footer ${toggle ? 'dark' : 'light' }` }>
      <small>Soy el footer! 🥾</small>
    </div>
  );
}

export default Footer;
