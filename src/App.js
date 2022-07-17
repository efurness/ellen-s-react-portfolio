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
    name: "Project 1",
    title: 'City Scapes',
    GitHub: <a href="https://github.com/jgault87/city-scapes.git">GitHub</a>,
    Heroku: <a href="https://jgault87.github.io/city-scapes">Heroku</a>,
    image: '/city_scapes.png'
    
  },
  {
    id: 2,
    name: "Project 2",
    title: 'Fitness with Friends',
    GitHub: <a href="https://github.com/AuraFly/Fit_With_Friends.git">GitHub</a>,
    Heroku: <a href="https://fitwithfriends-app.herokuapp.com/">Heroku</a>,
    image: '/fitness_friends.png',
    

  },
  {
    id: 3,
    name: "Challenge",
    title: 'Note Taker Interface',
    GitHub: <a href="https://github.com/efurness/note-taker-interface.git">GitHub</a>,
    Heroku: <a href="https://pure-crag-28667.herokuapp.com/">Heroku</a>,
    image: '/note_taker.png'
  },
  {
    id: 4,
    name: "Challenge",
    title: 'Weather Dashboard',
    GitHub: <a href="https://github.com/efurness/Unit-6-weather-dashboard.git">GitHub</a>,
    Heroku: <a href="https://efurness.github.io/Unit-6-weather-dashboard/">Website</a>,
    image: '/weather.gif'
    
  },
  {
    id: 5,
    name: "Challenge",
    title: 'Coding Quiz',
    GitHub: <a href="https://github.com/efurness/Unit4-Coding-Quiz.git">GitHub</a>,
    Heroku: <a href="https://efurness.github.io/Unit4-Coding-Quiz/">Website</a>,
    image: '/coding_quiz.png'
  },
  {
    id: 6,
    name: "Challenge",
    title: 'Work Day Scheduler',
    GitHub: <a href="https://github.com/efurness/Unit5-Work-Day-Scheduler.git">GitHub</a>,
    Heroku: <a href="https://efurness.github.io/Unit5-Work-Day-Scheduler/">Website</a>,
    image: '/work_day.png'

  },
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
