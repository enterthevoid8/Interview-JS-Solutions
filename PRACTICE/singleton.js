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

class Singleton {
  constructor() {
    // if an instance already exists, return it
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // otherwise, create one and store reference
    this.name = "Lalit’s Singleton Instance";
    Singleton.instance = this;
  }

  getName() {
    return this.name;
  }
}

// Usage
const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2); // ✅ true (same instance)
console.log(obj1.getName()); // "Lalit’s Singleton Instance"


const Singleton = (function () {
  let instance;

  function createInstance() {
    return { name: "Functional Singleton", createdAt: new Date() };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b); // ✅ true
console.log(a); // { name: 'Functional Singleton', createdAt: ... }

const Singleton = (function () {
  let instance;

  function createInstance() {
    return { name: "Functional Singleton", createdAt: new Date() };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b); // ✅ true
console.log(a); // { name: 'Functional Singleton', createdAt: ... }
