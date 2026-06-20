let sum = function (a) {
  let closureFunc = b =>  b ? sum(a + b) : a;
  closureFunc.toString = () => a;
  return closureFunc;
}
alert(sum(10)(2)(3)(4));

/**

Explantion of this code, 
    1. "sum" function is accepting a number as an argument and returning a function 
        (closureFunc). 
    2. returned function (closureFunc) is calling the "sum" function recursively if we are calling 
        that function with any argument. -> sum(10)(2)(3)(4) -> returning a function
    3. closureFunc will be returning result if you are not calling that with any argument like this 
         -> sum(10)(2)(3)(4)() -> 19
    4. now before returning closureFunc, we are adding "toString" function in closureFunc 
         which is () => a;
    5. when you are using alert function like this, alert(sum(10)(2)(3)(4)), we are getting a 
         function from sum function
           a. sum(10) -> closureFunc with a = 10;
           b. sum(10)(2) -> closureFunc with a = 12;
           c. sum(10)(2)(3) -> closureFunc with a = 15;
           d. sum(10)(2)(3)(4) -> closureFunc with a = 19; returned value is a function
    6. alert will always call arg.toString() and arg in our case is a function (closureFunc) and 
         closureFunc.string = () => a, that means a will be returned in alert box

**/