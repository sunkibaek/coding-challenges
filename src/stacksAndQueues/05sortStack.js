class Stack {
  data = [];
  buffer = [];

  push = (value) => {
    this.data.push(value);
  };

  sort = () => {
    while (this.data.length > 0) {
      const dataTop = this.data.pop();
      const bufferTop = this.buffer.pop();

      if (bufferTop === undefined) {
        this.buffer.push(dataTop);
        continue;
      }

      if (bufferTop >= dataTop) {
        this.buffer.push(bufferTop);
        this.buffer.push(dataTop);
        continue;
      }

      this.data.push(bufferTop);
      this.data.push(dataTop);
    }

    while (this.buffer.length > 0) {
      this.data.push(this.buffer.pop());
    }
  };

  toArray = () => {
    return this.data;
  };
}

module.exports = Stack;
