class Node {
  value;
  right;
  left;
  parent;

  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
  }

  insert = (value, parent) => {
    if (value > this.value && this.right) {
      this.right.insert(value, parent);
      return;
    }

    if (value > this.value) {
      this.right = new Node(value, this);
      return;
    }

    if (this.left) {
      this.left.insert(value, parent);
      return;
    }

    this.left = new Node(value, this);
  };

  height = (depth = 1) => {
    const result = [depth];

    if (this.left) {
      result.push(this.left.height(depth + 1));
    }

    if (this.right) {
      result.push(this.right.height(depth + 1));
    }

    return Math.max(...result);
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

  createMinBst = (nums) => {
    const mid = Math.floor(nums.length / 2);

    if (nums.length % 2 !== 0) {
      this.insert(nums[mid]);
    }

    for (let i = 1; i <= mid; i += 1) {
      const higher = nums[mid + i];
      const lower = nums[mid - i];

      this.insert(higher);
      this.insert(lower);
    }
  };

  height = () => {
    if (!this.head) {
      return 0;
    }

    return this.head.height();
  };
}

module.exports = Tree;
