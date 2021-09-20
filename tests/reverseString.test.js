const reverseString = require('../src/reverseString');

test('No input', ()=>
  expect(reverseString()).toBe(''));

test('One letter', ()=>
  expect(reverseString('A')).toBe('A'));

test('Input "horse" reponse "esroh"', ()=>
  expect(reverseString('horse')).toBe('esroh'));

test('Input "A man can dream whatever he wants! reponse "!stnaw eh revetahw maerd nac nam A"',
  ()=>  expect(reverseString('A man can dream whatever he wants!'))
    .toBe('!stnaw eh revetahw maerd nac nam A'));