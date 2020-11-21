// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Arrays of possible password characters 

// number characters list as a string (between double quotes): "0123456789"
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// lower case characters list as a string (between double quotes): "abcdefghijklmnopqrstuvwxyz"
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// upper case characters list as a string (between double quotes): "ABCDEFGIHJKLMNOPQRSTUVWXYZ"
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// special characters list as string (between double quotes): " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var specChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];

// user generated array for characters to include in password
var passwordSource = [];

// prompt how many characters
    // has at least 8 characters
var passNumber = parseInt(prompt("How many character do you want in your password? Must have at least 8 and no more than 128.", ""));

if (passNumber < 129 && passNumber > 8) {
    console.log(passNumber);
} else if (isNaN(passNumber)) {
    parseInt(prompt("You did not enter a number. Please enter a number from 8 to 128.", ""));
} else {
    parseInt(prompt("Your number (" + passNumber + ") is either less than 8 or more than 128. Please enter a number from 8 to 128.", ""));
}

// confirm special characters
var specCharConfirm = confirm("Click OK to include special characters in your password.") 
  if (specCharConfirm) {
    passwordSource = passwordSource.concat(specChar);
  } 
// confirm for uppercase
var upCaseConfirm = confirm("Click OK to include uppercase characters in your password.") 
  if (upCaseConfirm) {
    passwordSource = passwordSource.concat(upCase);
  } 
// confirm for lowercase
var lowCaseConfirm = confirm("Click OK to include lowercase characters in your password.") 
  if (lowCaseConfirm) {
    passwordSource = passwordSource.concat(lowCase);
  } 
// confirm for numbers 
var numbersConfirm = confirm("Click OK to include numbers in your password.") 
  if (numbersConfirm) {
    passwordSource = passwordSource.concat(numbers);
  } 
// at least one type of character must be selected 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password funciton 
function generatePassword () {
  var builtPassword = "";
  for (var i = 0; i < passNumber; i++) {
    Math.floor(Math.random()*passwordSource.length)
  }
}