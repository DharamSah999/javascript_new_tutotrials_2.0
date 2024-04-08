const name = "Rohan ";
const age = 10;

//( `` ) String interpulation

// console.log(`Name: ${name}, Age: ${age}, Brother of Dharmendra`);

const gameName = new String("Ludo");

// console.log(gameName[2]);
// console.log(gameName.__proto__);

const contentString = "Hello, world";
console.log(contentString.length);
// console.log(contentString.charAt(2));
// console.log(contentString.indexOf("o"));


const newString = contentString.substring(0, 5); // Negative Value Ignore of substring methods
console.log(newString);
// console.log(contentString);


const anotherStrings = contentString.slice(-12, -5);
console.log(anotherStrings);