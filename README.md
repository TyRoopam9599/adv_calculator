# Arithmetic Functions Module

A Node.js module providing basic arithmetic functions: addition, subtraction, multiplication, and division. This module is designed for educational purposes to demonstrate how to write and test JavaScript functions.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

## Overview

This module includes the following functions:

### Arithmetic Functions
- `add(a, b)`: Returns the sum of `a` and `b`.
- `subtract(a, b)`: Returns the difference when `b` is subtracted from `a`.
- `multiply(a, b)`: Returns the product of `a` and `b`.
- `divide(a, b)`: Returns the quotient when `a` is divided by `b`. Throws an error if `b` is zero.
- `exponential(base, exponent)`: Returns the result of `base` raised to the power of `exponent`.
- `modulus(a, b)`: Returns the remainder when `a` is divided by `b`.
- `squareRoot(a)`: Returns the square root of `a`.
- `absolute(a)`: Returns the absolute value of `a`.
- `factorial(n)`: Returns the factorial of `n`.
- `gcd(a, b)`: Returns the greatest common divisor of `a` and `b`.
- `lcm(a, b)`: Returns the lowest common multiple of `a` and `b`.


### Bitwise Functions
- `bitwiseAnd(a, b)`: Performs a bitwise AND operation on `a` and `b`.
- `bitwiseOr(a, b)`: Performs a bitwise OR operation on `a` and `b`.
- `bitwiseXor(a, b)`: Performs a bitwise XOR operation on `a` and `b`.
- `bitwiseNot(a)`: Performs a bitwise NOT operation on `a`.
- `leftShift(a, b)`: Performs a left bitwise shift on `a` by `b` bits.
- `rightShift(a, b)`: Performs a right bitwise shift on `a` by `b` bits.
- `zeroFillRightShift(a, b)`: Performs a zero-fill right shift on `a` by `b` bits.

### Additional Functions
- `cubeRoot(a)`: Returns the cube root of `a`.
- `logarithm(a)`: Returns the natural logarithm of `a`.
- `sine(angle)`: Returns the sine of the angle (in radians).
- `cosine(angle)`: Returns the cosine of the angle (in radians).
- `tangent(angle)`: Returns the tangent of the angle (in radians).
- `sinh(x)`: Returns the hyperbolic sine of `x`.
- `cosh(x)`: Returns the hyperbolic cosine of `x`.
- `tanh(x)`: Returns the hyperbolic tangent of `x`.
- `asin(x)`: Returns the arcsine of `x`.
- `acos(x)`: Returns the arccosine of `x`.
- `atan(x)`: Returns the arctangent of `x`.

## Installation

To use this module in your project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/TyRoopam9599/adv_calculator.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd adv_calculator
    ```

3. **Install dependencies:**

    This project uses [Mocha](https://mochajs.org/) for testing. Install it along with other dependencies using:

    ```bash
    npm install
    ```

## Usage

You can use the functions by requiring the module in your Node.js application. Here’s how you can do it:

```javascript
const { 
  add, 
  subtract, 
  multiply, 
  divide, 
  exponential, 
  modulus, 
  bitwiseAnd, 
  bitwiseOr, 
  bitwiseXor, 
  bitwiseNot, 
  leftShift, 
  rightShift, 
  zeroFillRightShift, 
  squareRoot, 
  absolute, 
  factorial,
  gcd,
  lcm,
  cubeRoot, 
  logarithm, 
  sine, 
  cosine, 
  tangent,
  sinh,
  cosh,
  tanh,
  asin,
  acos,
  atan
} = require('./index');

console.log(add(2, 3));         // Output: 5
console.log(subtract(5, 2));    // Output: 3
console.log(multiply(2, 3));    // Output: 6
console.log(divide(6, 2));      // Output: 3
console.log(modulus(5, 2));     // Output: 1
console.log(exponential(2, 3)); // Output: 8
console.log(squareRoot(9));     // Output: 3
console.log(absolute(-5));      // Output: 5
console.log(factorial(5));      // Output: 120
console.log(gcd(5,2)) ;         // Output: 1
condole.log(lcm(5,2)) ;         // Output: 10

console.log(bitwiseAnd(5, 3));  // Output: 1
console.log(bitwiseOr(5, 3));   // Output: 7
console.log(bitwiseXor(5, 3));  // Output: 6
console.log(bitwiseNot(5));     // Output: -6
console.log(leftShift(5, 1));   // Output: 10
console.log(rightShift(5, 1));  // Output: 2
console.log(zeroFillRightShift(5, 1)); // Output: 2

console.log(cubeRoot(27));      // Output: 3
console.log(logarithm(Math.E)); // Output: 1
console.log(sine(0));           // Output: 0
console.log(cosine(0));         // Output: 1
console.log(tangent(0));        // Output: 0
console.log(sinh(0));           // Output: 0
console.log(cosh(0));           // Output: 1
console.log(tanh(0));           // Output: 0
console.log(asin(1));           // Output: 1.5707963267948966 (π/2)
console.log(acos(1));           // Output: 0
console.log(atan(1));           // Output: 0.7853981633974483 (π/4)

// Handle division by zero
try {
  console.log(divide(6, 0));
} catch (error) {
  console.error(error.message); // Output: Cannot divide by zero
}
