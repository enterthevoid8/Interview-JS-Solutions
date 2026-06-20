if(!Array.prototype.myReduce){
  Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
    for(i=startIndex;i<this.length;i++){
      accumulator = callback(accumulator,this[i],i,this)
    }
    return accumulator;
  }
}

if(!Array.prototype.myFilter) {
  Array.prototype.myFilter = function(callback) {
    const result = [];
    for(let i=0; i<this.length; i++){
      if(callback(this[i],i,this)){
        result.push(this[i])
      }
    }
    return result;
  }
}

if(!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback) {
    const result = [];
    for(let i=0;i<this.length;i++){
      result.push(callback(this[i],i,this))
    }
    return result;
  }
}


const nums = [2,3,4,5]
const final = nums.myReduce((acc, curr) => acc+curr)
console.log(final);
