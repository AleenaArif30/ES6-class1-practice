



// Variable scoping

// var
var name = "alina"
console.log(name)
var name = 'arif'          // redeclare        
name = "fatima"            //update
console.log(name)


// let
let firstname = "alina"
// let firstname = "ayesha"     cant redeclare
firstname = "arif"    //update
console.log(firstname)



// const

const lastname = "umer"

console.log(lastname)
// lastname = "hamza"  cant update
console.log(lastname)
// const lastname = 12 cant redeclare


//scoping

let b = 100
let c = 200
if (true) {
  var a = 10
  let b = 20
  const c = 30
  console.log(a, b, c)
}

console.log(a, b, c)



//function scop


function myfunction() {
  var a = 0
  let b = 1
  const c = 3
  console.log(a, b, c)
}
myfunction()
// console.log(a)
console.log(b)
console.log(c)

//Destructuring
//Array destructuring


let array3 = [1, 2, 3]
let zero = array3[0]  //old method
console.log(zero)

let [q, w, e] = array3
console.log(q, w, e) //new method

//object destructuring


let obj = {
  age: 20,
  year: 2003
}
// obj.age = 30
let up = { ...obj, age: 30, edu: "bscs" }
console.log(obj)
console.log(up)

let { age, year } = { age: 40, year: 2000 } //
console.log(age) //new



//spread operator

let array1 = [1, 2, 4, 4, 5, 6]
let [u, i, ...rest] = array1
console.log(u, i, rest)
let addd = [1, 2, 3, 4, 556, 3, 7, 78, 8]
function add(a, b, ...rest) {
  console.log(a, b, ...rest)
}

add(...addd)

























// primitive datatype
// String
let names = "alina";
console.log('my string is ' + name);
console.log('datatype  is ' + typeof (name));


// Numbers
let marks = 34
console.log("datatype is " + typeof (marks))

// Boolean

let isDriver = true
console.log("datatype is " + typeof (isDriver))

// null

let nullvar = null;
console.log("datatype is " + typeof (nullvar))

// undefine

let undef = undefined
console.log("datatype is " + typeof (undef))

// Non-primitivr datatype
// Arrays

let myarr = [1, 2, 3, 4, "alina", true]
console.log("datatype is " + typeof (myarr))

// Object literal

let stmarks = {
  alina: 70,
  ayesha: 60,
  amna: 50,
}
console.log('datatype is ' + typeof (stmarks))


function myfun() {

}
console.log("datatype is " + typeof (myfun))

let date = new Date
console.log("datatype is " + typeof (date))

//  primitive datatype


let num1 = 5
let num2 = num1
console.log(num1)
console.log(num2)
num1++
console.log(num1)
console.log(num2)

// non-primitive datatype


let array = [1, 4, 7]
let array2 = array
console.log(array)
console.log(array2)
array.push(2)
console.log(array)
console.log(array2)


// callback function


function myFunc2() {
  console.log("I am func 2");
}
function myFunc(Callback) {
  console.log(Callback);
  Callback()
}
myFunc(myFunc2)

// function hello(){
//   console.log('hello world')
// }

// setTimeout(hello,2000)
setTimeout(() => {
  console.log("helllo world")
})
function sum(a, b) {
  console.log(a + b)
}
function calculate(a, b, Callback) {
  Callback(a, b)
}

calculate(1, 2, sum)