class Stacks {
  data = [];
  size = 0;

  constructor(count, size) {
    this.data = new Array(count).fill().map(() => new Array());
    this.size = size;
  }

  push = (index, value) => {
    const stack = this.data[index];

    if (stack.length >= this.size) {
      throw new Error("Stack is already full");
    }

    stack.push(value);
  };

  pop = (index) => {
    const stack = this.data[index];

    if (stack.length === 0) {
      throw new Error("Stack is empty");
    }

    return stack.pop();
  };

  toArray = () => {
    return this.data;
  };
}

module.exports = Stacks;
