// const textEL = {
//   type: 'TEXT_ELEMENT',
//   props: {
//     nodeValue: 'Hello World',
//     children: [],
//   },
// };

// const vdom = {
//   type: 'div',
//   props: {
//     id: 'app',
//     children: [textEL],
//   },
// };

// const textEl = createTextNode('Hello Word');

import React from './core/React.js';
import ReactDOM from './core/ReactDom.js';

const App = React.createElement('div', { id: 'app' }, 'Hello Word', 'aa');

console.log(App);

ReactDOM.createRoot(document.querySelector('#root')).render(App);

// render(document.querySelector('#root'), App);

// createRoot(document.querySelector('#root'), App);

// document.querySelector('#root').innerHTML = `app`;

// const div = document.createElement(App.type);
// div.id = App.props.id;
// document.querySelector('#root').append(div);
// const textNode = document.createTextNode('');
// textNode.nodeValue = textEl.props.nodeValue;
// div.append(textNode);

// root.append(div);
