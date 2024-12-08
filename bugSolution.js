function foo(a, b) {
  a = a === null ? 0 : a; // Provide a default value if a is null
  b = b === null ? 0 : b; // Provide a default value if b is null
  // ... perform operations on a and b ...
  return a + b; // Example of a safe operation
}