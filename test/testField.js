const assert = require('assert');
const { Field } = require('../src/field');

describe('Field', () => {
  it('Should validate two fields of same instance', () => {
    const field1 = new Field('name', 'enter name');
    const field2 = new Field('name', 'enter name');

    assert.ok(field1.isEqual(field2));
  });
});
