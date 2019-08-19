function sum(num) {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

function sum2(num, ...otherNums) {
  for (let i = 0; i < otherNums.length; i++) {
    num += otherNums[i];
    
  }

  return num;

}

// Function.prototype.myBind = function(ctx) {
//   let that = this;
//   let words = Array.from(arguments);
//   words.shift();

//   return function() {
//     return that.apply(ctx, [words, arguments].flat());
//   };
// };

Function.prototype.myBind = function(ctx, ...words) {
  let that = this;

  return function(...otherVar) {
    return that.apply(ctx, [words, otherVar].flat());
  };
};

function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

const curryThree = curriedSum(3);
curryThree(1)(2)(3)

Function.prototype.curry = function(numArgs) {
  let that = this;
  let array = [];

  function currying(arg) {
    array.push(arg);
    
    if (array.length === numArgs) {
      that.apply(null, array);
    } else {
      return currying;
    }
  }
  return currying;
};

