class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  static addReverse = (list1, list2) => {
    if (list1 === undefined || list2 === undefined) {
      return;
    }

    const sumList = new LinkedList();
    let list1Current = list1.head;
    let list2Current = list2.head;
    let carry = 0;

    while (list1Current || list2Current) {
      const value1 = list1Current ? list1Current.value : 0;
      const value2 = list2Current ? list2Current.value : 0;
      const sum = value1 + value2 + carry;
      const remainder = sum % 10;
      carry = Math.floor(sum / 10);

      sumList.appendNode(remainder);

      list1Current = list1Current ? list1Current.next : undefined;
      list2Current = list2Current ? list2Current.next : undefined;
    }

    if (carry > 0) {
      sumList.appendNode(carry);
    }

    return sumList;
  };

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
}

module.exports = LinkedList;
