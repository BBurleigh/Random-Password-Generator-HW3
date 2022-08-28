// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var alphabetLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alphabetUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", ";", ":", ",", "<", ".", ">", "/", "?", "~"]

function generatePassword() {

var password = "";

var passwordChar = "";

while (true) {

    passwordLength = parseInt(prompt("Let's decide on the length of your password. It needs to be between 8 and 128 characters"));

    if (passwordLength < 8 || passwordLength > 128) {

        alert("Your password is either too short or too long. Choose between 8 and 128 characters.");

    } else {break;}

   // var doubleCheck = "";
    
 //  prompt("Your generated password will have " + passwordLength + " characters. Is this correct? Input Y for yes or N for no?");

  //  if (doubleCheck == "N") {

  //      generatePassword();

 //   } else {break;}
    
    }

    alphabetLowerCase = confirm();
    alphabetUpperCase = confirm();
    numbers = confirm();
    
}


function writePassword() {

  var password = generatePassword(); // create function that creates a password based on what the user determines --> need three arrays (numbers, letters, and special characters)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
