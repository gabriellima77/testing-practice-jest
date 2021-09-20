const separators = [' ', ',', '-', '_', '.', ';'];

const capitalize = (string)=>{
  if(!string) return '';
  return  [...string].map((letter, index)=>
            (index === 0 || separators.includes(string[index - 1]))? letter.toUpperCase() : letter)
          .join('');
}

module.exports = capitalize;