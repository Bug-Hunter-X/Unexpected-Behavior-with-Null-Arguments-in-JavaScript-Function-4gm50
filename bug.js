function foo(a, b) {
  if (a === null || b === null) {
    return null; // this will cause unexpected behavior
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10