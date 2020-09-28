// I've really tried haed to figure this out but it's just not happening.
// 




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.getElementById("password").value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var num = ["0","1","2","3","4","5","6","7","8","9"]
// var sc = ["+", "-", "&", "!", "(", ")", "{", "}", "[", "]","*", "?", ":"]

var ranPwdChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0","1","2","3","4","5","6","7","8","9","+", "-", "&", "!", "(", ")", "{", "}", "[", "]","*", "?", ":"];
// uppercase = [0-25]
//lowercase = [26-51]
//numbers = [52-61]
//special characters [62-74]

function pwdOptions() {
var pwdLength = prompt("Hi there! Let's create a random password. How many characters would you like?");
   if(false){
    stop pwdOptions
   }

    if(pwdLength <= 8){
      alert("The password must be between 8 and 128 characters. Refresh the page if you would like to start again.");
    }
    
    else {
      hasUc
    }
    if(pwdLength >= 128){
      alert("The password must be between 8 and 128 characters. Refresh the page if you would like o start again.");
  }
  if(pwdLength <= 129 && pwdLength >= 8){
    alert("Your password will be " + pwdLength + " characters long.");
}
}
  var hasUc = confirm("Does your password have uppercase letters? Click okay for yes and cancel for no");
        if (hasUc == false){
        alert("Your password will not have uppercase letters.");
    }
      if (hasUc == true){
      alert("Your password will have uppercase letters.");
      }

  var hasLc = confirm("Does your password have lowercase letters? Click okay for yes and cancel for no");
      if (hasLc == false){
      alert("Your password will not have lowercase letters.");
    
  }
    if (hasLc == true){
    alert("Your password will have uppercase letters.");
    
    }

    var hasNum = confirm("Does your password have numbers in it? Click okay for yes and cancel for no");
      if (hasNum == false){
      alert("Your password will not have any numbers.");
    
  }
    if (hasNum == true){
    alert("Your password will include numbers.");
    
    }

    var hasSc = confirm("Does your password have special characters? Click okay for yes and cancel for no");
    if (hasSc == false){
    alert("Your password will not include special characters.");
  
}
  if (hasSc == true){
  alert("Your password will include special characters.");
  
  }

// combinations of possibilities 

  if(hasUc === false && hasLc === false && hasNum === false && hasSc === false){
    alert("You must have at least one of these criteria in order to create a password. Please refresh the page to start over.");
  }
  
if(hasUc === true && hasLc === true && hasNum === true && hasSc === true){
  alert("Your password will have uppercase letters, lowercase letters, numbers, and special characters. Press the 'generate password' button to get your password!");
 }

  if(hasUc == true && hasLc == false && hasNum == false && hasSC == false){
    // generate password wih only uppercase letters
  }

  if(hasUc == false && hasLc == true && hasNum == false && hasSC == false){
    //generate password with only lowercase letters
  }

  if(hasUc == false && hasLc == false && hasNum == true && hasSC == false){
    //generate password with numbers only
  }

  if(hasUc == false && hasLc == false && hasNum == false && hasSC == true){
    //generate password with special characters only
  }

  if(hasUc == true && hasLc == true && hasNum == false && hasSC == false){
    //generate password with UC & LC
  }
  if(hasUc == true && hasLc == false && hasNum == true && hasSC == false){
    //generate password with UC & NUM
  }

  if(hasUc == true && hasLc == false && hasNum == false && hasSC == true){
    //generate password with UC & SPEC CHAR
  }

  if(hasUc == false && hasLc == true && hasNum == true && hasSC == false){
    //generate password with LC & NUM
  }

  if(hasUc == false && hasLc == true && hasNum == false && hasSC == true){
    //generate password with LC & SPEC CHAR
  }

  if(hasUc == false && hasLc == false && hasNum == true && hasSC == true){
    //generate password with NUM & SPEC CAR
  }

  if(hasUc == true && hasLc == true && hasNum == true && hasSC == false){
    //generate password with UC, LC & Num
  }
  
  if(hasUc == true && hasLc == true && hasNum == false && hasSC == true){
    //generate password with UC, LC & SPEC CHAR
  }

  if(hasUc == true && hasLc == false && hasNum == true && hasSC == true){
    //generate password with UC, NUM & SPEC CHAR
  }

  if(hasUc == false && hasLc == true && hasNum == true && hasSC == true){
    //generate password with LC, NUM & SPEC CHAR
  }
}

//possible combos: 
  // FOUR: hasUc &&  hasLc  &&  hasNum  && hasSc 
      // total of FOUR (together) = 1 combo
                                       //combo complete √

// ALONE: hasUc |  hasLc  |  hasNum  | hasSc 
      //total ALONE = 4 combos 
                                      //combos complete √

      // TWO: hasUc & hasLc |  hasUc & hasNum  |  hasUc &  hasSc
// TWO ctd: hasLc & hasNum | hasLC & hasSc | hasNum & hasSc
    //total TWO = 6 combos
                                      //combos complete √

    // THREE: hasUc & hasLc & hasNum | hasUc & hasLc & hasSc | hasUc & hasNum & hasSc |
// THREE ctd: hasLc & hasNum & hasSc | 
    //total THREE = 4 combos
                                      //combos complete √

var userInput = {
  pwdLength: pwdLength,
  hasUc: hasUc,
  hasLc: hasLc,
  hasNum: hasNum,
  hasSc: hasSc,
}


