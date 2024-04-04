// Primitive Data type is call by value: Copy the value not refrence(Original Data) value to get

// 7 Primitive datatypes : String, Number, Boolean, null, undefined, Symbol, BigInt


// JavaScript is a dynamically typed language:

// This means that variable types are not explicitly declared and can change at runtime. You don't need to specify the data type of a variable when you declare it; instead, its type is determined automatically at runtime based on the value assigned to it.


const number = 100 // Integer
const scoreVal = 98.5 // Float

const isLoggedIn = false
const outSideTemp = null
let userEmail;

// They aren't same value
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);


const bigNumber = 46564867384287n

// Reference datatype (Non Primitive Datatype) : Array, Objects, Function
