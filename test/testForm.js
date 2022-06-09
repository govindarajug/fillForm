const assert = require('assert');
const { Form } = require('../src/form');

describe('Form', () => {
  it('Should add response given with name', () => {
    const queries = [{ name: 'name', query: 'enter name' }];
    const form = new Form(queries);
    form.addDetail('tan');
    assert.deepStrictEqual(form.getResponses(), { name: 'tan' });
  });

  it('Should be filled after adding all details', () => {
    const queries = [{ name: 'name', query: 'enter name' }];
    const form = new Form(queries);
    form.addDetail('tan');
    assert.ok(form.isFilled());
  });

  it('Should not be filled after adding all details', () => {
    const queries = [
      { name: 'name', query: 'enter name' },
      { name: 'dob', query: 'enter dob' }
    ];
    const form = new Form(queries);
    form.addDetail('tan');
    assert.strictEqual(form.isFilled(), false);
  });
});
