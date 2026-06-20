function throttle(fn, delay){
	let lastCall = 0;
	
	return function(...args){
		const now = Date.now();
		
		if(now - lastCall >= delay){
			lastCall = now;
			fn.apply(this, args);			
		}
	}
}

const throttledClick = throttle(()=> {console.log("Clicked!")}, 2000);

setTimeout(()=> {
	throttledClick();
}, 2000)

setTimeout(()=> {
	throttledClick();
}, 4000)

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function debounce(fn, delay) {
	let lastCall = 0
	
	return function(...args){
		let now = Date.now();
  
		if(now - lastCall >= delay){
			lastCall = now
			return fn.apply(this, args)
		}
		lastCall = now
	}
}

const debouncedClick = debounce(()=> {console.log("Searched!")}, 2000);

setTimeout(()=> {
	debouncedClick();
}, 2000)

// setTimeout(()=> {
// 	debouncedClick();
// }, 3000)

setTimeout(()=> {
	debouncedClick();
}, 4000)



// debounce alternate solution
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, d);
  }
}

const betterFunction = debounce(getData, 300);