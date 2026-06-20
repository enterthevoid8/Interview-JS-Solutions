//shallow vs deep copy

const nestedObj = {
  name: "John",
  address: {
    city: "Jaipur",
    state: "Rajasthan",
    full_address: {
      level_one: {
        level_two: {
          level_three: {
            appt_no: "1234",
            street: "mg road",
            pin: 304050
          }
        }
      }
    }
  },
}

let shallow1 = nestedObj
let shallow2 = Object.assign({}, nestedObj)
let deep1 = structuredClone(nestedObj)
let deep2 = JSON.parse(JSON.stringify(nestedObj))

console.log(JSON.stringify(deep2,null,2))
console.dir(deep2, { depth: null });
// console.log(shallow1)
// console.log(shallow2)
// console.log(deep1)
// console.log(deep2)

nestedObj.address.full_address.level_one.level_two.level_three.appt_no = "9999";

console.log(shallow1.address.full_address.level_one.level_two.level_three.appt_no); // 9999
console.log(shallow2.address.full_address.level_one.level_two.level_three.appt_no); // 9999
console.log(deep1.address.full_address.level_one.level_two.level_three.appt_no);    // 1234
console.log(deep2.address.full_address.level_one.level_two.level_three.appt_no);    // 1234

//remove event listener, prevent memory leak

//e.g.1

const button = document.getElementById("btn");

const handleClick = () => {
  console.log("Clicked!");
  button.removeEventListener("click", handleClick);
};

button.addEventListener("click", handleClick);

//e.g.2

const button = document.getElementById("btn");

const handleClick = () => {
  console.log("Clicked!");
};

button.addEventListener("click", handleClick, {once: true});

//bubble vs capture

document.getElementById("parent").addEventListener("click", ()=> console.log("parent bubble"))
document.getElementById("child").addEventListener("click", ()=> console.log("child bubble"))

document.getElementById("parent").addEventListener("click", ()=> console.log("parent capture"),true)
document.getElementById("child").addEventListener("click", ()=> console.log("child capture"),true)


//without Event delegation
document.querySelectorAll(".item").forEach(item=> {
  item.addEventListener("click", () => {
    console.log("clicked")
  });
});

//With delegation
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    console.log("Item clicked:", e.target.textContent);
  }
});

const menu = document.getElementById("menu");
menu.addEventListener("click", function (event) {
if (event.target.tagName === "LI") {
  console.log("You clicked:", event.target.textContent);
  console.log(event.target);        // actual clicked element
  console.log(event.currentTarget); // element where listener is attached
}
});

//shadowing
let a = 10;

function func() {
  let a = 20; // Shadows the outer 'a'
  console.log(a); // 20
}

func();
console.log(a); // 10

//illegal shadowing

function test() {
  var a = 10;
  let a = 20; // SyntaxError: Identifier 'a' has already been declared
}

let a = 10;
{
  var a = 20; // SyntaxError: Identifier 'a' has already been declared
  console.log(a);
}