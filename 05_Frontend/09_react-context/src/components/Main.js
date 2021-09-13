import { useThemeContext } from '../contexts/themeContext';

function Main() {
  const { toggle } = useThemeContext();

  return (
    <div className={`main ${toggle ? 'dark' : 'light'}`}>
      <h1>Soy el main! 🧥</h1>
      <p>
        Esta app es increíble porque me va a permitir aprender a usar Context en
        ReactJS!
      </p>
    </div>
  );
}

export default Main;
