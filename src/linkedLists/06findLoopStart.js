class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  head;

  constructor(elements = []) {
    this.appendNodes(elements);
  }

  appendNodes = (values) => {
    for (const value of values) {
      this.appendNode(value);
    }
  };

  appendNode = (value) => {
    const newNode = new Node(value);

    if (this.head === undefined) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev;

    while (current) {
      prev = current;
      current = current.next;
    }

    prev.next = newNode;
  };

  toArray = () => {
    const result = [];

    let current = this.head;

    while (current) {
      result.push(current.value);

      current = current.next;
    }

    return result;
  };

  getByIndex = (index) => {
    let current = this.head;
    let i = 0;

    while (current) {
      if (i === index) {
        return current;
      }

      current = current.next;
      i += 1;
    }

    return;
  };

  findLoopStart = () => {
    let currentA = this.head;

    if (!this.head || !this.head.next) {
      return;
    }

    let currentB = this.head.next;

    while (currentA && currentB) {
      currentA.mark = true;

      if (currentB.mark) {
        return currentB;
      }

      currentA = currentA.next;

      if (!currentB.next) {
        return;
      }

      currentB = currentB.next.next;
    }

    return;
  };
}

module.exports = LinkedList;
