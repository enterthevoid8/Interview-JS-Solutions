function throttle(fn, delay){
	let lastCall = 0;
	
	return function(...args) {
		const now = Date.now()
		if(now-lastCall>=delay){
			lastCall = now
			fn.apply(this, args)
		}
	}
}

const throttledFn = throttle(()=> console.log("Clicked!"),2000)
setInterval(()=> {return throttledFn()}, 1000)


function debounce(fn, delay) {
	let timer;
	
	return function(...args) {
		clearTimeout(timer);
		
		timer = setTimeout(()=> {
			fn.apply(this, args)
		}, delay)
	}
}

let debouncedFn = debounce(()=>console.log("Clicked"), 2000)
setTimeout(()=> debouncedFn(), 0)
setTimeout(()=> debouncedFn(), 2100)
setTimeout(()=> debouncedFn(), 3000)
setTimeout(()=> debouncedFn(), 4100)