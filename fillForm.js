const fs = require('fs');
process.stdin.setEncoding('utf8');

const print = (text) => console.log(text);
class Details {
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
    if (this.#index >= this.#detailsNeeded.length) {
      return '';
    }
    return `Please enter your ${this.currentDetail()}`;
  }

  currentDetail() {
    return this.#detailsNeeded[this.#index];
  }

  nextDetail() {
    this.#index++;
    return this.#detailsNeeded[this.#index];
  }

  addDetail(input) {
    if (this.currentDetail() === 'hobbies') {
      this.#allDetails[this.currentDetail()] = input.split(',');
    } else {
      this.#allDetails[this.currentDetail()] = input;
    }
    this.nextDetail();
  }
}

const queries = [
  { query: 'name' },
  { query: 'DOB' },
  { query: 'hobbies' }
];

const form = new Details(queries.map(x => x.query));
print(form.message());

process.stdin.on('data', (detail) => {
  form.addDetail(detail.trim('\n'));
  print(form.message());
});

process.stdin.on('end', () => {
  fs.writeFileSync('form.json', form.toString(), 'utf8');
  print('Thank you');
});
