// Assignment code here

//this is the function that generates a password based on a series of prompts or questions
function generatePassword(){

//variables for password generator
var character = "!@#$%^&*()?.<\>|=+:;,[-_]"

var number = "0123456789";

var lowerLetters = "abcdefghijklmnopqrstuvwxyz";

var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var enter = [];

//these are the criteria a user will choose for his password
var lowerCase = confirm("Do you want your password to contain lowercase letters?")
var upperCase = confirm("Do you want your password to contain uppercase letters?")
var num = confirm("Do you want your password to contain any numbers?")
var specialCharacter = confirm("Do you want your password to contain special characters?")
var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.")
  
//this function will check if the password length is between 8 and 128 characters
if (passwordLength < 8 || passwordLength > 128){
  alert("your password is not bewtween 8 characters or 128 characters. Try again.")
  var passwordLength = prompt("choose a password that is at least 8 characters but no more than 128 characters")
}

//this code is for anyone who doesn't select any criteria and asks them to choose one
if (lowerCase === false && upperCase === false && num === false && specialCharacter === false){
  alert("you have to choose at least one criteria")
  var lowerCase = confirm("Do you want your password to contain lowercase letters?")
  var upperCase = confirm("Do you want your password to contain uppercase letters?")
  var num = confirm("Do you want your password to contain any numbers?")
  var specialCharacter = confirm("Do you want your password to contain special characters?")
}

//using the chosen criteria to generate the password
if(lowerCase){
  enter = enter + lowerLetters;
}
if(upperCase){
  enter = enter + upperLetters;
}
if(number){
  enter = enter + number;
}
if(specialCharacter){
  enter = enter + character;
}

//generates a random password based on selected criteria
let generatedPassword = ""
for (let i = 0; i < passwordLength; i++){
  let random = [Math.floor(Math.random() * enter.length)];
  generatedPassword = generatedPassword + enter[random];
}
return generatedPassword
};

// Write password to the #password input
function writePassword() {

  var password =  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 









