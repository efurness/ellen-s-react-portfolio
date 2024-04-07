import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Projects from './components/Projects';
// import Form from './components/Form';

// eslint-disable-next-line
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as 
//   Router,
//   Routes,
//   Route,
// } from "react-router-dom";
export const ThemeContext = createContext('null')
// eslint-disable-next-line

const projects = [
  
  {
    id: 1,
    name: "Project 2",
    title: 'Fitness with Friends',
    GitHub: <a href="https://github.com/AuraFly/Fit_With_Friends.git">GitHub</a>,
    Website: <a href="https://fitwithfriends-app.herokuapp.com/">Heroku</a>,
    image: '/fitness_friends.png',
    

  },
  {
    id: 2,
    name:  <a href="https://efurness.github.io/spokes-people/">Website</a>,
    title: 'Spokes People',
    GitHub: <a href="https://github.com/efurness/spokes-people.git">Project 3 - Github</a>,
    image: '/spokes.png',

  
  },

  {
    id: 3,
    name: "Challenge",
    title: 'Weather Dashboard',
    GitHub: <a href="https://github.com/efurness/Unit-6-weather-dashboard.git">GitHub</a>,
    Heroku: <a href="https://efurness.github.io/Unit-6-weather-dashboard/">Website</a>,
    image: '/weather5.gif',
    
  },
];
function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark': 'light'));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
    
    <div className='App' id={theme}>
      <div className='switch2'>
      <Nav />

    <div className='switch'>
      <lable> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</lable>
    <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
    </div>
    
    {/* <Router>
    <Routes>
      <Route path="/" element={<Body />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects2" element={<Projects2 />}></Route>
          <Route path="/contact" element={<Form />} ></Route>
    </Routes>,
    </Router> */}
    <Body />,
    <Projects Projects={projects}/>,
        {/* <Form />, */}

    <Footer />,
    </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
