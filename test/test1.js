var assert = require("chai").assert;
var helloWorld  = require("../app/hello.js");
describe("helloWorld", function() {
  it("Hello World!", function() {
    assert.notOk(helloWorld());
  });
});
