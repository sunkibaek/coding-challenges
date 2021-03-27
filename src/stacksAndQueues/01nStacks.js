class Stacks {
  data = [];
  size = 0;
  count = 0;

  constructor(count, size) {
    this.count = count;
    this.size = size;
  }

  push = (index, value) => {
    const startIndex = index * this.size;
    const endIndex = startIndex + this.size - 1;
    let i = startIndex;

    for (; i <= endIndex; i += 1) {
      if (this.data[i] === undefined) {
        break;
      }
    }

    if (i > endIndex) {
      throw new Error("Stack is already full");
    }

    this.data[i] = value;
  };

  pop = (index) => {
    const startIndex = index * this.size;
    const endIndex = startIndex + this.size - 1;
    let i = startIndex;

    for (; i <= endIndex; i += 1) {
      if (this.data[i] === undefined) {
        break;
      }
    }

    if (i === startIndex) {
      throw new Error("Stack is empty");
    }

    const value = this.data[i - 1];
    this.data[i - 1] = undefined;

    return value;
  };

  toArray = () => {
    const result = [];

    for (let i = 0; i < this.data.length; i += 1) {
      const stackIndex = Math.floor(i / this.size);
      const stack = result[stackIndex];

      if (stack === undefined) {
        result.push([this.data[i]]);
        continue;
      }

      stack.push(this.data[i]);
    }

    return result;
  };
}

module.exports = Stacks;
