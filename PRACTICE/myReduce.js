if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}
const nums = [2,3,4,5]
const final = nums.myReduce((acc, curr) => acc+curr)
console.log(final);