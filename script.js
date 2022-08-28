var generateBtn = document.querySelector("#generate");

var alphabetLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];

var alphabetUpperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacters = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", ";", ":", ",", "<", ".", ">", "/", "?", "~"];

function generatePassword() {
  
  var password = "";
  
  var passwordChar = [];

  var passwordLength = parseInt( prompt("Let's decide on the length of your password. It needs to be between 8 and 128 characters"));

  if (passwordLength < 8 || passwordLength > 128) {
    
    alert("Your password is either too short or too long. Choose between 8 and 128 characters.");

    generatePassword();

  }  else {

    var alphabetLowerCaseQ = confirm("If you wish to include lowercase letters, hit 'Ok'. If not, hit 'Cancel'.");

    var alphabetUpperCaseQ = confirm("If you wish to include uppercase letters, hit 'Ok'. If not, hit 'Cancel'.");

    var numbersQ = confirm("If you wish to include numbers, hit 'Ok'. If not, hit 'Cancel'.");

    var specialCharactersQ = confirm("If you wish to include special characters, hit 'Ok'. If not, hit 'Cancel'.");

    if (alphabetLowerCaseQ) {

      passwordChar.push(...alphabetLowerCase);

    }

    if (alphabetUpperCaseQ) {

      passwordChar.push(...alphabetUpperCase);

    }

    if (numbersQ) {

      passwordChar.push(...numbers);

    }

    if (specialCharactersQ) {

      passwordChar.push(...specialCharacters);

    }

    if (passwordChar.length >= 1) {

      for (var i = 0; i < passwordLength; i++) {

        var index = Math.floor(Math.random() * passwordChar.length);

        password += passwordChar[index];

      }

      return password;
    }

    alert("Please try again. Hit the 'Generate' button to start over.")
  }
}

function writePassword() {

  var password = generatePassword(); 

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
