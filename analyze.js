const average = (array)=> Math.floor(array
  .reduce((result, number)=> result += number/array.length, 0) * 100) / 100; 

const minMax = (array)=> array
  .reduce((result, number)=> {
    if(result.min > number) result.min = +number;
    if(result.max < number) result.max = +number;
    return result;
  }, 
  {
    min: array[0],
    max: array[0]
  });

const hasNaN = (array)=> {
  for(let i = 0; i < array.length; i++){
    if(isNaN(+array[i])) return true;
  }
  return false;
}

const analyze = (array)=> {
  if(!Array.isArray(array) || hasNaN(array)) return null;
  
  return {
    average: average(array),
    ...minMax(array),
    length: array.length
  }
}

module.exports = analyze;