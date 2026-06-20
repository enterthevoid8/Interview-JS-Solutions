// Private Field Singleton (Modern ES2022+)

class Singleton {
  static #instance;

  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }

    this.language = "JavaScript";
    Singleton.#instance = this;
  }

  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true


// Strict Singleton (Prevent Direct new Misuse)

class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      throw new Error("Use getInstance()");
    }

    this.language = "JavaScript";
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true

// Basic Singleton (Class-Based)
class Singleton {
  static instance; // shared reference

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; // return existing
    }

    this.language = "JavaScript";
    Singleton.instance = this; // store instance
  }
}

const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2); // true

//Function based Singleton

const Singleton = (function(){
  let instance;
  
  function createInstance(){
    return { language: "JavaScript" };
  }
  
  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance(); // ✅ store it
      }
      return instance;
    }
  };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // ✅ true