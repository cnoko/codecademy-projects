var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate factorial', () => {
  it('returns 120 when you pass in 5', () => {
      const expectedResult = 120;
      const input = 5;

      const result = Calculate.factorial(input);

      assert.equal(result, expectedResult);
  });
    it('returns 6 when you pass in 3', () => {
      const expectedResult = 6;
      const input = 3;

      const result = Calculate.factorial(input);

      assert.equal(result, expectedResult);
  });

  it("returns 1 when you pass in 0.", () => {
      const expectedResult = 1;
      const input = 0;

      const result = Calculate.factorial(input);

      assert.equal(result, expectedResult);
  });
});