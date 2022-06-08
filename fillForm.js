const fs = require('fs');
const { Form } = require('./src/form.js');
const print = (text) => console.log(text);

const recordResponse = (form) => {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (detail) => {
    form.addDetail(detail.trim('\n'));
    if (form.isFilled()) {
      process.stdin.destroy();
    } else {
      print(form.message());
    }
  });

  process.stdin.on('close', () => {
    fs.writeFileSync('form.json', form.toString(), 'utf8');
    print('Thank you');
  });
};

const main = () => {
  const queries = [
    { query: 'name' },
    { query: 'DOB' },
    { query: 'hobbies' }
  ];
  
  const form = new Form(queries.map(x => x.query));
  print(form.message());
  recordResponse(form);
};

main();
