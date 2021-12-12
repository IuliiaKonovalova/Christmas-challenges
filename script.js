/*

# 1

1. You are given an array of names.
2. Create 2 variables using let: Santa and deer. Deer variable should return an array.
3. Using for of loop, loop through the array.
4. Add if else statement inside the loop find 'Santa Claus' and assign it to the variable Santa.
After that using push method add the rest of the names to the deer arr.
5. Return the following:

Leader: Santa Claus
Deers: Prancer,Dasher,Vixen,Comet,Cupid,Donner,Blitzen,Rudolph

*/
arr = ['Prancer', 'Dasher', 'Vixen', 'Comet', 'Cupid', 'Santa Claus', 'Donner', 'Blitzen', 'Rudolph']

function getSantaDeer(arr) {
  let santa
  let deer = []
  for (let i of arr) {
    if (i === 'Santa Claus') {
      santa = i
    } else {
      deer.push(i)
    }
  }
  return `Leader: ${santa}\nDeers: ${deer}`

}
console.log(getSantaDeer(arr))

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

splitString(kids)

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
  return result
}

giftPyramid(numberOfGifts)

/*

4. 

Help Santa to find most valuable gift

*/

const listKids = [{
    name: 'Sarah',
    gift: 'Puzzles',
    price: 20
  },
  {
    name: 'Tim',
    gift: 'Lego set',
    price: 120
  },
  {
    name: 'Joanna',
    gift: 'Doll',
    price: 35
  },
  {
    name: 'William',
    gift: 'Car',
    price: 55
  }

]

function getHighestPrice() {
  let pricesArray = []
  for (let i of listKids) {
    pricesArray.push(i.price);
  }
  return Math.max(...pricesArray);
}


/*

5. 

Help Santa to build set a Christmas tree:
       *
      * *
     * * *
    * * * *
   * * * * *
  * * * * * *

*/

function ChristmasTree(number) {
  for (let i = 0; i <= number; i++) {
    let tree = '';
    for (let spaceBefore = 0; spaceBefore <= number - i; spaceBefore++) {
      tree += " ";
    };
    for (var stars = 0; stars <= i; stars++) {
      tree += " *";
    };
    return tree;
  };
};

ChristmasTree(5);

/*

6. Help Santa to figure out what kind of message he got for Christmas

*/

message = 'äÄçÇéÉêMçÇéÉerçÇéÉrþyú ChrþúiçÇéÉstçÇéÉmasçÇéÉ!ÖÐçÇéÉþúÚ'

function cleanMessage(str) {
  newStr = str.replace(/[^\x20-\x7E]/g, '');
  return newStr
}

cleanMessage(message);

/*

7. Elves has to count how many balls of each color they have to decorate their Christmas tree.
They know that they have only red, blue, and yellow balls.
Count how many balls they have got.
And help them to send a message to Santa: "We have ... red balls, ... blue balls, ... yellow balls."

*/

arrBalls = ['red', 'blue', 'yellow', 'blue', 'red', 'blue', 'red', 'blue', 'yellow', 'red', 'yellow', 'blue', 'red', 'red', 'blue', 'yellow', 'yellow', 'red', 'red'];
arrBalls2 = ['red', 'blue', 'yellow', 'blue', 'red', 'blue', 'red', 'blue'];
arrBalls3 = ['red'];

function arrangeBalls(arr) {
  let redBalls = [];
  let blueBalls = [];
  let yellowBalls = [];
  for (let i of arr) {
    if (i === 'red') {
      redBalls.push(i)
    } else if (i === 'blue') {
      blueBalls.push(i)
    } else if (i === 'yellow') {
      yellowBalls.push(i)
    }
  }
  let message = `We have ${redBalls.length} red balls, ${blueBalls.length} blue balls, ${yellowBalls.length} yellow balls.`
  return message
}

console.log(arrangeBalls(arrBalls))
console.log(arrangeBalls(arrBalls2))
console.log(arrangeBalls(arrBalls3))

/*
8.


*/

function congratulateStranger(stranger) {
  class Human {
    constructor(name) {
      this.name = name
    }
    congratulations() {
      return `Dear ${this.name[0].toUpperCase() + this.name.slice(1)}, Merry Christmas!`
    }
  }

  let person = new Human(stranger)
  let mess = person.congratulations()
  return mess
}

console.log(congratulateStranger('Cat'))


/*
9.

*/

const elvesPhoneBook = [{
    name: 'Sugarplum Mary',
    phoneNumber: '077 2027 8159',
  },
  {
    name: 'Shinny Upatree',
    phoneNumber: '079 1122 0940',
  },
  {
    name: 'Pepper Minstix',
    phoneNumber: '079 5957 0940',
    price: 35
  },
  {
    name: 'Bushy Evergreen',
    phoneNumber: '079 0940 5957',
    price: 55
  },
  {
    name: 'Alabaster Snowball',
    phoneNumber: '078 4772 1332',
    price: 55
  },
  {
    name: 'Wunorse Openslae',
    phoneNumber: '078 4772 5555',
    price: 55
  }

]

//6
elves = ['Sugarplum Mary', 'Shinny Upatree', 'pepper Minstix', 'Bushy Evergreen', 'Alabaster Snowball', 'Wunorse Openslae', ]

tasks = ['make cars', 'ring bells', 'make dolls', 'decorate Christmas tree', 'clean rooms', 'write carols']

// function arrangeTasks(elves, tasks) {
//   let tasksAssign = []
//   for (let elf of elves) {
//     let elfTask = []
//     elfTask.push(elf)

//   }
//   for (let i of tasks) {
//     let task = []
//     console.log(i)
//     console.log(tasks[i])
//     task.push(tasks[i])
//     elfTask.push(task)
//   }
//   tasksAssign.push(elfTask)
//   return tasksAssign
// }

// console.log(arrangeTasks(elves, tasks))
// Jingle Bells, Jingle Bells,
// Jingle all the way!
// Oh, What fun it is to ride
// In a one horse open sleigh.
// Jingle Bells, Jingle Bells,
// Jingle all the way!
// Oh, What fun it is to ride
// In a one horse open sleigh.

function arrangeElves(elves) {
  elves.sort()
  let elvesUpper = []
  for (let elf of elves) {
    let elfUpper = ''
    elfUpper = elf.toUpperCase()
    elvesUpper.push(elfUpper)
  }

  return elvesUpper
}

console.log(arrangeElves(elves))