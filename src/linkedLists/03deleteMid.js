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

  delete = (value) => {
    let current = this.head;
    let prev;

    while (current) {
      if (current.value === value && prev) {
        prev.next = current.next;
      }

      if (current.value === value) {
        current.value = undefined;
      }

      prev = current;
      current = current.next;
    }

    return;
  };

  toArray = () => {
    const result = [];

    let current = this.head;
    let prev;

    while (current) {
      result.push(current.value);

      prev = current;
      current = current.next;
    }

    return result;
  };
}

module.exports = LinkedList;
