// event listener leak examples

//Case: #1 element removed, listener still exists
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log("Clicked!");
});

// Later
button.remove(); // removed from DOM

// #2 Another subtle leak (closures)
function setup() {
  const bigData = new Array(1000000).fill("data");

  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    console.log(bigData[0]);
  });
}

// Alternate fixes for Case#2
// Fix 1: Use a named handler + remove it later (best general approach)
function setup() {
  const bigData = new Array(1000000).fill("data");
  const button = document.getElementById("btn");

  function handleClick() {
    console.log(bigData[0]);
  }

  button.addEventListener("click", handleClick);

  // cleanup (call this when component/page is destroyed)
  function cleanup() {
    button.removeEventListener("click", handleClick);
  }

  return cleanup;
}

// In frameworks (important)
// In frameworks like React, cleanup is automatic:
useEffect(() => {
  const cleanup = setup();
  return cleanup; // React calls this on unmount
}, []);

// If you want auto cleanup on page unload
const cleanup = setup();
window.addEventListener("beforeunload", cleanup);


// Fix 2: Use { once: true } if it only needs to run once
function setup() {
  const bigData = new Array(1000000).fill("data");
  const button = document.getElementById("btn");

  button.addEventListener(
    "click",
    () => {
      console.log(bigData[0]);
    },
    { once: true }
  );
}

// Fix 3: Don’t capture the large data (best optimization)
// Now the listener does NOT hold bigData at all
function setup() {
  const bigData = new Array(1000000).fill("data");
  const firstValue = bigData[0]; // extract only what's needed

  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    console.log(firstValue);
  });
}

// Fix 4: Nullify reference when done
// Helps GC after usage (but listener still exists)
function setup() {
  let bigData = new Array(1000000).fill("data");
  const button = document.getElementById("btn");

  function handleClick() {
    console.log(bigData[0]);
    bigData = null; // release memory
  }

  button.addEventListener("click", handleClick);
}

