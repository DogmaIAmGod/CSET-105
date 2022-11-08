let special = '!#$%&*-_?/ ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let uppercase = lowercase.toUpperCase();
let numbers = '0123456789';

function shuffleString(x) {
    for (let i = 0; i < x.length; i++) {
      rnd = Math.floor(Math.random() * x.length);
      let charAtI = x.charAt(i);
      x = replaceChar(x, i, x.charAt(rnd));
      x = replaceChar(x, rnd, charAtI);
    }
    return x;
  }

  function replaceChar(str, index, char) {
    return str.substr(0, index) + char + str.substr(index + 1);
  }

  function getPasswordChars() {
    let includeCapitals = document.getElementById('include_capitals').checked;
    let includeLowercase = document.getElementById('include_lowercase').checked;
    let includeNumbers = document.getElementById('include_numbers').checked;
    let includeSpecial = document.getElementById('include_special').checked;
  
    let chars = includeCapitals ? uppercase : '';
    chars += includeLowercase ? lowercase : '';
    chars += includeNumbers ? numbers : '';
    chars += includeSpecial ? special : '';
    return chars;
  }
  
  function generatePassword() {
    let passwordOut = document.getElementById('password_out');
    let passwordLength = document.getElementById('password_length').value;
    if (!passwordLength || passwordLength < 1) {
      passwordOut.innerHTML = '';
      return;
    }
  
    let passwordChars = getPasswordChars();
    passwordChars = shuffleString(passwordChars);
    passwordOut.value = passwordChars.substr(0, passwordLength);
  }
  generatePassword();