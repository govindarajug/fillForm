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
    return `Please enter your ${this.currentDetail()}`;
  }

  currentDetail() {
    return this.#detailsNeeded[this.#index];
  }

  addDetail(input) {
    this.#allDetails[this.currentDetail()] = input;
    this.#index++;
  }
}

const formDetails = ['name', 'DOB', 'hobbies'];
const form = new Details(formDetails);
print(form.message());

process.stdin.on('data', (chunk) => {
  form.addDetail(chunk.trim('\n'));
  print(form.message());
});

process.stdin.on('end', () => {
  fs.writeFileSync('form.json', form.toString(), 'utf8');
  console.log('Thank you');
});
