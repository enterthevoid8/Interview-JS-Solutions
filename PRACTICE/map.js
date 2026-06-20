//simplest core functionality

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}

// with error checks, thisArgs etc.

if(!Array.prototype.myMap) {
	Array.prototype.myMap = function(callback, thisArg) {
		console.log("callback: ",callback);
		console.log("thisArg: ",thisArg);
		if(this == null) {
			throw new TypeError("called on null or undefined")
		}
		
		if(typeof callback !== "function") {
			throw new TypeError("callback is not a function")
		}
		
		const temp = []
		for(let i=0;i<this.length;i++){
			if(i in this) {
				temp[i] = callback.call(this.Arg, this[i], i, this);
			}
		}
		return temp;
	};
}

// without using thisArgs

const numbers = [1, 2, 3, 4];
const squares = numbers.myMap(num => num * num);
console.log(squares);

// with thisArgs

const obj = { multiplier: 10 };
const numbers = [1, 2, 3];

const result = numbers.myMap(function(num) {
  console.log(this);
  return num * this.multiplier;
}, obj);

console.log(result);


//2 simplified, removed thisArgs

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback) {
    if (this == null) {
      throw new TypeError("Array.prototype.map called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    const result = [];
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      if (i in arr) {
        result[i] = callback.call(arr[i], i, arr);
      }
    }
    return result;
  };
}

const numbers = [1, 2, 3, 4];
const squares = numbers.myMap(num => num * num);
console.log(squares);