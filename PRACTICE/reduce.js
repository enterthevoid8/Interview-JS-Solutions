//simplified
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
}

const numbers = [1, 2, 3, 4];

const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//roadside-coder example
Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;
    
    for(i=0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator
}

const nums = [1,2,3,4,5,6];
const result = nums.myReduce((acc, curr, i, arr) => {
    return acc + curr
}, 3);

console.log(result);

//standard
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function(callback, initialValue) {
    if (this == null) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const arr = Object(this);         // Ensure 'this' is an object
    const len = arr.length >>> 0;     // Convert length to unsigned integer
    let accumulator = initialValue;
    let startIndex = 0;

    // If no initialValue, use first defined element
    if (accumulator === undefined) {
      while (startIndex < len && !(startIndex in arr)) {
        startIndex++; // Skip empty slots
      }
      if (startIndex >= len) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = arr[startIndex++];
    }

    // Iterate over array
    for (let i = startIndex; i < len; i++) {
      if (i in arr) {
        accumulator = callback(accumulator, arr[i], i, arr);
      }
    }
    return accumulator;
  };
}

const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

const product = nums.myReduce((acc, curr) => acc * curr, 1);
console.log(product); // 24