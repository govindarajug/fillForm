process.stdin.setEncoding('utf8');
const details = [];
let index = 0;
const print = (text) => console.log(text);
const messages = ['name', 'dob', 'hobbies'];

const fillForm = (detail) => {
  details.push(detail);
  print(messages[index]);
  index++;
};

process.stdin.on('data', (chunk) => {
  fillForm(chunk.trim());
});

process.stdin.on('end', () => {
  console.log('Thank you');
});
