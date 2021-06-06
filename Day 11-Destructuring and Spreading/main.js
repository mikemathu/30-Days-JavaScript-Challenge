// Destructing Arrays
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

// console.log(numOne, numTwo, numThree)

const names = ['Mike', 'Smith', 'John', 'James']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backEnd] = fullStack

// console.log(frontEnd)
// console.log(backEnd)

const number = [1, 2, 3]

const [numberOne, , numberThree] = number

// console.log(numberOne, numberThree)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...more] = nums

// console.log(num1, num2, num3)
// console.log(more)

// Destructuring during iteration




