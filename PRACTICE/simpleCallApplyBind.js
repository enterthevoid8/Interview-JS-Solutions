const obj = { name: "Lalit" }
function func(greet1, greet2) {
  console.log(greet1+" "+ this.name +" "+ greet2);
}

const callFunc = func.call(obj, "Hello", "How are you?")
const applyFunc = func.apply(obj, ["Hello", "How are you?"])
const bindFunc = func.bind(obj)

console.log(callFunc)
console.log(applyFunc)
console.log(bindFunc("Hello", "How are you?"))