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
  var LowerCase = confirm("Would you like lowercase?");
  var UpperCase = confirm("Would you like uppercase?");
  var Symbols = confirm("Would you like symbols?");
  var Numbers = confirm("Would you like numbers?");

  if (LowerCase === false && UpperCase === false && Symbols === false && Numbers === false) {
    alert("Please select one of the character functions");
    return
  }
  var UserChoices = []

  if (LowerCase === true) {
    UserChoices = UserChoices.concat(LowerCaseChar);
    console.log(UserChoices);
  }
  if (UpperCase === true) {
    UserChoices = UserChoices.concat(UpperCaseChar);
    console.log(UserChoices);
  }
  if (Symbols === true) {
    UserChoices = UserChoices.concat(SymbolsChar);
    console.log(UserChoices);
  }
  if (Numbers === true) {
    UserChoices = UserChoices.concat(NumbersChar);
    console.log(UserChoices);
  }