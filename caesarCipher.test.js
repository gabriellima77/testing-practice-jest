const caesarCipher = require('./caesarCipher');

test('No input', ()=>
  expect(caesarCipher()).toBe(''));

test('Message and no key', ()=>
  expect(caesarCipher('Test')).toBe('Test'));

test('No message and key', ()=>
  expect(caesarCipher(1)).toBe(''));

test('Message "A" key 1 return "B"', ()=>
  expect(caesarCipher('A', 1)).toBe('B'));

test('Message "Z" key 1 return "A"', ()=>
  expect(caesarCipher('Z', 1)).toBe('A'));

test('Message "A" key 13 return "N"', ()=>
  expect(caesarCipher('A', 13)).toBe('N'));

test('Message "Z" key 12 return "L"', ()=>
  expect(caesarCipher('Z', 12)).toBe('L'));

test('Caesar Cipher and key 1', ()=>
  expect(caesarCipher('Caesar Cipher', 1)).toBe('Dbftbs Djqifs'));

test('Message with pontuantion "a.b" return "b.c"', ()=>
  expect(caesarCipher('a.b', 1)).toBe('b.c'));

test('Test with a different key (13)', ()=>
  expect(caesarCipher('This is just a test!', 13)).toBe('Guvf vf whfg n grfg!'));

