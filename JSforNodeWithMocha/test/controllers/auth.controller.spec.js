var assert = require("assert");
var authController = require("../controllers/auth.controller");

describe("AuthController", function() {
  describe("isAuthorized", function() {
    it("should return false if not authorised", function() {
      assert.equal(false, authController.isAuthorized(["user"], "admin"));
    });
    it("should return true if authorised", function() {
      assert.equal(
        true,
        authController.isAuthorized(["user", "admin"], "admin")
      );
    });
  });

  describe("isAuthorizedAsync", function() {
    it("should return false if not authorised", function(done) {
      authController.isAuthorizedAsync(["user"], "admin", function(isAuth) {
        assert.equal(false, isAuth);
        done();
      });
    });
  });
});
