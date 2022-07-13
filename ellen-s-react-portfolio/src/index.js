import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// eslint-disable-next-line
        function darkMode() {
          var element = document.body;
          var content = document.getElementById("DarkModetext");
          element.className = "dark-mode";
          content.innerText = "Dark Mode is ON";
        }
// eslint-disable-next-line        
          function lightMode() {
          var element = document.body;
          var content = document.getElementById("DarkModetext");
          element.className = "light-mode";
          content.innerText = "Dark Mode is OFF";
        }
      
        
      
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
