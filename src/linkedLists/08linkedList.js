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
    this.appendMultiple(elements);
  }

  insertToFront = (value) => {
    if (value === undefined) {
      return;
    }

    const newNode = new Node(value);
    const nextNode = this.head;

    this.head = newNode;
    this.head.next = nextNode;
  };

  appendMultiple = (values) => {
    for (const value of values) {
      this.append(value);
    }
  };

  append = (value) => {
    if (value === undefined) {
      return;
    }

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

  find = (value) => {
    if (value === undefined) {
      return;
    }

    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }
  };

  delete = (value) => {
    if (value === undefined) {
      return;
    }

    let current = this.head;
    let prev;

    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        return;
      }

      prev = current;
      current = current.next;
    }
  };

  length = () => {
    let count = 0;
    let current = this.head;

    while (current) {
      current = current.next;
      count += 1;
    }

    return count;
  };
}

module.exports = LinkedList;
