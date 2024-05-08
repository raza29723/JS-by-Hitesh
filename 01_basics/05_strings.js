const name = "Raza "
const repoCount = 50

// this is the old way for concatination 
// console.log(name + repoCount + " Value")

// and now we see a new/modern way, template literal/string interpolation/backticks method
// console.log(`Hellow my name is ${name}, and my repo count is ${repoCount}`)


const gameName = new String('Razahc')
// console.log(gameName [0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("z"))

const newString = gameName.slice(-3,4)
console.log(newString)

// slice and substring methods are same, but slice can give value in negative if you want. 
const newString2 = gameName.substring(0,4)
console.log(newString2)

// now see the trim and replace methods
const newStringOne = "     Raza       "
console.log(newStringOne)
console.log(newStringOne.trim())

// a browser can't uderstand spaces in a URL, so it replaces spaces from %20 automatically, 
// so how to set it? see
const url = "http://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
// for investigation in url
console.log(url.includes('hitesh'))
console.log(url.includes('raza'))

// split method basis on - dash
const game = 'hitesh-chohdhry-teacher and teaching on youtube'
console.log(game.split('-'))


