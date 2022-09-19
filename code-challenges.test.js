// ASSESSMENT 2: Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// Pseudocode:
// Input 1: numbersArray1
// Output 1: [18, 21, 24, 27, 30]

// Input 2: numbersArray2
// Output 2: [72, 81, 90, 99, 108]

// create a function called multByThree that takes in an array of numbers and returns an array with all the numbers multiplied by 3.
// One parameter: array
// Multiply each number in the array by three
// For each number that is multiplied by three, place it into a new array
// return newArray

// describe("multByThree", () => {
//     it("takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
//       expect(multByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//       expect(multByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
//   })




// b) Create the function that makes the test pass.

// Pseudocode:
// I am going to write the template of a function so that I can clearly see what needs to be filled in based on the instructions I gave myself on lines 33-37
// Now that I have typed out the template of my function, I am going to call it multByThree (just like how I instructed to do so on line 33)
// My parameter is array (which I established on line 34) because I am going to be passing any array as an input
// I establish a newArray inside the function because I want this newArray to only live and be associated with anything inside the function
// This newArray is going to be the house where the outcome established on lines 28 and 31 will live in
// I know I need to use a for loop because I am going through the index of the array one by one
// On line 65 is where I establish the logic of what I want to do with each index of the array
//.push means that I am pushing the outcome of (array[i] * 3) into newArray
// I want to return newArray
// And then I console.log the function with parameters: input 1 and input 2 to get their respective outputs

const multByThree = (array) => {
    let newArray = []
    for (i = 0; i < array.length; i++) {
        newArray.push(array[i] * 3)
    }
    return newArray
}
//  console.log(multByThree(numbersArray1))
//  console.log(multByThree(numbersArray2))
// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:
// Input 1: object1
// Output 1: "15 is divisible by three"

// Input 2: object2
// Output 2: "0 is divisible by three"

// Input 3: object3
// Output 3: "-7 is not divisible by three"

// Create a function called isItDivisbleByThree that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// One parameter: object
// Write a conditional to evaluate if object is divisble by three
// returns "__ is divisible by three" 
// Otherwise
// return "__ is not divisible by three"

describe("isItDivisibleByThree", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        expect(isItDivisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(isItDivisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(isItDivisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// Great! Got a Good Fail!


const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudocode:
// I am going to write the template of a function so that I know what needs to be filled in based on the instructions I gave myself on lines 86-90.
// I am going to name my function isItDivisibleByThree as said so on line 86. 
// I know that my parameter is an object with a number key.
// After I finish filling out the first line of the function, I am going to begin the logic.
// Since I am going be comparing something, I know that I need to write a conditional statement.
    // I will write it out as if I am speaking to someone: " if the number is divisible  by 3, then I want the ouput to say 'Said number is divisible by 3"
    // and if it is not divisible by 3, then I want the ouput to be "Said number is not divisble by three"
// Object.number refers to the number within the object
// % 3 ===0 means that the remainder will equal 0 if the number within the object is divisible by 3 (For example: 15)
// % 3 !==0 means that the remainder will not equal 0 if the number within the object is not divisible by 3 (For example: -7)
// I then console.log the three inputs established on lines 77, 80, and 83.



const isItDivisibleByThree = (object) => {
    if (object.number % 3 === 0) {
        return object.number + " is divisible by three"
    } else if (object.number % 3 !== 0) {
        return object.number + " is not divisible by three"
    }
}
console.log(isItDivisibleByThree(object1))
console.log(isItDivisibleByThree(object2))
console.log(isItDivisibleByThree(object3))

// Tested the function and it passed!! Yay!

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:

// Input 1:  randomNouns1
// Output 1: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// Input 2:  randomNouns2
// Output 2: ["Temperature", "Database", "Chopsticks", "Mango"]

// Create a function called capitalizedArray that takes in an array of words and returns an array with all the words capitalized.
// One parameter: array
// Create a for loop
    // for every string, capitalize the first letter and push it into a newArray
        // return newArray

describe("capitalizedArray", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
      expect(capitalizedArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalizedArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })

// Got a good fail! Yay!

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudocode:

// I am going to write the template of a function so that I know what needs to be filled in based on the instructions I gave myself on lines 153-157.
// I called my function capitalizedArray just as I instructed to do so on line 153.
// Once I completed filling out the first line of my function, I needed to begin the logic portion of the function.
// I needed to create a newArray which will house the outcome of my function.
// I knew I needed to write out a for loop because I needed to iterate the array.
  // I the variable word be the element of the index in the array. I established this because it makes it easier to read when I am coding rest of the for loop.
// I knew that the built in method, .UpperCase(), capitalized letters of a string within an array. But I did not know how to access only the first letter.
  // I googled how to capitalize the first letter in a string in Javascript. And learned about the built in method, .charAt().
// .charAt() seperates a letter at the position given. For example: "Bear" --> .charAt(1) // Outcome: "e"
// .slice() seperates the strings into two at a given index. For exmaple: "Bear" ---> .slice(1) // Outcome: "ear"
// If I combine these two built in methods along with .UpperCase() I can seperate the letters so that I only capitalize the first one.
// newArray.push is moving the outcome to newArray with capitalized letters.
// Then I return the newArray


const capitalizedArray = (array) => {
    newArray = []
    for(i=0; i<array.length; i++) {
        let word = array[i]
        newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
    } 
    return newArray
}

console.log(capitalizedArray(randomNouns1))
console.log(capitalizedArray(randomNouns2))

// Passed the test! Yay!

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:

// Input 1: vowelTester1
// Output 1: 1

// Input 2: vowelTester2
// Output 2: 0

// Input 3: vowelTester3
// Output 3: 2

// Write a function called indexOfFirstVowel that takes in a string and logs the index of the first vowel.
// One paramater: string
// create a for loop to grab the character one by one
// for every character that is the first vowel, log the index
    // this will involve a conditional inside the for loop

describe("indexOfFirstVowel", () => {
    it("that takes in a string and logs the index of the first vowel.", () => {
      expect(indexOfFirstVowel(vowelTester1)).toEqual(1)
      expect(indexOfFirstVowel(vowelTester2)).toEqual(0)
      expect(indexOfFirstVowel(vowelTester3)).toEqual(2)
    })
  })

// Good Fail! Yay!

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// Pseudocode:

// I am going to write the template of a function so that I know what needs to be filled in based on the instructions I gave myself on lines 221-225.
// I called my function indexOfFirstVowel just as I instructed to do so on line 221.
// Once I completed filling out the first line of my function, I needed to begin the logic portion of the function.
// I knew I needed to use a for loop because I needed iterate through each index in the string.
// I also needed to use a conditional statement because I needed to check if the character at the index is a vowel.
// .charAt(i) === "a", "e", "i", "o", "u" --> if the index is equal to a vowel, I will return the index.
  // this works because I started at the beginning of the string and I will return at the first vowel.

const indexOfFirstVowel = (string) => {
    for(i=0; i<string.length; i++) {
        if(string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
            return i
        }
    } 
}
console.log(indexOfFirstVowel(vowelTester1))
console.log(indexOfFirstVowel(vowelTester2))
console.log(indexOfFirstVowel(vowelTester3))

// The function passed the test! Yay!