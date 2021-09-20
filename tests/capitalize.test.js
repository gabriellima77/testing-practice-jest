const capitalize = require('../src/capitalize');

test('No input', ()=>
  expect(capitalize()).toBe(''));

test('Input "a" to return "A"', ()=>
  expect(capitalize('a')).toBe('A'));

test('Input "gabriel" to return "Gabriel"', ()=>
  expect(capitalize('gabriel')).toBe('Gabriel'));

test('No changes', ()=>
  expect(capitalize('Gabriel')).toBe('Gabriel'));

test('Multiple words (First test)', ()=>
  expect(capitalize('gabriel Lima')).toBe('Gabriel Lima'));

test('Multiple words (Second test)', ()=> expect(capitalize('gabriel, lima')).toBe('Gabriel, Lima'));