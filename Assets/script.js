 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

 // Assignment Code
function generatePassword() {
// How many characters would like between 8 to 128?
var userInput = window.prompt("How many characters would you like for your password?");
var passwordLength = parseInt(userInput);

if (Number.isNaN(passwordLength)) {
  window.alert("Please input a number.");
  return
}

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("please select a number between 8 to 128 characters.");
  return
}

// prompt user to confirm if they want lower case characters
var userSelectsLowercase = window.confirm("Would you like to include lowercase characters to your password?");
// prompt user to confirm if they want upper case characters
var userSelectsUppercase = window.confirm("Would you like to include uppercase characters to your password?")
// prompt user to confirm if they want numerical characters
var userSelectsNumbers = window.confirm("Would you like to include numbers to your password?")
// prompt user to confirm if they want special characters
var userSelectsSpecial = window.confirm("would you like to include special characters to your password?");

// variable list
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
"x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
"X", "Y", "Z"]
var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialList = ["|", "!", "#", "$", "%", "^", "&", "*", "_", "-"];

// if statments
var optionsList = []
console.log(optionsList)

if (userSelectsLowercase === true) {
  optionsList.push(lowercaseList);
}

if (userSelectsUppercase === true) {
  optionsList.push(uppercaseList);
}

if (userSelectsNumbers === true) {
  optionsList.push(numbersList);
}

if (userSelectsSpecial === true) {
  optionsList.push(specialList);
}

// Generate Password for the User
var generatePassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsList);
  var randomChar = getRandomItem(randomList);
  console.log(randomList)
  console.log(randomChar)
  generatePassword += randomChar
  console.log(generatePassword)
}
return generatePassword

function getRandomItem(someArray){
var randomIndex = Math.floor(Math.random()*someArray.length)
console.log("randomIndex", randomIndex)
return someArray[randomIndex]
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
