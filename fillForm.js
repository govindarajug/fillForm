const { recordResponse } = require('./src/recordResponse.js');
const { Form } = require('./src/form.js');
const { Field } = require('./src/field.js');
process.stdin.setEncoding('utf8');

const main = () => {
  const nameField = new Field('name', 'Please enter your name');
  const dobField = new Field('dob', 'Please enter your DOB');
  const hobbiesField = new Field('hobbies', 'Please enter your hobbies');

  const queries = [nameField, dobField, hobbiesField];
  const form = new Form(queries);
  console.log(form.message());

  process.stdin.on('data', (detail) =>
    recordResponse(form, detail, console.log));
};

main();
