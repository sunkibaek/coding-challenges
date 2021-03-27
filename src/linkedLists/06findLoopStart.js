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
    let slowHead = this.head;
    let mode = "doublespeed";

    if (!this.head) {
      return;
    }

    let fastHead = this.head.next;

    while (slowHead && fastHead && fastHead.next) {
      if (mode === "doublespeed" && slowHead === fastHead) {
        slowHead = this.head;
        fastHead = fastHead.next;
        mode = "singlespeed";
        continue;
      }

      if (mode === "singlespeed" && slowHead === fastHead) {
        return slowHead;
      }

      if (mode === "doublespeed") {
        slowHead = slowHead.next;
        fastHead = fastHead.next.next;
      }

      if (mode === "singlespeed") {
        slowHead = slowHead.next;
        fastHead = fastHead.next;
      }
    }

    return;
  };
}

module.exports = LinkedList;
