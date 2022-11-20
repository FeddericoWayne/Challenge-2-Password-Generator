 /* Global variables */

/* All the possible characters for the password as an object */
var characters = {
  specialCharacters: " !#$%'()*+,-./:;<=>?@[]^_`{|}~",
  numerics: "01233456789",
  upperCaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCaseLetters: "abcdefghijklmnopqrstuvwxyz"
};

var compiledString = [];
var randomString = []; 

/* Alerts users to click on the button to begin password generation */
alert("Click on the Generate Password button to begin!")

/* Buttons in html */
var generateBtn = document.querySelector("#generate"); 
var refreshPage = document.querySelector("#refresh");

/* Function will execute upon click on Generate Password button */
generateBtn.onclick = function() {

  /* Asks users the number of digits they need for the password */
  var passwordLength = window.prompt("Enter how many characters you'd like your new password to be - between 8 and 128 characters", "Enter a number between 8 and 128");

  /* If users enter a number outside the 8-128 range */
  if (Math.round(passwordLength) > 128 || Math.round(passwordLength) < 8) {
    alert("Please enter a number between 8 and 128.");
    location.reload();

  /* If users enter a non-number string */
  } else if (isNaN(passwordLength)) {
    alert("Please enter a NUMBER!");
    location.reload();
  
  } else {

    /* Main password generation code block */
    alert("Great! A new " + Math.round(passwordLength) + "-digit password coming up!");

    /* Asks users if they need special characters in the password */
    var includeSpecialCharacters = window.confirm("Would you like to include Special Characters for your new password?");

    /* If the user said yes to including special characters */
    /* Adds special characters to compiled string */
    if (includeSpecialCharacters) {
      compiledString += characters.specialCharacters;
    };

    /* Asks users if they need numbers in the password */
    var includeNumbers = window.confirm("Would you like to include Numbers for your new password?");
  
    /* If the user said yes to including numbers */
    /* Adds numbers to compiled string */
    if (includeNumbers) {
      compiledString += characters.numerics;
    };
    
    /* Asks users if they need uppercase letters in the password */
    var includeUpperCase = window.confirm("Would you like to include Uppercase Letters for your new password?");
  
    /* If the user said yes to including uppercase letters */
    /* Adds uppercase letters to compiled string */
    if (includeUpperCase) {
      compiledString += characters.upperCaseLetters;
    };
  
    /* Asks users if they need lowercase letters in the password */
    var includeLowerCase = window.confirm("Would you like to include Lowercase Letters for your new password?");
  
    /* If the user said yes to including lowercase letters */
    /* Adds lowercase letters to compiled string */
    if (includeLowerCase) {
      compiledString += characters.lowerCaseLetters;
    };
  
    /* If the user selects none of the four character types */
    if (!includeSpecialCharacters && !includeNumbers && !includeUpperCase && !includeLowerCase) {
      alert("Please select at least one type of characters for your new password!");
      location.reload();
    };

  };
  
  /* Randomly selecting characters in the compiled string to form password */
  for (var x=0; x<Number(passwordLength); x++) {
    randomString += compiledString[Math.floor(Math.random() * compiledString.length)];
  };
  
};

/* Pushes the generated password into the textarea of the webpage */
function writePassword() {
    var password = randomString;
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
};

/* When users click on Start Over button */
function refresh() {
  location.reload();
};
  
/* Adds EventListeners to the two buttons */
generateBtn.addEventListener("click", writePassword);
refreshPage.addEventListener("click", refresh);

