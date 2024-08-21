const assert = require('assert');
const { add, subtract, multiply, divide } = require('./index');

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
});
