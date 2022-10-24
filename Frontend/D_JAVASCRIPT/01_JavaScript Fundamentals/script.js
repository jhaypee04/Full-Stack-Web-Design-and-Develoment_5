// window.alert("This message is coming from an external JS File")
// use the Double Forward Slash to comment in JavaScript

// Data Types
// 1. String: is any character within double Quotation marks or Single Quotation
// 2. Number
// 3. Array
// 4. Object
// 5. Undefined
// 6. Null

// Variables: are like containers that store any/various data types.
// So we would have to declare a variable using one of three keywords in JavaScript
// var, let or const
// The var and let keywords are used to declare variables whose values can change over time
// The const keyword is used to declare variables whose values are constant.

// Naming Convention when creating/declaring a variable
// 1. There are only two special characters you can use: $ and _ (The dollar sign and the underscore character!)
// 2. The name of your variable must be any combination of the letters of the Alphabet
// 3. It is generally preferable to use camelCase when combining two or more words.
// 4. Spacing (like white space) are not allowed in variable names.

// Example Usage:
// Declaring a variable
var aNewVarible;  // The value in aNewVariable is undefined!
// Assigning a value to a variable
var anotherVariable = "I am a String" // String with Double Quotes
let aLetVariable = 'I am a String in single Quote'

//console log our variables
console.log(anotherVariable)
console.log(aLetVariable)

// More Things to know about String is

// String Concatenation: is the act of join two or more strings together
// Example:
var firstSong = 'He has large brain but could not offer full nine subjects '
var secondSong = 'May all silly people stop calling a pope catechist!'
var wholeSong = firstSong + secondSong
console.log(wholeSong)

// Second way to concatenate
var fullSentence = 'Obi is a boy.' + ' Simbi is a girl.'
console.log(fullSentence)

// Finding the length of a String
var countString = "How long am I ?"
console.log(countString + "I am: " +  countString.length )
// NOTE: We use the .length property on the String Object get the length of the String.

// String Template Literals

// We can create a String using
// 1. Double Quote: ""
// 2. Single Quote: ''
// 3. String Template Literals : uses backticks ``

// Example Usage
var string = `These strings are in a string template literal`
console.log(string)

// Example2
var message = "I am learning JavaScript."
var mood = "I am happy; yippy!"
var combination = `We are combining this: (message) ${message}, with (mood) ${mood}.`
console.log(combination)

// Operators
// 1. Assignment Operator eg. =
// An Operator is a symbol used to perform operations or actions 
// 2. Arithmetic Operators eg. +, -, /, *, +=, -=, etc
// 3. Increment Operator eg. ++
// 4. Decrement Operator eg. --
// 5. Logical Operator eg. 
//  a.) Or operator whose symbol is: ||
//  b.) And operator whose symbol is &&
// 6. Ternary Conditional Operator

// String Methods
// The slice() method
var string1 = "He is a good person"
var slicedString = string1.slice(8,12)
console.log(slicedString)