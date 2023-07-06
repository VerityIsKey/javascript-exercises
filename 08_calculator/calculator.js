const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  const sum = arr.reduce((total, num) => {
    return total + num;
  },0)
  return sum;
};

const multiply = function(...args) {
  let sum = args[0] * args[1];
  for(let i = 2; i<args.length; i++){
    sum = sum * args[i];

  }
  return sum;
  
};

const power = function(a, b) {
	let sum = a;
  for (let i = 1; i<b; i++){
    sum = sum * a;

  }
  return sum;
};

const factorial = function(num) {
	let sum = num;
  for (let i = num-1; i>=1; i--){
    sum = sum * i;
  }
  if(sum == 0){
    return sum +1;
  }else{
    return sum;    
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
