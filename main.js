// const textEl = {
//   type: 'TEXT_ELEMENt',
//   props: {
//     nodeValue: 'hello',
//     children: []
//   }
// }

const TEXT_ELEMENT = 'TEXT_ELEMENT';
function createTextNode(text) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// const el = {
//   type: 'div',
//   props: {
//     id: 'app',
//     children: [textEl],
//   },
// };

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === 'string' ? createTextNode(child) : child;
      }),
    },
  };
}

function render(el, container) {
  const dom =
    el.type === TEXT_ELEMENT
      ? document.createTextNode('')
      : document.createElement(el.type);

  Object.keys(el.props).forEach(key => {
    if (key !== 'children') {
      dom[key] = el.props[key];
    }
  });
  const children = el.props.children;
  children.forEach(child => {
    render(child, dom);
  });
  container.append(dom);
}

// const textEl = createTextNode('hello');
const App = createElement('div', { id: 'app' }, 'hello', ' there');

// render(App, document.querySelector('#root'));

const ReactDom = {
  createRoot(container) {
    return {
      render(App) {
        render(App, container)
      },
    };
  },
};

ReactDom.createRoot(document.querySelector('#root')).render(App)
// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.querySelector('#root').append(dom);

// const textNode = document.createTextNode('');
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);
