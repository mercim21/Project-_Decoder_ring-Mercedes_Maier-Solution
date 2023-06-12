
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("should return the decoded message depending on the given shift value", () => {
        const actual = caesarModule.caesar("xjhwjy nsktwrfynts", 5, false);
    const expected = "secret information"; 
        expect(actual).to.eql(expected);
  });
  it("should return the encoded message depending on the given shift value", () => {
        const actual = caesarModule.caesar("Secret Information!", 5);
    const expected = "xjhwjy nsktwrfynts!";
    expect(actual).to.eql(expected);
  });
   it("should leave spaces as is", () => {
        const actual = caesarModule.caesar("abc !", 5);
        const expected = " "
        expect(actual.charAt(3)).to.equal(expected);
    });
    it("should leave special characters as is", () => {
        const actual = caesarModule.caesar("abc !", 5);
        const expected = "!"
        expect(actual.charAt(4)).to.equal(expected);
    });
    it("should wrap characters around when going over 'z'", () => {
        const actual = caesarModule.caesar("Love", 6);
      const expected = "rubk";
        expect(actual).to.equal(expected);
    });
  it("should ignore capitalization of letters", () => {
    const actual = caesarModule.caesar("Amore", 7);
    const expected = "htvyl";
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift parameter is not present", () => {
    const actual = caesarModule.caesar("thinkful");
    expect(actual).to.be.false;
it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("Secret Information!", 56);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("Secret Information!", -75);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is 0", () => {
        const actual = caesarModule.caesar("Secret Information!", 0);
        expect(actual).to.be.false; 
    });
  });
});