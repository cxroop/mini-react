import React from './core/React.js';
import ReactDom from './core/ReactDom.js';
import App from './App.jsx';

console.log(App, <App />);

ReactDom.createRoot(document.querySelector('#root')).render(App);
