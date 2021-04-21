// Assignment Code
var generateBtn = document.querySelector("#generate");
var LowerCaseChar = ["a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCaseChar = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var SymbolsChar = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+", "=", "?"];
var NumbersChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {

  var passwordLength = parseInt(prompt("Enter Password Between 8 and 128 characters"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please Chose a number between 8 and 128 characters");
    return
  }