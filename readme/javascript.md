what i want with the javascript section

name
description
syntax
syntax explanation
a few examples


`.map()`
`.filter()`
`.reduce()`
`.forEach()`
`.reduce()`
`.then()`

i want to add more array methods

callbacks
classes
functions
arrow functions
methods
for loops
scope
objects
data types 
operators
variables


JAVASCRIPT INTRODUCTION

what
why

DATA TYPES ?

functions
  functions are a great way to write code that can be reused as many times as you need

function declaration
  function example(param1, param2){
    // Code here
  }

function expression
  let function = example(param1, param2){
    // Code here
  }

arrow function
  simply refers to the `=>`. It is a shortcut syntax to say return

  exampleArrowFunction = (num1, num2) => num1 + num2

  function(num1, num2){
    return num1 + num2
  }

arrow functions can also be used  like this

this is saying take the string(currentValue) and return the currentValue.length. this will output the length of each string

let strings = ['string', 'more strings', 'all of the strings', 'cant contain all the strings']
strings.map(string => string.length)

const func = () => {
  console.log('Oh hai der');
}

func()

ARRAY METHODS
`.map()` || `.map()` || `.map()`

the `.map` is responsible for iterating through a given array and returning a new array based on the results of what you told it to do. 

****creates an array with the new array elements that pass a test. the test will be the provided or anonymous function****


EXAMPLE 

let nums = [4,5,6,9,8,7,8,5,2]

let mappedNums = nums.map(function (num) {
  return num / 2
})

console.log(mappedNums)

it can also be written like this with a function that already does something
**************************
function divide(num){
  return num /2
}

let nums = [4,5,6,9,8,7,8,5,2]

let mappedNums = nums.map(divide)

console.log(mappedNums)


map returns new array. which means you will need to save the new array in a variable. 
map expects an `anonymous function or callback function` and a current value
if you dont know what kind of data `.map()` is using you can run a console log just like below to find out
 
let strings = ['string', 'more strings', 'all of the strings', 'cant contain all the strings']
strings.map((currentValue, index, array) => {
  console.log(currentValue);
  console.log(index);
  console.log(array);
});


`.filter()` || `.filter()` || `.filter()`



** return result new array **

when using `.filter()` on a given array, it will be looking for an `anonymous function or callback function` as a passed argument.
the given function will be executed on each element in the array. if the result is true it will copy the element and push it into a new array. if it is false it will not pass the test and not join the new array. 



objects

arrays

classes

variables

