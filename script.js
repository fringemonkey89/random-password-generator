// Assignment code here
//variables for password generator
var character = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var number = "0123456789";

var lowerLetters = "abcdefghijklmnopqrstuvwxyz";

var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var enter = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
var lowerCase = confirm("Do you want your password to contain lowercase letters?")
var upperCase = confirm("Do you want your password to contain uppercase letters?")
var num = confirm("Do you want your password to contain any numbers?")
var specialCharacter = confirm("Do you want your password to contain special characters?")
var passwordLength = confirm("Choose a password length of at least 8 characters and no more than 128 characters.")
}

if (passwordLength < 8 || passwordLength > 128){
  alert("your password is not bewtween 8 characters or 128 characters. Try again.")
  var passwordLength = prompt("choose a password that is at least 8 characters but no more than 128 characters")
}

else if (lowerCase === false && upperCase === false && num === false && specialCharacter === false){
  alert("you have to choose at least one criteria")
  var lowerCase = confirm("Do you want your password to contain lowercase letters?")
  var upperCase = confirm("Do you want your password to contain uppercase letters?")
  var num = confirm("Do you want your password to contain any numbers?")
  var specialCharacter = confirm("Do you want your password to contain special characters?")
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword){
//Asks for input from user
}