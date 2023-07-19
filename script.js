// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword){
//Asks for input from user
enter = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));

//if statement for validation
if (enter = 0){
  alert("please enter a value")
} else if (enter < 8 || enter > 128){
  enter = parseInt(prompt("You have to choose between 8 and 128 characters"))
}
else{
confirmNum = confirm("will this contain numbers?");
confirmCharacter = confirm("will this contain special characters?");
confirmUpper = confirm("WIll this contain uppercase letters");
confirmLower = confirm("Will this contain lowercase letters?");
};
}

var enter;
var confirmNum;
var confirmCharacter;
var confirmUpper;
var confirmLower;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space=[];

var upperCase = function(x) {
  return x.toUpperCase()
};

upperLetters = lowerLetters.map(upperCase);

function writePassword