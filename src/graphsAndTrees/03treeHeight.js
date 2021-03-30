class Node {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
  }

  height = (maxHeight) => {
    const newHeight = maxHeight + 1;
    const heights = [newHeight];

    if (this.left) {
      heights.push(this.left.height(newHeight));
    }

    if (this.right) {
      heights.push(this.right.height(newHeight));
    }

    return Math.max(...heights);
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
  height = () => {
    if (!this.head) {
      return 0;
    }

    return this.head.height(0);
  };

  insert = (value) => {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    this.head.insert(value);
  };
}

module.exports = Tree;
