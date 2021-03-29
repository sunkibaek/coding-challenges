class Node {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
  }

  insert = (value) => {
    if (value > this.value && this.right) {
      this.right.insert(value);
      return;
    }

    if (value > this.value) {
      this.right = new Node(value);
      return;
    }

    if (this.left) {
      this.left.insert(value);
      return;
    }

    this.left = new Node(value);
  };

  inOrderTraversal = () => {
    const result = [];

    if (this.left) {
      result.push(...this.left.inOrderTraversal());
    }

    result.push(this.value);

    if (this.right) {
      result.push(...this.right.inOrderTraversal());
    }

    return result;
  };

  preOrderTraversal = () => {
    const result = [];

    result.push(this.value);

    if (this.left) {
      result.push(...this.left.preOrderTraversal());
    }

    if (this.right) {
      result.push(...this.right.preOrderTraversal());
    }

    return result;
  };

  postOrderTraversal = () => {
    const result = [];

    if (this.left) {
      result.push(...this.left.postOrderTraversal());
    }

    if (this.right) {
      result.push(...this.right.postOrderTraversal());
    }

    result.push(this.value);

    return result;
  };
}

class Tree {
  head;

  insert = (value) => {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    this.head.insert(value);
  };

  inOrderTraversal = () => {
    if (!this.head) {
      return [];
    }

    return this.head.inOrderTraversal();
  };

  preOrderTraversal = () => {
    if (!this.head) {
      return [];
    }

    return this.head.preOrderTraversal();
  };

  postOrderTraversal = () => {
    if (!this.head) {
      return [];
    }

    return this.head.postOrderTraversal();
  };
}

module.exports = Tree;
