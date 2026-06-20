let name = {
  firstname: "Akshay",
  lastname: "Saini",
  printFullName: function() {
    console.log(this.firstname+" "+this.lastname);
  }
}
name.printFullName();

let name2 = {
  firstname: ""
}
