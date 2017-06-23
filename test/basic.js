"use strict";

const expect = require("chai").expect;
const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);

describe("CLIアプリは", () => {
  it("'World'が与えられた場合に'Hello World!'と出力できる。", () => {
  	return app.codecheck("World").then( result =>  {
      expect(result.code).to.equal(0, "expect codecheck CLI to exit with status code 0");
      expect(result.stdout.join("")).to.equal("Hello World!");
  	})
  });

  it("ゼロ長の文字列を与えられた場合に'Hello!'と出力できる。", () => {
  	return app.codecheck("").then( result =>  {
      expect(result.code).to.equal(0, "expect codecheck CLI to exit with status code 0");
      expect(result.stdout.join("")).to.equal("Hello!");
  	})
  });

  it("'codecheck'が与えられた場合に'Hello codecheck!'と出力できる。", () => {
  	return app.codecheck("codecheck").then( result =>  {
      expect(result.code).to.equal(0, "expect codecheck CLI to exit with status code 0");
      expect(result.stdout.join("")).to.equal("Hello codecheck!");
  	})
  });

  it("'織田信長'が与えられた場合に'Hello 織田信長!'と出力できる。", () => {
  	return app.codecheck("織田信長").then( result =>  {
      expect(result.code).to.equal(0, "expect codecheck CLI to exit with status code 0");
      expect(result.stdout.join("")).to.equal("Hello 織田信長!");
  	})
  });

});
