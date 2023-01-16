// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("How many characters would you like in the password?");
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 64) {
    alert("please select number greater then 8 and less 64")
    return;
  }
  var upperCase = confirm("Are Uppercase letters allowed?");
  var lowerCase = confirm("Are Lowercase letters allowed?");
  var Numeric = confirm("Are Numeric characters allowed?");
  var special = confirm("Are special characters allowed?");
 if(upperCase === false && lowerCase === false && Numeric === false && special === false) {
 alert(" you must select atleast one character type")
 return;
 }
 var options = { passwordLength, upperCase, lowerCase, Numeric, special}
 console.log(options)
 return options

}





// Function for getting a random element from an array
function getRandom(arr) {

  var randomIndex = Math.floor(Math.random() * arr.length);

  var randomCharacter = arr[randomIndex];

  return randomCharacter;



}

// console.log(getRandom(numericCharacters))
// Function to generate password with user input
function generatePassword() {
var characterArray = [];
 var options =  getPasswordOptions()
 if(options.upperCase) {
characterArray = characterArray.concat(upperCasedCharacters)
 }
 if(options.lowerCase) {
  characterArray = characterArray.concat(lowerCasedCharacters) 
 
 }
 if(options.Numeric) {
  characterArray = characterArray.concat(numericCharacters)
 }
if(options.special) {
  characterArray = characterArray.concat(specialCharacters)
}
console.log(characterArray)
var string = ""
for(var i = 0; i < options.passwordLength; i++) {
  var digit = getRandom(characterArray);
 console.log(digit)
 string+= digit
}
  return string

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

