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



*/

kids = ['Jane', 'Daisy', 'Mike', 'Sunny', 'Richard'];
gifts = ['doll', 'Lego set', 'car', 'puzzles', 'book'];
address = ['address1', 'address2', 'address3', 'address4', 'address5'];

const kid1 = {};
const kid2 = {};
const kid3 = {};
const kid4 = {};
const kid5 = {};

function (kids, gifts, address) {
  for (let i of kids.length) {

  }
}