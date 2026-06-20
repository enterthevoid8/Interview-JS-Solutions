let sum = function (a) {
  let closureFunc = (...a) => {
    const $sum = (...b) => {
      a = a.concat(b);
      return $sum;
    }
    $sum.valueOf = () => a.reduce((x,y) => x + y, 0);
    return $sum;
  };
  closureFunc.toString = () => a;
  return closureFunc;
}

alert(sum(10)(2)(3)(4));