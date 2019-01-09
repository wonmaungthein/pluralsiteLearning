var assert = require("assert");

describe("Basic Mocha Test", function() {
  it("should throw error", function() {
    assert.equal(2, 3);
  });
});

// Another example

describe("Basic Moch test", function() {
  it("Should throw error", function() {
    try {
      assert.equal(2, 3);
    } catch (e) {
      console.log(e);
    }
  });
});

// Another example

describe("Basic Moch test", function() {
  it("Should throw error", function() {
    throw { message: "thrown an error" };
  });
});
