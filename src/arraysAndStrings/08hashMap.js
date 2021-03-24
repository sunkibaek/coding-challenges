class HashMap {
  static TABLE_SIZE = 100;

  table = [];

  buildHashKey = (key) => {
    let sum = 0;

    for (let i = 0; i < key.length; i += 1) {
      sum += key.charCodeAt(i);
    }

    return sum % HashMap.TABLE_SIZE;
  };

  set = (key, value) => {
    const index = this.buildHashKey(key);
    const map = this.table[index] || {};
    map[key] = value;

    this.table[index] = map;
  };

  get = (key) => {
    const index = this.buildHashKey(key);
    const map = this.table[index];
    const value = map[key];

    if (value === undefined) {
      throw new TypeError("Could not find the matching key");
    }

    return value;
  };

  remove = (key) => {
    const index = this.buildHashKey(key);
    const map = this.table[index];

    if (!map) {
      throw new TypeError("Could not find the matching key");
    }

    this.table.splice(index, 1);
  };
}

module.exports = HashMap;
