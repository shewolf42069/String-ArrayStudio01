const input = require('readline-sync');
let str = "LaunchCode";
let tempStr = str.slice(3);;


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strMod = tempStr +"Lau";

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`"${str} is the place to be, but my brain feels like ${strMod}!"`);
console.log();

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let howMany = input.question("Using the word 'LaunchCode', how many letters should we rearrange? ");
if (howMany > str.length) {
  console.log("Sorry! Thats too many letters, we will use 3.") 
} else {
  tempStr = str.slice(howMany);
  newStr = tempStr + (str.substr(0,howMany));
}
  console.log(strMod);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
