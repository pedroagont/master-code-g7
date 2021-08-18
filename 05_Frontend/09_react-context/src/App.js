import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { ThemeProvider } from './contexts/themeContext';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
