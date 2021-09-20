const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b)=> a - b,
  divide: (a, b)=> {
    if(a === 0) throw new Error('This operation is impossible!');
    return a / b;
  },
  multiply: (a, b) => a * b
}

module.exports = calculator;