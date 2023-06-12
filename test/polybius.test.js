// Write your tests here!
const { expect } = require("chai");
const  polybiusModule  = require("../src/polybius");

describe ("polybius", () => {
    it ("should translate a message by encoding each letter to two numbers", ()=> {
     const actual = polybiusModule.polybius("Cipher");
     const expected = "314253325124";
     expect(actual).to.equal(expected);  
    });

    it("should ignore capital letters",() =>{
        const actual = polybiusModule.polybius("Lovely Day");
        const expected = "134315511345 411145";
        expect(actual).to.equal(expected);
    });
    it ("should decode 42 to i/j", ()=> {
        const actual = polybiusModule.polybius("314253325124", false);
        const expected = "c(i/j)pher";
        expect(actual).to.equal(expected);
    });
    it ("should encode i/j to 42", ()=> {
        const actual = polybiusModule.polybius("cipher");
        const expected = "314253325124";
        expect(actual).to.equal(expected);
    });
    it("spaces will remain while encoding",()=>{
        const actual = polybiusModule.polybius("Lovely Day");
        const expected = "134315511345 411145";
        expect(actual).to.equal(expected);
    });
    it("spaces will remain while decoding",()=>{
        const actual = polybiusModule.polybius("134315511345 411145",false);
        const expected = "lovely day";
        expect(actual).to.equal(expected);
    });
it("if number amount of letters is not even it should return false", ()=> {
    const actual = polybiusModule.polybius("13431551134",false);
    expect(actual).to.be.false;
});
  
});