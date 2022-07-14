const array = ['this thing', 'that thing', 'also this', 'oh this too']
console.log(`${array[0 + 1]} ${array[2]}, ${array[3]}`)

const lil2 = [2, 6, 9]
const lil3 = [3, 4, 0]

const bigA = [[3,4,5], [6,1,0]]
//calling something from 2d array is like corrdinate planes (x, y)
console.log(bigA[1][2])

const superA = []
//push mutilple items
superA.push('the big', 2, 'r')
//same for unshift
superA.unshift('now this one is first', 2, false)
console.log(superA)

//clean print
console.log(...superA)

//gives address of the first thing you are looking for
console.log(superA.indexOf(2))


const newA = bigA.concat(superA)
console.log(...newA)

//join it all with any character 
console.log(newA.join('! '))

// this is a long string
const longS = 'this is a run on sentce on perpous i wil keep typing for the example'
//able to split long string by a character
console.log(longS.split(' '))


