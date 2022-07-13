import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext('null')


function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark': 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
    <div className='App' id={theme}>
    <Nav />,
    <Body />,
    <div className='switch'>
    <ReactSwitch />
    </div>
    <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
