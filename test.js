const assert = require('assert');
const { add, subtract, multiply, divide, squareRoot, absolute, factorial, gcd, lcm } = require('./index');

/**
 * Test suite for arithmetic functions.
 */
describe('Arithmetic Functions', function() {
  /**
   * Test suite for the add function.
   */
  describe('Add Function', function() {
    /**
     * Test case to validate the add function.
     */
    it('should return 5 when adding 2 and 3', function() {
      assert.strictEqual(add(2, 3), 5);
    });
  });

  /**
   * Test suite for the subtract function.
   */
  describe('Subtract Function', function() {
    /**
     * Test case to validate the subtract function.
     */
    it('should return 1 when subtracting 2 from 3', function() {
      assert.strictEqual(subtract(3, 2), 1);
    });
  });

  /**
   * Test suite for the multiply function.
   */
  describe('Multiply Function', function() {
    /**
     * Test case to validate the multiply function.
     */
    it('should return 6 when multiplying 2 and 3', function() {
      assert.strictEqual(multiply(2, 3), 6);
    });
  });

  /**
   * Test suite for the divide function.
   */
  describe('Divide Function', function() {
    /**
     * Test case to validate the divide function with valid inputs.
     */
    it('should return 3 when dividing 6 by 2', function() {
      assert.strictEqual(divide(6, 2), 3);
    });

    /**
     * Test case to validate that divide function throws an error when dividing by zero.
     */
    it('should throw an error when dividing by zero', function() {
      assert.throws(() => {
        divide(6, 0);
      }, /Cannot divide by zero/);
    });
  });

  
  /**
   * Test suite for the squareRoot function.
   */
  describe('SquareRoot Function', function() {
    it('should return 3 when finding the square root of 9', function() {
      assert.strictEqual(squareRoot(9), 3);
    });
  });

  /**
   * Test suite for the absolute function.
   */
  describe('Absolute Function', function() {
    it('should return 5 when finding the absolute value of -5', function() {
      assert.strictEqual(absolute(-5), 5);
    });
  });

  /**
   * Test suite for the factorial function.
   */
  describe('Factorial Function', function() {
    it('should return 120 when finding the factorial of 5', function() {
      assert.strictEqual(factorial(5), 120);
    });
  });

  /**
   * Test suite for the gcd function.
   */
  describe('GCD Function', function() {
    it('should return 6 when finding the GCD of 54 and 24', function() {
      assert.strictEqual(gcd(54, 24), 6);
    });

    it('should return 1 when finding the GCD of 17 and 13', function() {
      assert.strictEqual(gcd(17, 13), 1);
    });
  });

  /**
   * Test suite for the lcm function.
   */
  describe('LCM Function', function() {
    it('should return 72 when finding the LCM of 24 and 18', function() {
      assert.strictEqual(lcm(24, 18), 72);
    });

    it('should return 221 when finding the LCM of 13 and 17', function() {
      assert.strictEqual(lcm(13, 17), 221);
    });
  });
});
