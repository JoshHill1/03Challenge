// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var PWlength = window.prompt("Enter the length you'd like your password to have \n(between 8 and 128 characters):");
  
  if (!PWlength) {  // Prompt no message if useer types nothing or presses cancel
    return
  } else if (PWlength < 8 || PWlength > 128) {  // Propts user if they put any invalid number
    window.alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  } 

  // Asks user what character types they want
  var addLowercaseChars = window.confirm("Click OK to include lowercase characters.");
  var addUppercaseChars = window.confirm("Click OK to include uppercase characters.");
  var addNumericChars = window.confirm("Click OK to include numeric characters.");
  var addSpecialChars = window.confirm("Click OK to include special characters.");
  // Makes sure that at least one character type is selected
  if (!addLowercaseChars && !addUppercaseChars && !addNumericChars && !addSpecialChars) {
    window.alert("Please select at least one of these character types when prompted: \nLowercase characters: (abc...) \nUppercase characters: (ABC...) \nNumeric characters: (123...) \nSpecial characters: (!@#$...)");
    return;
  }
  
  // Character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "1234567890";
  var specialChars = "!@#$%^&*()_+~'`|}{[]:;?><,./-=";
  
  // Defines initialPW based on selected criteria
  var initialPW = "";
  if (addLowercaseChars) {
    initialPW += lowercaseChars;
  }
  if (addUppercaseChars) {
    initialPW += uppercaseChars;
  }
  if (addNumericChars) {
    initialPW += numericChars;
  }
  if (addSpecialChars) {
    initialPW += specialChars;
  }
  
  // Generates password based on the selected criteria
  var password = "";
  for (var i = 0; i < PWlength; i++) {
    var randomIndex = Math.floor(Math.random() * initialPW.length);
    password += initialPW[randomIndex];
  }

  var myGeneratedPassword = password
  return myGeneratedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
