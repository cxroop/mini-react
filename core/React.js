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
  nextWorkUnit = {
    dom: container,
    props: {
      children: [el],
    },
  };
}

let nextWorkUnit = null;
function workLoop(deadline) {
  let shouldYield = false;
  while (!shouldYield && nextWorkUnit) {
    // run task
    nextWorkUnit = processWorkUnit(nextWorkUnit);
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

function createDom(type) {
  return type === TEXT_ELEMENT
    ? document.createTextNode('')
    : document.createElement(type);
}

function updateProps(dom, props) {
  Object.keys(props).forEach(key => {
    if (key !== 'children') {
      dom[key] = props[key];
    }
  });
}

function createLinked(fiber) {
  const children = fiber.props.children;
  let prevChild = null;
  children.forEach((child, idx) => {
    const nextFiber = {
      type: child.type,
      props: child.props,
      child: null,
      sibling: null,
      parent: fiber,
      dom: null ,
    };
    if (idx === 0) {
      fiber.child = nextFiber;
    } else {
      prevChild.sibling = nextFiber;
    }
    prevChild = nextFiber;
  });
}

function processWorkUnit(fiber) {
  if (!fiber.dom) {
    // 1. 创建 dom
    const dom = (fiber.dom = createDom(fiber.type));
    // 1.1 把dom 添加到父级容器中
    fiber.parent.dom.append(dom);
    // 2. 处理 props
    updateProps(dom, fiber.props);
  }
  // 3. 创建链表关系，设置指针
  // 3.1 找child
  // 3.2 找sibling
  // 3.3 找uncle
  createLinked(fiber);
  console.log('fiber', fiber);
  // 4. 返回下一个需要处理的任务
  if (fiber.child) {
    // 找孩子
    return fiber.child;
  }

  if (fiber.sibling) {
    // 找兄弟
    return fiber.sibling;
  }

  // 找叔叔
  return fiber.parent?.sibling;
}

requestIdleCallback(workLoop);

const React = {
  render,
  createElement,
};

export default React;
