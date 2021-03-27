class Stack {
  data = [];
  minValue;

  constructor(values = []) {
    this.pushMultiple(values);
  }

  pushMultiple = (values) => {
    for (let i = 0; i < values.length; i += 1) {
      const value = values[i];

      this.push(value);
    }
  };

  push = (value) => {
    if (this.minValue === undefined || this.minValue > value) {
      this.minValue = value;
    }

    this.data.push(value);
  };

  pop = () => {
    if (this.data.length === 0) {
      throw new Error("Stack is empty");
    }

    return this.data.pop();
  };

  min = () => {
    return this.minValue;
  };

  toArray = () => {
    return this.data;
  };
}

module.exports = Stack;
