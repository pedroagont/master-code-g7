import { createContext, useState } from 'react';

const themeContext = createContext();

function ThemeProvider({ children }) {
  const [ toggle, setToggle ] = useState(false);
  const toggleFunction = () => setToggle(!toggle);

  return (
    <themeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </themeContext.Provider>
  );
}

export { themeContext, ThemeProvider };
