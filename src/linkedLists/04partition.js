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
    let prev;

    while (current) {
      result.push(current.value);

      prev = current;
      current = current.next;
    }

    return result;
  };

  partition = (compare) => {
    let compareNode;
    let compareNodePrev;

    let current = this.head;
    let prev;

    while (current) {
      if (current.value === compare) {
        compareNode = current;
        compareNodePrev = prev;
        break;
      }

      prev = current;
      current = current.next;
    }

    current = this.head;
    prev = undefined;
    let currentPartition = "left";

    while (current) {
      if (current === compareNode) {
        currentPartition = "right";
      }

      if (prev && currentPartition === "left" && current.value >= compare) {
        prev.next = current.next;

        current.next = compareNode.next;
        compareNode.next = current;

        current = prev.next;
        continue;
      }

      if (currentPartition === "right" && current.value < compare) {
        prev.next = current.next;

        compareNodePrev.next = current;
        current.next = compareNode;

        current = prev.next;
        continue;
      }

      prev = current;
      current = current.next;
    }
  };
}

module.exports = LinkedList;
