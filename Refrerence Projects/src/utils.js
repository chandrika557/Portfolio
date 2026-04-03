function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}
// Only one default export
export {greet, add as default};