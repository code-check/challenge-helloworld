"use strict";

const expect = require("chai").expect;
const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);

describe("CLI App", () => {
  it("outputs 'Hello World!' when given 'World' as an argument", () => {
  	return app.codecheck("World").then( result =>  {
      expect(result.code).to.equal(0, "expected codecheck CLI to exit with status code 0");
      expect(result.stdout.join("")).to.equal("Hello World!");
  	})
  });

  it("outputs 'Hello codecheck!' when given 'codecheck' as an argument.", () => {
  	return app.codecheck("codecheck").then( result =>  {
      expect(result.code).to.equal(0, "expected codecheck CLI to exit with status code 0");
      expect(result.stdout.join("")).to.equal("Hello codecheck!");
  	})
  });

  it("outputs 'Hello 織田信長!' when given '織田信長' as an argument.", () => {
  	return app.codecheck("織田信長").then( result =>  {
      expect(result.code).to.equal(0, "expected codecheck CLI to exit with status code 0");
      expect(result.stdout.join("")).to.equal("Hello 織田信長!");
  	})
  });

});
