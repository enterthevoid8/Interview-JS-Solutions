let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(3)(4)());