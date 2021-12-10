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