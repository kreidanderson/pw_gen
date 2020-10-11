var generateBtn = document.querySelector("#generate");

var lc = 'abcdefghijklmnopqrstuvwxyz';
var uc = lc.toUpperCase();
var num = '1234567890';
var sc = '!@#$%^&()';

// for some reason the below code was giving me passwords with a ton of commas so I used the above variables.
// var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var num = ["0","1","2","3","4","5","6","7","8","9"]
// var sc = ["+", "-", "&", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":"]

var passwordBank = ''
var password = '';

function createPassword() {
var pwdLength = prompt("Hi there! Let's create a random password. How many characters would you like?")


    if(pwdLength <= 7){
      alert("The password must be between 8 and 128 characters.");
      var pwdLength = prompt("Hi there! Let's create a random password. How many characters would you like?")
      
    }
    
    if(pwdLength >= 129){
      alert("The password must be between 8 and 128 characters.");
      var pwdLength = prompt("Hi there! Let's create a random password. How many characters would you like?")

  }
  
  
  else if(pwdLength <= 129 && pwdLength >= 8){
    alert("Your password will be " + pwdLength + " characters long.");
}

    var hasUc = confirm("Does your password have uppercase letters? Click okay for yes and cancel for no");
    var hasLc = confirm("Does your password have lowercase letters? Click okay for yes and cancel for no");
    var hasNum = confirm("Does your password have numbers in it? Click okay for yes and cancel for no");
    var hasSc = confirm("Does your password have special characters? Click okay for yes and cancel for no");


// combinations of possibilities 

  if(hasUc === false && hasLc === false && hasNum === false && hasSc === false){
    alert("You must have at least one of these criteria in order to create a password.");
    var hasUc = confirm("Does your password have uppercase letters? Click okay for yes and cancel for no");
    var hasLc = confirm("Does your password have lowercase letters? Click okay for yes and cancel for no");
    var hasNum = confirm("Does your password have numbers in it? Click okay for yes and cancel for no");
    var hasSc = confirm("Does your password have special characters? Click okay for yes and cancel for no");
  
  }
  
if(hasUc === true && hasLc === true && hasNum === true && hasSc === true){
  alert("Your password will have uppercase letters, lowercase letters, numbers, and special characters. Press the 'generate password' button to get your password!");
  generateBtn.addEventListener("click", function() {
    password = " ";
  
    // code here adapted from Paul Cwik's password homework demonstration:
  passwordBank += lc
  passwordBank += uc
  passwordBank += num
  passwordBank += sc

  for (var i = 0; i < pwdLength; i++) {
    var randomCharacters = Math.floor(Math.random() * passwordBank.length );
    password += passwordBank[randomCharacters];
  }
  // Paul's code ends here. 
  

  document.getElementById("password").innerHTML = password;
    
  });
}
      
  if(hasUc == true && hasLc == false && hasNum == false && hasSc == false){
    // generate password wih only uppercase letters
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += uc
   
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    document.getElementById("password").innerHTML = password;
      
    });

  }

  if(hasUc == false && hasLc == true && hasNum == false && hasSc == false){
    //generate password with only lowercase letters
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += lc

    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    document.getElementById("password").innerHTML = password;
      
    });
  
  }

  if(hasUc == false && hasLc == false && hasNum == true && hasSc == false){
    //generate password with numbers only
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += num
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    document.getElementById("password").innerHTML = password;
      
    });
  }

  if(hasUc == false && hasLc == false && hasNum == false && hasSc == true){
    //generate password with special characters only
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration
    passwordBank += sc
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });
  }

  if(hasUc == true && hasLc == true && hasNum == false && hasSc == false){
    //generate password with UC & LC
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += lc
    passwordBank += uc
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    document.getElementById("password").innerHTML = password;
      
    });

  }
  if(hasUc == true && hasLc == false && hasNum == true && hasSc == false){
    //generate password with UC & NUM
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:

    passwordBank += uc
    passwordBank += num

  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });

  }

  if(hasUc == true && hasLc == false && hasNum == false && hasSc == true){
    //generate password with UC & SPEC CHAR
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += uc
    passwordBank += sc
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });
  }

  if(hasUc == false && hasLc == true && hasNum == true && hasSc == false){
    //generate password with LC & NUM
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += lc
    passwordBank += num
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });
  }

  if(hasUc == false && hasLc == true && hasNum == false && hasSc == true){
    //generate password with LC & SPEC CHAR
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += lc
    passwordBank += sc
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });

  }

  if(hasUc == false && hasLc == false && hasNum == true && hasSc == true){
    //generate password with NUM & SPEC CAR
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += num
    passwordBank += sc
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });
  }

  if(hasUc == true && hasLc == true && hasNum == true && hasSc == false){
    //generate password with UC, LC & Num
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += lc
    passwordBank += uc
    passwordBank += num
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });
  }
  
  if(hasUc == true && hasLc == true && hasNum == false && hasSc == true){
    //generate password with UC, LC & SPEC CHAR
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += lc
    passwordBank += uc
    passwordBank += sc
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });
  }

  if(hasUc == true && hasLc == false && hasNum == true && hasSc == true){
    //generate password with UC, NUM & SPEC CHAR
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += uc
    passwordBank += num
    passwordBank += sc
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });
  }

  if(hasUc == false && hasLc == true && hasNum == true && hasSc == true){
    //generate password with LC, NUM & SPEC CHAR
    generateBtn.addEventListener("click", function() {
      password = " ";
    
      // code here adapted from Paul Cwik's password homework demonstration:
    passwordBank += lc
    passwordBank += num
    passwordBank += sc
  
    for (var i = 0; i < pwdLength; i++) {
      var randomCharacters = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[randomCharacters];
    }
    // Paul's code ends here. 
    
    
    document.getElementById("password").innerHTML = password;
      
    });

  }

};


createPassword();


// Below is the work I did to figure out all the possible combinations that could occur


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



