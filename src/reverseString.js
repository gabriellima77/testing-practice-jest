const reverseString = (string)=> {
  if(!string) return '';
  return [...string].reverse().join('');
};

module.exports = reverseString;