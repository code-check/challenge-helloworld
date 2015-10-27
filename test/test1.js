var assert = require("chai").assert;
var helloWorld  = require("../app/hello.js");
describe("HelloWorld", function() {
  it('helloWorld() == "Hello World!"', function() {
    assert.equal(helloWorld(), "Hello World!");
  });
});
