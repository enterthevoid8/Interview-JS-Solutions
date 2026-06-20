// using object
function memoize(fn) {
	const cache = {};
	
	return function(...args){
		const key = JSON.stringify(args)
		if(cache[key]){
			console.log("returned from cache: ", key)
			return cache[key];
		}
		console.log("calculate result for: ", key)
		return cache[key] = fn(...args)
	};
}

function memoize(fn) {
  const cache = Object.create(null);

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}

function slowFactorial(n){
	if(n<=1) return 1;
	return n * slowFactorial(n-1);
}

function add(...args) {
  return args.reduce((sum, num) => sum + num, 0);
}

const fastFactorial = memoize(slowFactorial);
console.log(fastFactorial(5));
console.log(fastFactorial(5));
console.log(fastFactorial(6));

const memoizeAdd = memoize(add)
console.log(memoizeAdd(add(3,4,5,5,6)))
console.log(memoizeAdd(add(3,4,5,5,6)))
console.log(memoizeAdd(add(3,4,5)))


// implemenation using map
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}

function memoizeOneArg(fn) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const result = fn.call(this, arg);
    cache.set(arg, result);

    return result;
  };
}