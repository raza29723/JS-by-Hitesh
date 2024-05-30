// arrays

const myArr = [1, 2, 3, 4]
const myCartoons = ["tomjerry", "benten", "pokemon"]



const myArr2 = new Array(8, 1, 2, 3, 4, 5, 6, 7)
// console.log(myArr2[1])

// myArr2.push(9)
// myArr2.push(78)
// myArr2.pop()

// myArr2.unshift(12)
// myArr2.shift()
// console.log(myArr2)

// console.log(myArr2.includes(9))
// console.log(myArr2.indexOf(8))


// const newArr = myArr2.join()

// console.log(myArr2)
// console.log(newArr)


// slice and splice 
// console.log("A", myArr2)

const myn1 = myArr2.slice(1,4)

// console.log(myn1)
// console.log("B", myArr2)

const myn2 = myArr2.splice(1,4)
// console.log("C", myArr2)

// console.log(myn2)
// console.log(myArr2)

// Arrays Part 2
const marvel_heros = ['thor','ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// spread operator in Array
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [8, 10, 12], 7, [18, 20, [40, 50]] ]

const another_new_array = another_array.flat(Infinity)

console.log(another_new_array)


console.log(Array.isArray("Raza"))
console.log(Array.from("Raza"))

console.log(Array.from({name: "Raza"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


