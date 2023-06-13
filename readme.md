# Decoder Functions: Caesar Shift, Polybius and Substitution
This project was done for Thinkful and to test our abilities to use Chai and tests to use the functions for these deciphering codes. 

## 1.Caesar Shift
![Image showing Ceasar Cipher](/Images/caesar-shift.png)
In this code we explore how we can decipher a message from shifting the start of the letters to be given a different value. As you can see from this image this is what it is trying to accomplish. 
Below is how the code is put to use

Caesar Shift (Substitution Cipher) - 
A Caesar Shift cipher is a type of mono-alphabetic substitution cipher where each letter of the plain text is shifted a fixed number of places down the alphabet. For example, with a shift of 1, letter A would be replaced by letter B, letter B would be replaced by letter C, and so on.

![Image showing Caesar Shift encode](/Images/Screenshot%202023-06-12%20at%204.38.15%20PM.png)

![Image showing Caesar Shift decode](/Images/Screenshot%202023-06-12%20at%204.38.58%20PM%20copy.png)
As you can see the message can either be coded or decoded and the shift number aids in how many letters over (right or left) to reveal the secret message. This function was done to mimic Julius Ceasar cipher.

## 2. Polybius
![Image showing Polybius](/Images/poolybiusSQ.jpeg)

The Polybius cipher , also called Polybius square , is a substitution cipher using a square grid. Each character of the plain message is replaced by a couple of coordinates defining its position in the grid.


![Image showing Polybius on web](/Images/Screenshot%202023-06-12%20at%204.40.29%20PM.png)
Here is a deciphering system that decodes and encodes by asigning each letter a 2 digit value. 
Below you can see it being utilized on the web.

![2nd Image showing Polybius on web](/Images/Screenshot%202023-06-12%20at%204.40.44%20PM.png)

## 3. Substitution
![image of substitution](/Images/substitute-cipher.png)

Simple substitution ciphers work by replacing each plaintext character by another one character. To decode ciphertext letters, one should use a reverse substitution and change the letters back. Before using a substitution cipher, one should choose substitutions that will be used for changing all alphabet letters.

![Image of Substitution being used](/Images/Screenshot%202023-06-12%20at%205.12.22%20PM.png)

Out of all the deciphering codes this one was the trickiest to understand and write for in my opinion. To better explain this code allows the user to write a message and provide the alphabet key too be any order desired. This function then encodes or decodes accordingly. 
