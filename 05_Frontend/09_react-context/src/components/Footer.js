import { useThemeContext } from '../contexts/themeContext';

function Footer() {
  const { toggle } = useThemeContext();

  return (
    <div className={`footer ${toggle ? 'dark' : 'light'}`}>
      <small>Soy el footer! 🥾</small>
    </div>
  );
}

export default Footer;
