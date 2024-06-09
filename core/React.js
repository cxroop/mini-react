
const TEXT_ELEMENT = 'TEXT_ELEMENT'
// vdom
function createTextNode(nodeValue) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue,
      children: [],
    },
  };
}

// 此处的 children 是一个数组
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'string' ? createTextNode(child) : child
      ),
    },
  };
}

// dom
function render(vdom, container) {
  // 渲染函数
  // 1. 创建真实dom
  const dom =
    vdom.type === TEXT_ELEMENT
      ? document.createTextNode('')
      : document.createElement(vdom.type);
  // 2. 遍历属性（设置 props）
  Object.keys(vdom.props).forEach(key => {
    if (key !== 'children') {
      dom[key] = vdom.props[key];
    }
  });
  // 3. 遍历子元素
  const children = vdom.props.children
  children.forEach(child => {
    render(child, dom);
  });

  container.append(dom);
}

const React = {
  createElement,
  render
}

export default React