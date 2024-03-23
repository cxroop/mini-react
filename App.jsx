import React from './core/React.js';

// const App = React.createElement('div', { id: 'app' }, 'hello', ' there');
const App = <div>hello there</div>;
const AppFn = () => (
  <div id='123' className='33' style={{ color: 'red' }}>
    hello there
    <span>another one</span>
  </div>
);

console.log(AppFn);

export default App;
