// Primitives
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, Bigint 
// const score = 100
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id === anotherId)

const bigNumber = 68444687761565446765454665456984n


// Reference (non-primitives)
// 3 types: Array, Objects, Functions

const cars = ["suzuki", "toyota", "honda", "kia", "nissan"]
let myObj = {
    name : "hitash",
    age : 22
}

/*   const myFunction =   function(){
            console.log("Hellow World")
   }
 
   myFunction()

   console.log(typeof myFunction)  */

   /*All Components DataTypes
   All return types in this lecture..
   Primitives
   score = number
   isLoggendIn = boolean
   outsideTemp = object
   userEmail = undefined
   id = symbol
   bigNumber = bigInt


   Reference
   heros = object
   myObj = object
   myFunction = function

   */
 
   /* Lecture no 10.. There are two types of memory, Stack and Heap memory
   Stack (Primitives), Heap (Reference)
   
   */
   
let myYoutubeName = "hitesh"
let anotherName = myYoutubeName


anotherName = "Sharma"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email : "userhiesh@google.com",
    upid : "54564865465"

}

let userTwo = userOne

 userTwo.email = "userTwo@gmail.com"
console.log(userOne)
console.log(userTwo)