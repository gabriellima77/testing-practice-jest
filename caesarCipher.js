const getLetter = (letter, key)=> {
  const letters = ['a', 'A'];
  for(let i = 0; i < letters.length; i++) {
    const a = letters[i].charCodeAt(0);
    const z = a + 26;
    const codeChar = letter.charCodeAt(0);
    if(codeChar >= a &&  codeChar <= z){
      const diference = z - codeChar;
      if(diference > key)
        return String.fromCharCode(codeChar + key);
      else 
        return String.fromCharCode(a + (codeChar + key - z));
    }
  }
  return letter;
}

const caesarCipher = (message, key)=> {
  if(!message || typeof message === 'number') return '';
  if(!key) return message;
  return [...message]
    .map((char)=> getLetter(char, key))
    .join('');
};

module.exports = caesarCipher;