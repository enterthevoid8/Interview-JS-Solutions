//simple
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const nums = [5, 10, 15];
const filtered = nums.myFilter(n => n > 7);
console.log(filtered);

//standard

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.filter called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const result = [];
    const arr = Object(this); // convert to object in case it's not a true array
    const len = arr.length >>> 0; // Ensure length is a positive integer

    for (let i = 0; i < len; i++) {
      if (i in arr) { // skip holes in sparse arrays
        const value = arr[i];
        if (callback.call(thisArg, value, i, arr)) {
          result.push(value);
        }
      }
    }
    return result;
  };
}

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.myFilter(function(num) {
  return num % 2 === 0;
});
console.log(evens);