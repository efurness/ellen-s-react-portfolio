import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Form from './components/Form';
import Projects from './components/Projects';
// eslint-disable-next-line
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext('null')
// eslint-disable-next-line

const projects = [
  {
    id: 1,
    name: "project 1",
    title: 'bike',
    image: '/portfolio_photo.png'
    
  },
  {
    id: 2,
    name: "project 2",
    image: '/portfolio_photo.png'
  },
  {
    id: 3,
    name: "project 3",
    image: '/portfolio_photo.png'
  },
  {
    id: 4,
    name: "project 4",
    image: 'portfolio_photo.png'
  },
  {
    id: 5,
    name: "project 5",
    image: '/weather.png'
  },
  {
    id: 6,
    name: "project 6",
    image: '/portfolio_photo.png'

  }
];
function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark': 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
    
    <Nav />
    <div className='App' id={theme}>
    <div className='switch'>
      <lable> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</lable>
    <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
    </div>
    <Body />,
    <Projects Projects={projects}/>,
    <Footer />,
    <Form />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
