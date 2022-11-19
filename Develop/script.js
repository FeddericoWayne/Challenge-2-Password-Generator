/* Global variables */

var generateBtn = document.querySelector("#generate");

var numerics= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters= [' ', '!', '"', '#', '$', '%', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}','~'];
var upperCaseLetters= ['A','B','C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var originalArray = [];
var concatArray = [];
var shuffledString = [];

/* Alerting users of the purpose of the App */
alert('Press OK to Start Creating your Custom Password!');

/* Asking user how many digits are needed for the random password */

var totalDigits = Number(window.prompt("Please enter the number of characters you'd like your new password to be - at least 8 characters and no more than 128 characters!"));




var typeSelection = function() {
  /* Asking user which of the 4 types of characters are needed */

  //A
  var includeSpecialCharacters = window.confirm("Would you like to include special characters in your new password?");
  //B
  var includeNumbers = window.confirm("Would you like to include numbers in your new password?");
  //C
  var includeUpperCase = window.confirm("Would you like to include uppercase letters in your new password?");
  //D
  var includeLowerCase = window.confirm("Would you like to include lowercase letters in your new password?"); 

  //A
  if (includeSpecialCharacters && !includeNumbers && !includeUpperCase && !includeLowerCase) {
  randomArray = originalArray.concat(specialCharacters);
  alert("Click on the Red Button to Display your New Password!");
//AB
  } else if (includeSpecialCharacters && includeNumbers && !includeUpperCase && !includeLowerCase) {
  concatArray = originalArray.concat(specialCharacters, numerics);
  alert("Click on the Red Button to Display your New Password!");
  //AC
  } else if (includeSpecialCharacters && !includeNumbers && includeUpperCase && !includeLowerCase) {
  concatArray = originalArray.concat(specialCharacters,upperCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //AD
  } else if (includeSpecialCharacters && !includeNumbers && !includeUpperCase && includeLowerCase) {
  concatArray = originalArray.concat(specialCharacters,lowerCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //ABC  
  } else if (includeSpecialCharacters && includeNumbers && includeUpperCase && !includeLowerCase) {
  concatArray = originalArray.concat(specialCharacters,numerics,upperCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //ABD
  } else if (includeSpecialCharacters && includeNumbers && !includeUpperCase && includeLowerCase) {
  concatArray = originalArray.concat(specialCharacters,numerics,lowerCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //ACD
  } else if (includeSpecialCharacters && !includeNumbers && includeUpperCase && includeLowerCase) {
  concatArray = originalArray.concat(specialCharacters,upperCaseLetters,lowerCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //ABCD
  } else if (includeSpecialCharacters && includeNumbers && includeUpperCase && includeLowerCase) {
  concatArray = originalArray.concat(specialCharacters,numerics,upperCaseLetters,lowerCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //B
  } else if (!includeSpecialCharacters && includeNumbers && !includeUpperCase && !includeLowerCase) {
  concatArray = originalArray.concat(numerics);
  alert("Click on the Red Button to Display your New Password!");
  //BC
  } else if (!includeSpecialCharacters && includeNumbers && includeUpperCase && !includeLowerCase) {
  concatArray = originalArray.concat(numerics,upperCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //BD
  } else if (!includeSpecialCharacters && includeNumbers && !includeUpperCase && includeLowerCase) {
  concatArray = originalArray.concat(numerics,lowerCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //BCD
  } else if (!includeSpecialCharacters && includeNumbers && includeUpperCase && includeLowerCase) {
  concatArray = originalArray.concat(numerics,upperCaseLetters,lowerCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //C
  } else if (!includeSpecialCharacters && !includeNumbers && includeUpperCase && !includeLowerCase) {
  concatArray = originalArray.concat(upperCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //CD
  } else if (!includeSpecialCharacters && !includeNumbers && includeUpperCase && includeLowerCase) {
  concatArray = originalArray.concat(upperCaseLetters,lowerCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //D
  } else if (!includeSpecialCharacters && !includeNumbers && !includeUpperCase && includeLowerCase) {
  concatArray = originalArray.concat(lowerCaseLetters);
  alert("Click on the Red Button to Display your New Password!");
  //None Selected
  } else {
  alert("Please select at least one type of characters for your new password.");
  typeSelection();
  }
};

/* Compiles master array of selected characters */
typeSelection(); 

/* Randomly selects items in randomArray to get randomized items into a string */
var generatePassword = function() {

  for (var i=0 ; i<totalDigits; i++) {
    var randomSelect = concatArray[Math.floor(Math.random()*concatArray.length)];
    shuffledString = shuffledString + randomSelect;
  }
 
};

/* Generates password */
generatePassword();

/* Adds an EventListener to act on click */
generateBtn.addEventListener("click", writePassword);

/* Writes the generated password into textarea */
function writePassword() {
  var password = shuffledString;
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

};




