let taskId = 1
function workLoop(deadline) {
  // console.log(deadline.timeRemaining());
  let shouldYield = false
  taskId++
  console.log(shouldYield);
  while(!shouldYield) {
    // run task
    // dom
    shouldYield = deadline.timeRemaining() < 1
  }
  console.log(`taskId: ${taskId}`);
  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)