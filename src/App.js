import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './components/Contact';

// eslint-disable-next-line
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
    <div className='switch'>
      <lable> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</lable>
    <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
    </div>
    <Nav />
    <Body />,
    <Footer />,
    <Contact />,
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
