let score = true;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/* 
"95" => 95
"85sdf" => NaN
true => 1 / false => 0
*/


let isLoggedIn = ""


let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Bhagya" => true

let anyNumer = 99
let stringNumber = String(anyNumer)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operation *****************************

// prefix and postfix js

let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);



// Postfix increment

// let p = 3;
// const q = p++;
// console.log(`p:${p} and n:${q}`);
// // p is 4; n is 3

// let p2 = 3n;
// const q2 = p2++;
// console.log(`p:${p2} and n:${q2}`)
// // p2 is 4n; q2 is 3n



// Prefix increment

let p = 3;
const q = ++p;
console.log(`p:${p} and n:${q}`);
// p is 4; n is 4

let p2 = 3n;
const q2 = ++p2;
console.log(`p:${p2} and n:${q2}`)
// p2 is 4n; q2 is 4n