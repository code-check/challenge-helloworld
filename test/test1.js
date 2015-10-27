var assert = require("chai").assert;
var hello  = require("../app/hello.js");
describe("helloWorld", function() {
  it("Hello World!", function() {
    assert.equal(hello("World"), "Hello World!");
  });
  it("Hello codecheck!", function() {
    assert.equal(hello("codecheck"), "Hello codecheck!");
  });
});
