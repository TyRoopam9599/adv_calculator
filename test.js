const assert = require('assert');
const { add, subtract, multiply, divide } = require('./index');

describe('Arithmetic Functions', function() {
  describe('Add Function', function() {
    it('should return 5 when adding 2 and 3', function() {
      assert.strictEqual(add(2, 3), 5);
    });
  });

  describe('Subtract Function', function() {
    it('should return 1 when subtracting 2 from 3', function() {
      assert.strictEqual(subtract(3, 2), 1);
    });
  });

  describe('Multiply Function', function() {
    it('should return 6 when multiplying 2 and 3', function() {
      assert.strictEqual(multiply(2, 3), 6);
    });
  });

  describe('Divide Function', function() {
    it('should return 3 when dividing 6 by 2', function() {
      assert.strictEqual(divide(6, 2), 3);
    });

    it('should throw an error when dividing by zero', function() {
      assert.throws(() => {
        divide(6, 0);
      }, /Cannot divide by zero/);
    });
  });
});
