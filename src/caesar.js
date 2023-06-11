// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const letters ="abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
 if (shift < -25 || shift >25||shift ===0||shift === undefined) return false;
 const adjustedShift = encode?shift : -shift;
 
 let result = "";
for (let i=0; i<input.length;i++){
  const letter = input[i].toLowerCase();
  const letterIndex = letters.indexOf(letter);
  if(letterIndex ===-1){
    result +=letter;
    continue;
  }
  let shiftIndex = (letterIndex + adjustedShift + 26) % 26;
  const shiftedLetter = letters[shiftedIndex];

}
return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
