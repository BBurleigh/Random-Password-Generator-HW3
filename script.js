// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var alphabetLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alphabetUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", ";", ":", ",", "<", ".", ">", "/", "?", "~"]

function generatePassword() {



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

    alphabetLowerCase = confirm("If you wish to include lowercase letters, hit 'Okay'. If not, hit 'Cancel'.");

    alphabetUpperCase = confirm("If you wish to include uppercase letters, hit 'Okay'. If not, hit 'Cancel'.");

    numbers = confirm("If you wish to include numbers, hit 'Okay'. If not, hit 'Cancel'.");

    specialCharacters = confirm("If you wish to include special characters, hit 'Okay'. If not, hit 'Cancel'.");
    
    const passwordDesigner = [];

    if (alphabetLowerCase == true) {

      passwordDesigner(passwordLength).concat(alphabetLowerCase);

    }

    if (alphabetUpperCase == true) {

      passwordDesigner(passwordLength).concat(alphabetUpperCase);

    }

    if (numbers == true) {
  
      passwordDesigner(passwordLength).concat(numbers);

    }

    if (specialCharacters == true) {

      passwordDesigner(passwordLength).concat(specialCharacters);

    } else {

      alert("You need to have at least one type of character in your generated password. Please try again.")

    }

    var password = "";

    for ( var i = 0; i < passwordLength; i++) {

      password += passwordChar[Math.floor(Math.random() * passwordChar.length)];

    }

    return (password);

    }



function writePassword() {

  var password = generatePassword(); // create function that creates a password based on what the user determines --> need three arrays (numbers, letters, and special characters)

  var passwordTeffxt = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
