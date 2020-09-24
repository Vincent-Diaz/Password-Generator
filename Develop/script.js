// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = Math.floor(Math.random() * 10) + 1;
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "/", "<", ">", "~", "?", "."];
var upperCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowerCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Inputs
var confirmLength = "";
var confirmNumericCharacter;
var confirmSpecialCharacter;
var confirmUppercase;
var confirmLowercase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt for user to enter how many characters in the password
function generatePassword() {
  var confirmLength = prompt("How many characters would you like your password to contain? Choose between 8 and 128 characters.");
  // Loop if users input is incorrect
   while (confirmLength < 8 || confirmLength > 128){
     alert("Password must be between 8 and 128 characters in legnth.");
     confirmLength = prompt("How many characters would you like your password to contain? Choose between 8 and 128 characters.");
   } 

    // User character selections
     confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters.");
     confirmSpecialCharacter = confirm("Click OK if you would like to include special characters.");
     confirmUppercase = confirm("Click OK if you would like to include upper case characters.");
     confirmLowercase = confirm("Click OK if you would like to include lower case characters.");
}



