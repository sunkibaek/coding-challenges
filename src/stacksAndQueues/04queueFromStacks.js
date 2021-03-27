class Queue {
  frontStack = [];
  backStack = [];

  migrateBackToFront = () => {
    while (this.backStack.length > 0) {
      this.frontStack.push(this.backStack.pop());
    }
  };

  migrateFrontToBack = () => {
    while (this.frontStack.length > 0) {
      this.backStack.push(this.frontStack.pop());
    }
  };

  enqueue = (value) => {
    this.migrateBackToFront();

    this.frontStack.push(value);

    this.migrateFrontToBack();
  };

  dequeue = () => {
    return this.backStack.pop();
  };

  toArray = () => {
    return this.backStack;
  };
}

module.exports = Queue;
