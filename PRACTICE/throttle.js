function throttle(func, delay) {
  let lastCall = 0; // timestamp of last execution

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function throttle(func, delay) {
  let lastCall = 0;
  
  return function(...args) {
    const now = new Date().getTime();
    
    if (now - lastCall < delay) {
      return; // Skip this call
    }
    
    lastCall = now;
    return func(...args);
  };
}


function handleScroll() {
  console.log("Scroll event fired at:", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(handleScroll, 2000); // 2 seconds

window.addEventListener("scroll", throttledScroll);

//Sometimes, you want the last call to run after the final burst of events.

function throttleTrailing(func, delay) {
  let timeout = null;
  let lastArgs, lastContext;

  return function (...args) {
    lastArgs = args;
    lastContext = this;

    if (!timeout) {
      func.apply(lastContext, lastArgs);
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  };
}

function onResize() {
  console.log("Resized to:", window.innerWidth, window.innerHeight);
}

const throttledResize = throttle(onResize, 1000);

window.addEventListener("resize", throttledResize);
