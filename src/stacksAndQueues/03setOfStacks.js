class StackWithCapacity {
  data = [];

  constructor(capacity = 10) {
    this.capacity = capacity;
  }

  push = (value) => {
    this.data.push(value);
  };

  pop = () => {
    return this.data.pop();
  };

  isFull = () => {
    return this.data.length >= this.capacity;
  };

  isEmpty = () => {
    return this.data.length === 0;
  };

  toArray = () => {
    return this.data;
  };
}

class SetOfStacks {
  stacks = [];

  constructor(stackCapacity) {
    this.stackCapacity = stackCapacity;
  }

  push = (value) => {
    let currentStack = this.stacks[this.stacks.length - 1];

    if (!currentStack || currentStack.isFull()) {
      currentStack = new StackWithCapacity(this.stackCapacity);
      this.stacks.push(currentStack);
    }

    currentStack.push(value);
  };

  pop = () => {
    const currentStack = this.stacks[this.stacks.length - 1];

    if (!currentStack) {
      throw new Error("No stack available");
    }

    const value = currentStack.pop();

    if (currentStack.isEmpty()) {
      this.stacks.splice(this.stacks.length - 1, 1);
    }

    return value;
  };

  toArray = () => {
    return this.stacks.map((stack) => stack.toArray());
  };
}

module.exports = SetOfStacks;
