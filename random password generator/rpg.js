// RANDOM PASSWORD GENERTOR

function generatePassword(length, includeLowercase, includeUppercase, includeSymbols, includeNumbers) {
// declare constants
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

// ensure the characters included are part of those allowed
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // check they are all included and password is valid
    if (length <= 0){
        return `(password length must be at least 1)`;

    }
    if (allowedChars.length === 0){
        return `(At least 1 set of characters needs to be selected)`;
    }

    // at least a single character from the allowed characters should be included
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];

    } 

    return password;
    
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                includeLowercase, 
                                includeUppercase, 
                                includeSymbols, 
                                includeNumbers);


console.log(`Generated password: ${password}`);