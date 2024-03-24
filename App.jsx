// js pragma
/**@jsx CReact.createElement */
import CReact from './core/React.js';

// const App = React.createElement('div', { id: 'app' }, 'hello', ' there');
const App = (
  <div id='123' className='33' style={{ color: 'red' }}>
    hello there1
    <span> another one1</span>
    <div className='33' style={{ color: 'red' }}>
      hello there2
      <span> another one2</span>
    </div>
    <div className='33' style={{ color: 'red' }}>
      hello there3
      <span> another one3</span>
    </div>
    <div className='33' style={{ color: 'red' }}>
      hello there4
      <span> another one4</span>
    </div>
    <div className='33' style={{ color: 'red' }}>
      hello there5
      <span> another one5</span>
    </div>
    <div className='33' style={{ color: 'red' }}>
      hello there6
      <span> another one6</span>
      <div className='33' style={{ color: 'red' }}>
        hello there61
        <span> another one61</span>
        <div className='33' style={{ color: 'red' }}>
          hello there62
          <span> another one62</span>
          <div className='33' style={{ color: 'red' }}>
            hello there63
            <span> another one63</span>
            <div className='33' style={{ color: 'red' }}>
              hello there64
              <span> another one64</span>
              <div className='33' style={{ color: 'red' }}>
                hello there65
                <span> another one65</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
// const AppFn = () => (
//   <div id='123' className='33' style={{ color: 'red' }}>
//     hello there
//     <span>another one</span>
//   </div>
// );

// console.log(AppFn);

export default App;
