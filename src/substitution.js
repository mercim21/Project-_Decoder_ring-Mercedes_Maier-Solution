// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipher = [];

  function substitution(input, alphabet, encode = true) {
    // Check if the alphabet is valid
    const checkForRepeats = new Set(alphabet);
    if (alphabet === undefined || alphabet.length < 26 || [...checkForRepeats].length < 26)
      return false;

    alphabet.split(""); // This line doesn't do anything

    if (encode) {
      // Encoding mode
      for (let i = 0; i < 26; i++) {
        cipher[standardAlphabet[i]] = alphabet[i];
      }
    } else {
      // Decoding mode
      for (let i = 0; i < 26; i++) {
        cipher[alphabet[i]] = standardAlphabet[i];
      }
    }

    // Convert the input string to lowercase and perform the substitution
    let answer = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter === " ") return " ";
        return cipher[letter];
      });

    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
