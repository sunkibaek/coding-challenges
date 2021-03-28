class Node {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
  }

  insert = (value) => {
    const newNode = new Node(value);

    if (value >= this.value && this.right) {
      this.right.insert(value);
      return;
    }

    if (value >= this.value) {
      this.right = newNode;
      return;
    }

    if (this.left) {
      this.left.insert(value);
      return;
    }

    this.left = newNode;
  };

  toArray = (prev) => {
    const result = [];

    if (this.left) {
      result.push(...this.left.toArray([]));
    }

    result.push(this.value);

    if (this.right) {
      result.push(...this.right.toArray([]));
    }

    return [...prev, ...result];
  };
}

class BinarySearchTree {
  head;

  insert = (value) => {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    this.head.insert(value);
  };

  toArray = () => {
    return this.head.toArray([]);
  };
}

module.exports = BinarySearchTree;
