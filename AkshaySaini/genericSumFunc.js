const sum = (...a) => {
  const $sum = (...b) => {
    a = a.concat(b);
    return $sum;
  }
  $sum.valueOf = () => a.reduce((x,y) => x + y, 0);
  return $sum;
};
alert(+sum(1,2)(3)(4,5,6));
