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

/**
 * Calculate the result of a number raised to the power of an exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} The result of base raised to the power of exponent.
 */
function exponential(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the modulus (remainder) of two numbers.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The remainder after dividing `a` by `b`.
 */
function modulus(a, b) {
    return a % b;
}

/**
 * Performs a bitwise AND operation on two integers.
 *
 * @param {number} a - The first integer.
 * @param {number} b - The second integer.
 * @returns {number} The result of the bitwise AND operation.
 */
function bitwiseAnd(a, b) {
    return a & b;
}

function bitwiseOr(a, b){
    return a | b ;
}

function bitwiseXor(a, b){
    return a ^ b ;
}

/**
 * Performs a bitwise NOT operation on the given integer.
 *
 * @param {number} a - The integer to perform the bitwise NOT operation on.
 * @returns {number} The result of the bitwise NOT operation.
 */
function bitwiseNot(a) {
    return ~a;
}

/**
 * Performs a left bitwise shift on the first operand by the number of bits specified by the second operand.
 *
 * @param {number} a - The number to be shifted.
 * @param {number} b - The number of bits to shift `a` to the left.
 * @returns {number} The result of shifting `a` to the left by `b` bits.
 */
function leftShift(a, b) {
    return a << b;
}

function rightShift(a, b){
    return a >> b ;
}

/**
 * Performs a zero-fill right shift on a given number.
 *
 * This function shifts the bits of the first argument to the right by the number of positions specified
 * by the second argument, filling the leftmost bits with zeros.
 *
 * @param {number} a - The number to be shifted.
 * @param {number} b - The number of positions to shift.
 * @returns {number} - The result of the zero-fill right shift operation.
 */
function zeroFillRightShift(a, b) {
    return a >>> b;
}

/**
 * Calculates the square root of a number.
 *
 * @param {number} a - The number to find the square root of.
 * @returns {number} The square root of the number.
 */
function squareRoot(a) {
    return Math.sqrt(a);
}

/**
 * Calculates the absolute value of a number.
 *
 * @param {number} a - The number to find the absolute value of.
 * @returns {number} The absolute value of the number.
 */
function absolute(a) {
    return Math.abs(a);
}

/**
 * Calculates the factorial of a number.
 *
 * @param {number} n - The number to find the factorial of.
 * @returns {number} The factorial of the number.
 */
function factorial(n) {
    if (n < 0) return -1;
    else if (n === 0) return 1;
    else {
        return (n * factorial(n - 1));
    }
}
module.exports = {
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
    factorial
};
