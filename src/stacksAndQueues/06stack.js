class Stack {
  data = [];

  push = (value) => {
    this.data.push(value);
  };

  pop = () => {
    return this.data.pop();
  };

  peek = () => {
    return this.data[this.data.length - 1];
  };

  isEmpty = () => {
    return this.data.length === 0;
  };

  toArray = () => {
    return this.data;
  };
}

module.exports = Stack;
