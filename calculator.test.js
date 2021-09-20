const calculator = require('./src/calculator');

test('add 2 + 2', ()=> 
  expect(calculator.add(2, 2)).toBe(4));

test('subtract 2 - 2', ()=>
  expect(calculator.subtract(2, 2)).toBe(0));

test('multiply 2 * 2', ()=>
  expect(calculator.multiply(2, 2)).toBe(4));

test('division 1 / 2', ()=> 
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5));
