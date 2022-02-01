import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const element = React.createElement("div", {a: 5, b: 8}, "Hallo world");
console.log(element);


ReactDOM.render(element, document.querySelector('#root'));



const myelement = <h1>First JSX element!</h1>;
ReactDOM.render(
  myelement,
  document.getElementById("root")
);

// const myelement = React.createElement(
//   "h1",
//   {},
//   "no JSX!"
// );
// ReactDOM.render(
//   myelement,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



