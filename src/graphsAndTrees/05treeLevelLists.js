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

  lists = () => {
    const queue = [this, null];
    const result = [[]];

    while (queue.length > 1) {
      const current = queue.shift();

      if (current === undefined) {
        continue;
      }

      if (current === null) {
        queue.push(null);
        result.push([]);
        continue;
      }

      const level = result[result.length - 1];

      level.push(current.value);

      queue.push(current.left, current.right);
    }

    if (result[result.length - 1].length === 0) {
      result.splice(result.length - 1, 1);
    }

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

  buildLevelLists = () => {
    if (!this.head) {
      return [];
    }

    return this.head.lists();
  };
}

module.exports = Tree;
