
// Get references to elements
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Character set arrays
const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersList = "0123456789";
const specialList = "|!#$%^&*_-";

function generatePassword() {
  let passwordLength;

  // Prompt for password length
  do {
    const userInput = prompt("How many characters would you like for your password?");
    passwordLength = parseInt(userInput);

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please input a valid number between 8 and 128.");
    }
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

  // Prompt for character set selections
  const userSelectsLowercase = confirm("Include lowercase characters?");
  const userSelectsUppercase = confirm("Include uppercase characters?");
  const userSelectsNumbers = confirm("Include numbers?");
  const userSelectsSpecial = confirm("Include special characters?");

  // Combine selected character sets
  let optionsList = "";
  if (userSelectsLowercase) optionsList += lowercaseList;
  if (userSelectsUppercase) optionsList += uppercaseList;
  if (userSelectsNumbers) optionsList += numbersList;
  if (userSelectsSpecial) optionsList += specialList;

  // Generate password
  let generatedPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * optionsList.length);
    generatedPassword += optionsList[randomIndex];
  }

  return generatedPassword;
}

function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

