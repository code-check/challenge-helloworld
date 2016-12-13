"use strict";
const assert = require("chai").assert;
const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);

describe("helloWorld", function() {
  it("Hello World!", function() {
    return app.run("World").spread(function(code, stdOut){
      assert.equal(code, 0);
      assert.equal(stdOut.length, 1);
      assert.equal(stdOut[0], "Hello World!");
    });
  });

  it("Hello codecheck!", function() {
    return app.run("codecheck").spread(function(code, stdOut){
      assert.equal(code, 0);
      assert.equal(stdOut.length, 1);
      assert.equal(stdOut[0], "Hello codecheck!");
    });
  });
});
