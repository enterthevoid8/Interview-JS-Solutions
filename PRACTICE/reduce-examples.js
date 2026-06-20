//1. Flatten an array

const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // [1, 2, 3, 4, 5]

//2. Count occurrences

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, orange: 1 }


//3. Find max/min value

const numbers = [5, 1, 8, 3, 9];

const max = numbers.reduce((acc, curr) => Math.max(acc, curr));
console.log(max); // 9

const min = numbers.reduce((acc, curr) => Math.min(acc, curr));
console.log(min); // 1


//4. Group items by property

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

const grouped = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  acc[person.age].push(person.name);
  return acc;
}, {});

console.log(grouped);
// { 25: ['Alice', 'Bob'], 30: ['Charlie'] }


//5. Remove duplicates

const nums = [1, 2, 3, 2, 4, 3, 5];

const unique = nums.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(unique); // [1, 2, 3, 4, 5]


//6. Chain Promises

const tasks = [1, 2, 3];

tasks.reduce((promise, task) => {
  return promise.then(() => {
    return new Promise(resolve => {
      console.log("Task", task);
      setTimeout(resolve, 1000);
    });
  });
}, Promise.resolve());

/*
	Use Case				Reduce Implementation
	Sum / Product			arr.reduce((acc, curr) => acc + curr, 0)
	Flatten array			arr.reduce((a, c) => a.concat(c), [])
	Group by key			arr.reduce((a, c) => {...}, {})
	Count items				arr.reduce((a, c) => {...}, {})
	Remove duplicates		arr.reduce((a, c) => {...}, [])
*/