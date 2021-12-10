/*

# 1

1. You are given an array of names.
2. Create 2 variables using let: Santa and deer. Deer variable should return an array.
3. Using for of loop, loop through the array.
4. Add if else statement inside the loop find 'Santa Claus' and assign it to the variable Santa.
After that using push method add the rest of the names to the deer arr.
5. Console log santa variable
6. Console log deer variable

*/
arr = ['Prancer', 'Dasher', 'Vixen', 'Comet', 'Cupid', 'Santa Claus', 'Donner', 'Blitzen', 'Rudolph']

let santa
let deer = []
for (let i of arr) {
  if (i === 'Santa Claus') {
    santa = i
  } else {
    deer.push(i)
  }
}
console.log(santa)
console.log(deer)

/*

# 2

Santa messed up a bit with his computer and the list of children's names became a one
whole word. Help Santa to make the list readable again for Santa

1. You are given a string where each name starts with the upper case letter.
2. create a function splitString that takes 1 argument: string
3. Inside the function: 
  1) Create sting names using let variable.
  2) Using for of loop, loop through the string.
  3) Using if else statement, check whether the char is upper case letter.
  If it is, add it to the names string with the single space before this char.
  If not, simply add this char to the names string
  4) Function should return names
4. console.log splitString function using kids string as an argument.

*/

kids = 'JaneDaisyMikeSunnyRichardSusanDan';

function splitString(string) {
  let names = ''
  for (let char of string) {
    if (char === char.toUpperCase()) {
      names += ` ${char}`
    } else {
      names += char
    }
  }
  return names
}

console.log(splitString(kids))

/*

3. 

Help Santa to organize all his gift in a pyramid.
It should return
[
  [ 'S' ],
  [ 'S', 'S' ],
  [ 'S', 'S', 'S' ],
  [ 'S', 'S', 'S', 'S' ],
  [ 'S', 'S', 'S', 'S', 'S' ],
  [ 'S', 'S', 'S', 'S', 'S', 'S' ]
]

*/

numberOfGifts = 6

function giftPyramid(n) {
  let result = Array.from({
    length: n
  }, (x, i) => Array(i + 1).fill('S', 0))
  console.log(result)
}

giftPyramid(numberOfGifts)

/*

4. */