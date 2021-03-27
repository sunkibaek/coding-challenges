class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
  }
}

class Queue {
  head;
  tail;

  enqueue = (value) => {
    const newNode = new Node(value);

    if (this.head === undefined) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  };

  dequeue = () => {
    if (this.head === undefined) {
      return;
    }

    const value = this.head.value;

    this.head = this.head.next;

    return value;
  };

  toArray = () => {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.value);

      current = current.next;
    }

    return result;
  };
}

module.exports = Queue;
