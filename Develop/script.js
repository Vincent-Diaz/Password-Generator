// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = [Math.floor(Math.random() * 10) + 1];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "/", "<", ">", "~", "?", "."];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Variable Inputs
var confirmLength = "";
var confirmNumericCharacter;
var confirmSpecialCharacter;
var confirmUppercase;
var confirmLowercase;

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
     // Loop if user selects no characters
     while(!confirmNumericCharacter && !confirmSpecialCharacter && !confirmUppercase && !confirmLowercase ){
       alert("You must choose at least one character type.");
       confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters.");
     confirmSpecialCharacter = confirm("Click OK if you would like to include special characters.");
     confirmUppercase = confirm("Click OK if you would like to include upper case characters.");
     confirmLowercase = confirm("Click OK if you would like to include lower case characters.");
     }


     // Assign a character to password
     var groupArray = []
     var password = ""

     // If user selects all 4 character types
     if (confirmNumericCharacter && confirmSpecialCharacter && confirmUppercase && confirmLowercase) {
      groupArray = number.concat(specialChar, upperCase, lowerCase);
     }
     // If user selects 3 character types
     else if (confirmNumericCharacter && confirmSpecialCharacter && confirmUppercase) {
       groupArray = number.concat(specialChar, upperCase);
     }
     
     else if (confirmNumericCharacter && confirmSpecialCharacter && confirmLowercase) {
      groupArray = number.concat(specialChar, lowerCase);
     }

     else if (confirmNumericCharacter && confirmUppercase && confirmLowercase) {
      groupArray = number.concat(upperCase, lowerCase);
     }

     else if (confirmSpecialCharacter && confirmUppercase && confirmLowercase) {
      groupArray = specialChar.concat(upperCase, lowerCase);
     }
     // If user selects 2 character types
     else if (confirmNumericCharacter && confirmSpecialCharacter) {
       groupArray = number.concat(specialChar);
     }

     else if (confirmNumericCharacter && confirmUppercase) {
      groupArray = number.concat(upperCase);
     }

     else if (confirmNumericCharacter && confirmLowercase) {
      groupArray = number.concat(lowerCase);
     }

     else if (confirmLowercase && confirmSpecialCharacter) {
       groupArray = lowerCase.concat(specialChar);
     }

     else if (confirmLowercase && confirmUppercase) {
      groupArray = lowerCase.concat(upperCase);
    }

    else if (confirmSpecialCharacter && confirmUppercase) {
      groupArray = specialChar.concat(upperCase);
    }
    // If user selects 1 character types
    else if (confirmNumericCharacter) {
      groupArray = number;
    }
    else if (confirmSpecialCharacter) {
      groupArray = specialChar;
    }

    else if (confirmUppercase) {
      groupArray = upperCase;
    }

    else if (confirmLowercase) {
      groupArray = lowerCase;
    }

     console.log(groupArray)

     // Loop for selecting random characters
     for (var i = 0; i < confirmLength; i++) {
       password = password + groupArray[Math.floor(Math.random() * groupArray.length)];
     }

     return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
