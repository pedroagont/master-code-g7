import { createContext, useState } from 'react';

const themeContext = createContext();

function ThemeProvider({ children }) {
  const [ toggle, setToggle ] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <themeContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </themeContext.Provider>
  );
}

export { themeContext, ThemeProvider };
