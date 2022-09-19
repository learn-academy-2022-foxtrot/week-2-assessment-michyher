// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022"
// console.log(cohort.split(""))

// a) Your answer: ["F", "o", "x", "t", "r", "o", "t", "", "2", "0", "2", "2"]
// b) Verify and explain: I was correct because I knew that .split("") seperates each index within the string and creates an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:  "Hello, LEARN Student"
// b) Verify and explain: I was incorrect because I forgot that a function needs a return in order for the function to work.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain: I was correct because the for loop is similar to the for loop I had to code during the challenges. This one is just formatted differently.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: I was correct because the modulo 2 is not equal to 0 plus using the built in method .filter(), allows us to iterate through all the numbers in the array and only return/filter out the the numbers in our conditional.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: I was correct because when calling myCodingSkills.language, it returns the array ["JavaScript", "Ruby"]. [0] refers to the element "JavaScript".

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: { student: 'George', cohort: 'Foxtrot', year: 2022 }
// b) Verify and explain: I was wrong because I forgot to include the class at the beginning of my answer. 
