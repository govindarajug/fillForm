class Form {
  #index;
  #fields;
  constructor(fields) {
    this.#fields = fields;
    this.#index = 0;
  }

  toString() {
    return JSON.stringify(this.getResponses());
  }

  getResponses() {
    return this.#fields.reduce((responses, fields) => {
      responses[fields.name] = fields.response;
      return responses;
    }, {});
  }

  message() {
    return `Please enter your ${this.currentDetail()}`;
  }

  currentDetail() {
    return this.#fields[this.#index].name;
  }

  addDetail(response) {
    if (this.currentDetail() === 'hobbies') {
      this.#fields[this.#index].response = response.split(',');
    } else {
      this.#fields[this.#index].response = response;
    }
    this.#index++;
  }

  isFilled() {
    return this.#index >= this.#fields.length;
  }
}

module.exports = { Form };
