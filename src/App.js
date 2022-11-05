import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Form from './components/Form';
import Projects from './components/Projects';
import Projects2 from './components/Projects2';

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
    name: "Project 1",
    title: 'City Scapes',
    GitHub: <a href="https://github.com/jgault87/city-scapes.git">GitHub</a>,
    Website: <a href="https://jgault87.github.io/city-scapes">Heroku</a>,
    image: '/city_scapes.png',
    
  },
  {
    id: 2,
    name: "Project 2",
    title: 'Fitness with Friends',
    GitHub: <a href="https://github.com/AuraFly/Fit_With_Friends.git">GitHub</a>,
    Website: <a href="https://fitwithfriends-app.herokuapp.com/">Heroku</a>,
    image: '/fitness_friends.png',
    

  },
  {
    id: 3,
    name:  <a href="https://www.youtube.com/watch?v=f4sIKWb2nYM">YouTube</a>,
    title: 'Spokes People',
    GitHub: <a href="https://github.com/bward3/spokes-people.git">GitHub Project 3</a>,
    image: '/Spokes_people.png',

  
  },
    
];
const projects2 = [

  {
    id: 4,
    name: "Challenge",
    title: 'Weather Dashboard',
    GitHub: <a href="https://github.com/efurness/Unit-6-weather-dashboard.git">GitHub</a>,
    Heroku: <a href="https://efurness.github.io/Unit-6-weather-dashboard/">Website</a>,
    image: '/weather5.gif',
    
  },
  {
    id: 5,
    name: "Challenge",
    title: 'Note Taker Interface',
    GitHub: <a href="https://github.com/efurness/note-taker-interface.git">GitHub</a>,
    Heroku: <a href="https://pure-crag-28667.herokuapp.com/">Heroku</a>,
    image: '/note_taker.png',
  },
  {
    id: 6,
    name: "Challenge",
    title: 'Work Day Scheduler',
    GitHub: <a href="https://github.com/efurness/Unit5-Work-Day-Scheduler.git">GitHub</a>,
    Heroku: <a href="https://efurness.github.io/Unit5-Work-Day-Scheduler/">Website</a>,
    image: '/work_day.png',

  },
];
function App() {
  const [theme, setTheme] = useState('light')

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
        <Projects2 Projects={projects2}/>,

    <Form />
    <Footer />,
    </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
