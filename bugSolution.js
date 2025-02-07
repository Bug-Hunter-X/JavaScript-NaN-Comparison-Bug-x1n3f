function foo(a, b) {
  // Check if both a and b are NaN using the isNaN function
  return isNaN(a) && isNaN(b);
}

console.log(foo(NaN, NaN)); // true
console.log(foo(NaN, 5)); // false
console.log(foo(5,NaN)); // false
console.log(foo(5, 5)); // false