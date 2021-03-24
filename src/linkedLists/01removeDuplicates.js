// Can we assume this is a non-circular, singly linked list?
// Yes
// Can you insert None values in the list?
// No
// Can we assume we already have a linked list class that can be used for this problem?
// Yes
// Can we use additional data structures?
// Implement both solutions
// Can we assume this fits in memory?
// Yes

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

  removeDuplicates = () => {
    const values = new Set();

    let current = this.head;
    let prev;

    while (current) {
      if (values.has(current.value)) {
        prev.next = current.next;
        current = current.next;
        continue;
      }

      values.add(current.value);
      prev = current;
      current = current.next;
    }
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
