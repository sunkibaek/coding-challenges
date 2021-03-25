class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  head;
  count = 0;

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
    this.count += 1;
  };

  getFromLast = (k) => {
    const targetIndex = this.count - k;
    let i = 0;

    let current = this.head;
    let prev;

    while (current) {
      if (i === targetIndex) {
        return current.value;
      }

      prev = current;
      current = current.next;
      i += 1;
    }

    return;
  };
}

module.exports = LinkedList;
