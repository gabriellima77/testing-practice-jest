const analyze = require('./analyze');

test('No input', ()=>
  expect(analyze()).toBeNull());

test('Input not is a Array',
  ()=> expect(analyze(12)).toBeNull());

test('Good path', ()=>
  expect(analyze([1, 2, 3, 4, 5]))
    .toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5
    }));

test('Good path (Test 2)', ()=>
  expect(analyze([1, 23, 35, 10, 9]))
    .toEqual({
      average: 15.6,
      min: 1,
      max: 35,
      length: 5
    }));

test('Items different of a number but can be converted!', ()=>
  expect(analyze([1, 3, '5'])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 3
  }));

test("Item can't be converted", ()=>
  expect(analyze([1, 2, 3, 'test', null])).toBeNull());