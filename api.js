function convertToCelsius(fahrenheit) {    

  if (typeof fahrenheit !== "number"|| isNaN(fahrenheit)){

    throw new Error('Input must be a number : '+ fahrenheit);

  }


    let celsius = (fahrenheit - 32) * 5 / 9;

    return celsius;
}

function convertToFahrenheit(celsius) {

  if (typeof celsius !== "number"|| isNaN(celsius)){ 


    throw new Error('Input must be a number : '+ celsius);
  } 

  let fahrenheit = (celsius * 9 / 5) + 32;

  return fahrenheit;
}

function secureConvertToFloat(input) {

  if (typeof input !== "number"|| isNaN(input)) { 
    throw new Error('Input must be a number : ' + input);
  }

return parseFloat(input);

}
function secureConvertToInt(input) {

  if (typeof input !== "number"|| isNaN(input) ) { 
    throw new Error('Input must be a number : ' + input);
  }

return parseInt(input);

}

function passwordGenerator(length, includeUppercaseInput, includeNumbersInput, includeSymbolsInput) {

   
    
if (typeof length !== "number" || isNaN(length) || length <= 0) {
  throw new Error('Length must be a positive number : ' + length);
}


const symbols="!@#$%^&*()_+{}|:<>?-=[]\;',./";
const numbers="0123456789";
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
 let includeNumbers=false
    let includeSymbols=false
    let includeUppercase=false
    if(includeNumbersInput==true){
        includeNumbers=true;
    }
    if(includeSymbolsInput==true){
        includeSymbols=true;
    }
    if(includeUppercaseInput==true){
        includeUppercase=true;
    }

    let password="";
for (let i = 0; i < length; i++) {
const choice = Math.floor(Math.random() * 4);


 if (includeUppercase && choice === 0) {
   password += uppercase[Math.floor(Math.random() * uppercase.length)];
 }else if (includeNumbers && choice === 1) {
   password += numbers[Math.floor(Math.random() * numbers.length)];
 } else if (includeSymbols && choice === 2) {
   password += symbols[Math.floor(Math.random() * symbols.length)];
 } else {
   password += lowercase[Math.floor(Math.random() * lowercase.length)];
 }
}

return password;
}

module.exports.convertToCelsius=convertToCelsius;
module.exports.convertToFahrenheit=convertToFahrenheit;
module.exports.secureConvertToFloat=secureConvertToFloat;
module.exports.secureConvertToInt=secureConvertToInt;
module.exports.passwordGenerator=passwordGenerator;