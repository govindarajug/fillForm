class Field {
  constructor(name, query) {
    this.name = name;
    this.query = query;
    this.response = null;
  }

  isEqual(otherField) {
    return otherField instanceof Field &&
      this.name === otherField.name &&
      this.query === otherField.query;
  }
}

module.exports = { Field };
