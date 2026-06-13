// 1. Object literal
var object = {
    name: "Lalit",
    age: 30
};

// 2. Object constructor
var object = new Object();
var object = Object();

// 3. Object create method

var object = Object.create(null);

let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
  }
  let carProps = {
    type: {
      value: 'Volkswagen'
    },
    model: {
      value: 'Golf'
    }
  }
  
  var car = Object.create(vehicle, carProps);
  console.log(car);

// 4. Function Constructor
function Person(name) {
    this.name = name;
    this.age = 21;
  }
  var object = new Person("Lalit");

// 5. Function constructor with prototype:

function Person() {}
Person.prototype.name = "Lalit";
var object = new Person();

//equivalent to
function func() {}

new func(x, y, z);

//OR

// 5. Create a new instance using function prototype.
var newInstance = Object.create(func.prototype)

// Call the function
var result = func.call(newInstance, x, y, z)

// If the result is a non-null object then use it otherwise just use the new instance.
console.log(result && typeof result === 'object' ? result : newInstance);

// 6. Object's assign method:

const orgObject = { company: 'XYZ Corp'};
const carObject = { name: 'Toyota'};
const staff = Object.assign({}, orgObject, carObject);

// 7. ES6 Class syntax

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  var object = new Person("Lalit");

// 8. Singleton Pattern
class Person {
  constructor(name) {
    // Return existing instance if already created
    if (Person.instance) {
      return Person.instance;
    }

    // Otherwise create new instance
    this.name = name;
    Person.instance = this;
  }
}

const a = new Person("Lalit");
const b = new Person("Karuna");

console.log(a === b); // ✅ true
console.log(a.name);  // "Lalit"
console.log(b.name);  // still "Lalit" (singleton preserves first)