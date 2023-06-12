// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const letters ="abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
 if (shift < -25 || shift >25||shift ===0||shift === undefined) return false;//check for invalid input
 const adjustedShift = encode?shift : -shift; //negate shift if we are encoding
 
 let result = "";
for (let i=0; i<input.length;i++){
  const letter = input[i].toLowerCase();
  const letterIndex = letters.indexOf(letter);
  //Index of return -1 if there's no match, so this will pass unrecognized characters through to result without changing it
  if(letterIndex ===-1){
    result +=letter;
    continue; //runs the next iteration of the loop
  }
  let shiftedIndex = (letterIndex + adjustedShift + 26) % 26;
  const shiftedLetter = letters[shiftedIndex];
result += shiftedLetter;
}
return result;
  }

  return { caesar };
})();

module.exports = { caesar: caesarModule.caesar };
