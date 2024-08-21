# Arithmetic Functions Module

A simple Node.js module providing basic arithmetic functions: addition, subtraction, multiplication, and division. This module is designed for educational purposes to demonstrate how to write and test JavaScript functions.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

## Overview

This module includes the following arithmetic functions:
- `add(a, b)`: Returns the sum of `a` and `b`.
- `subtract(a, b)`: Returns the difference when `b` is subtracted from `a`.
- `multiply(a, b)`: Returns the product of `a` and `b`.
- `divide(a, b)`: Returns the quotient when `a` is divided by `b`. Throws an error if `b` is zero.

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
const { add, subtract, multiply, divide } = require('./index');

console.log(add(2, 3));         // Output: 5
console.log(subtract(5, 2));    // Output: 3
console.log(multiply(2, 3));    // Output: 6
console.log(divide(6, 2));      // Output: 3

// Handle division by zero
try {
  console.log(divide(6, 0));
} catch (error) {
  console.error(error.message); // Output: Cannot divide by zero
}
