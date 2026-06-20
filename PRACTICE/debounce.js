function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


//resize
function onResize() {
  console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);
}

const debouncedResize = debounce(onResize, 1000);

window.addEventListener("resize", debouncedResize);


//search
function handleSearchInput(event) {
  console.log("Searching for:", event.target.value);
}

const debouncedSearch = debounce(handleSearchInput, 800); // 800ms delay

document.getElementById("searchBox").addEventListener("input", debouncedSearch);
