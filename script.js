const passwordField = document.getElementById('password');
const passLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+?/>~-{}";

const allChars = upperCase + lowerCase + number + symbol;

document.getElementById('btn').onclick = function () {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(passLength > password.length)
        {
            password += allChars[Math.floor(Math.random() * allChars.length)];

        }

    passwordField.value = password;
}

document.getElementById('img').onclick = function(){
    passwordField.select();
    document.execCommand("copy");
}