import { useThemeContext } from '../contexts/themeContext';

function Header() {
  const { toggle, handleToggle } = useThemeContext();
  return (
    <div className={`header ${toggle ? 'dark' : 'light'}`}>
      <h2>Soy el header! 🎩</h2>
      <button
        className={`boton ${toggle ? 'dark' : 'light'}`}
        onClick={handleToggle}
      >
        Cambiar tema: {toggle ? '🌚' : '🌞'}
      </button>
    </div>
  );
}

export default Header;
