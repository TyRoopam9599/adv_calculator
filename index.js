/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts the second number from the first number.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of subtracting b from a.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers and returns the result.
 *
 * @param {number} a - The first number to multiply.
 * @param {number} b - The second number to multiply.
 * @returns {number} The product of the two numbers.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides two numbers and returns the result.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor. Must not be zero.
 * @returns {number} The result of the division.
 * @throws {Error} Throws an error if the divisor is zero.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
