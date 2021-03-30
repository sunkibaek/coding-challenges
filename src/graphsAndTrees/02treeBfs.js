class Node {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
  }

  breadthFirstTraversal = () => {
    const queue = [this];
    const result = [];

    while (queue.length > 0) {
      const current = queue.shift();

      if (!current) {
        continue;
      }

      result.push(current.value);

      queue.push(current.left);
      queue.push(current.right);
    }

    return result;
  };

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

  breadthFirstTraversal = () => {
    if (!this.head) {
      return [];
    }

    return this.head.breadthFirstTraversal();
  };
}

module.exports = Tree;
