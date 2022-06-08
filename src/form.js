class Form {
  #allDetails;
  #index;
  #detailsNeeded;
  constructor(detailsNeeded) {
    this.#detailsNeeded = detailsNeeded;
    this.#allDetails = {};
    this.#index = 0;
  }

  toString() {
    return JSON.stringify(this.#allDetails);
  }

  message() {
    return `Please enter your ${this.currentDetail()}`;
  }

  currentDetail() {
    return this.#detailsNeeded[this.#index];
  }

  addDetail(response) {
    if (this.currentDetail() === 'hobbies') {
      this.#allDetails[this.currentDetail()] = response.split(',');
    } else {
      this.#allDetails[this.currentDetail()] = response;
    }
    this.#index++;
  }

  isFilled() {
    return this.#index >= this.#detailsNeeded.length;
  }
}

module.exports = { Form };
