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
('.navTrigger').click(function () {
  (this).toggleClass('active');
  console.log("Clicked menu");
  ("#mainListDiv").toggleClass("show_list");
  ("#mainListDiv").fadeIn();

});
      
document.body.classList.add('bg-salmon');

var body = document.getElementById('body');
var checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', themeChange);

function themeChange(){
  ["light-mode", "dark-mode"].map(cn => document.body.classList.toggle(cn));
  if (checkbox.checked){
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
  }
}
      
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
