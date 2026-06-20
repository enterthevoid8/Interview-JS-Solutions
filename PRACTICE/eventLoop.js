console.log("1 Sync");

setTimeout(() => {
  console.log("5 setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3 Promise");
});

queueMicrotask(() => {
  console.log("4 queueMicrotask");
});

requestAnimationFrame(() => {
  console.log("requestAnimationFrame");
});

console.log("2 Sync");