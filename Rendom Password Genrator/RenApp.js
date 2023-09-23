const passwordBox = document.getElementById("password")
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialCharacters = "@#$%^&*()_+,-~;<=>?}{";
const allchars = lowerCase + number + specialCharacters + upperCase;

const iconButton = document.querySelectorAll("#copyicon");
// console.log(iconButton)

const buttonBox = document.getElementById("button");
console.log(buttonBox)

const createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];

    password += specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

    while(length >= password.length){
        password += allchars[Math.floor(Math.random()*allchars.length)];
    }

    passwordBox.value = password;



}

const copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy");
}


buttonBox.addEventListener("click",()=>{
    createPassword();
    // alert("hello");
})





