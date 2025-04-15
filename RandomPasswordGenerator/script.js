//variables to control password options
const passwordLength= 10;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const includeSymbols=true;

function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){ //password rules
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+-*/=";

    let allowedChars="";//this string will hold the final set of characters that are allowed to be used in the password
    let password="";// generated password will be stored here


    // append appropriate character sets to the allowedchars string
    allowedChars=allowedChars+(includeLowerCase? lowercaseChars: "");
    allowedChars=allowedChars+(includeUpperCase? uppercaseChars: "");
    allowedChars=allowedChars+(includeNumbers? numberChars: "");
    allowedChars=allowedChars+ (includeSymbols? symbolChars: "");

    // Handle edge cases for invalid password length or no allowed characters.
    if(length <= 0){
        return `(password length must be atleast 1)`;
    }
    //check if characters have been selected(if all are set to false then it will return this)
    if(allowedChars.length===0){
        return `(At least 1 set of characters needs to be selected)`;
    }

/*Running a loop length times (10 iterations if passwordLength = 10).
For each iteration, it randomly selects an index from allowedChars (the set of allowed characters) using Math.random(), and picks a character from allowedChars using Math.floor(Math.random() * allowedChars.length). */
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password +=allowedChars[randomIndex];
    }
    
     
    return password;
}

// call the function and output the result

const password=generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);

console.log(`Generated password:${password}`);