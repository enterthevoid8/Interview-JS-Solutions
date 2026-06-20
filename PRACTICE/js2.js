// for..of for..in

	let arr = ["a", "b", "c"];

	arr.newProp = "newVlue";

	// key are the property keys
	for (let key in arr) {
	  console.log(key); // 0, 1, 2, newProp
	}

	// value are the property values
	for (let value of arr) {
	  console.log(value); // a, b, c
	}

//expressions in switch case
	let age = 18
	
	switch(true){
		case age >= 18:
			console.log("You can vote!")
		case age < 18:
			console.log("You cannot vote!")
	}

	(function(temp){
	  switch(true){
		case temp>30:
		  console.log("hot");
		  break;
		case temp<30:
		  console.log("cool");
		  break;
		case temp==30:
		  console.log("moderate");
		  break;
	  }
	})(29)

//ignore errors
	function example1(){
		fetch("someURL").catch(()=>{})
	}

	.catch((e)=> void e)
	try {} catch(e) {}
	void fetch("url"); //ignore success/error
	
	//best practice -> selective ignore
	} catch (e) { if (e.name === "AbortError") { console.log("Ignored AbortError"); } else { throw e; // important errors rethrown } }


//nullish coallescing
	console.log(null ?? true); // true
	console.log(false ?? true); // false
	console.log(undefined ?? true); // true

//console.table

	const users = [
	  { name: "Lalit", age: 25, role: "Developer" },
	  { name: "Rahul", age: 28, role: "Tester" },
	  { name: "Amit", age: 30, role: "Manager" }
	];

	console.table(users);
	
	const data = [
	  ["Lalit", 25],
	  ["Rahul", 28]
	];

	console.table(data);

//console.group
	console.group("User Details");
	console.log("name: Sudheer Jonna");
	console.log("job: Software Developer");

	// Nested Group
	console.group("Address");
	console.log("Street: Commonwealth");
	console.log("City: Los Angeles");
	console.log("State: California");

	// Close nested group
	console.groupEnd();

	// Close outer group
	console.groupEnd();

//order of execution -> process.nextTick > Promise (microtask) > setImmediate ≈ setTimeout
	console.log("Start");

	setTimeout(() => {
	  console.log("setTimeout");
	}, 0);

	setImmediate(() => {
	  console.log("setImmediate");
	});

	process.nextTick(() => {
	  console.log("nextTick");
	});

	console.log("End");

//dense array (regular - all elements at all indices)
	const avengers = ["Ironman", "Hulk", "CaptainAmerica"];
	console.log(avengers[0]); // 'Ironman'
	console.log(avengers[1]); // 'Hulk'
	console.log(avengers[2]); // 'CaptainAmerica'
	console.log(avengers.length); // 3

//sparse  arrays
	const sparse1 = [2,3,4,,5]
	console.log(sparse1)

	const sparse2 = Array(3)
	console.log(sparse2)

	delete sparse1[1]
	console.log(sparse1)

	sparse1.length=6
	console.log(sparse1)

	console.log(sparse1)

//array original array modifying & not modifying
//reverse array without modifying original

	const arr = [2,4,6,7]
	// const newArr = arr.reverse();

	const newArr2 = arr.slice().reverse();

	const newArr3 = arr.reduce((acc, val)=> {
	  return [val, ...acc]
	},[])

	const newArr4 = arr.reduceRight((acc, val)=> {
	  return [...acc, val]
	},[])

	const newArr5 = arr.reduceRight((acc, val)=> {
	  acc.push(val)
	  return acc
	},[])

	console.log(arr)
	// console.log(newArr)
	console.log(newArr2)
	console.log(newArr3)
	console.log(newArr4)
	console.log(newArr5)


	slice, spread
	splice, concat, reverse, sort, push, pop, shift, unshift



class CustomElement extends HTMLElement {
	connectedCallback(){
		this.innerHTML = "something"
	}
}

customElements.define("custom-element", CustomeElement);

