// Create an array with a list of fruits starting with 3 fruit

// with that array now do the following
// - Add a new fruit to the end of the array
// - Display the array
// - Add a new fruit to the beginning of the array
// - Display the array
// - Remove the last fruit.
// - Display the array

let fruit = ["Mango", "Apple", "Orange"]
fruit.push("Avacado")
console.log("This is reg", fruit)
console.log("This is spread", ...fruit)

fruit.unshift("Banana")
console.log(...fruit)

fruit.pop()
console.log(...fruit)

console.log(fruit.indexOf("Mango"))

console.log(...fruit.sort())

console.log(fruit.indexOf("bruh"))

const chickenEgg = ['🐔', '🥚'].sort()
console.log(`The ${chickenEgg[0]} came first!`)
