// node 01_basics/04_datatypes.js --------------start command

/*
PREMITIVE DATA TYPES---   [7]
string, number, boolean, null, undefined, bigint(scientific value -- trading ),symbol(advanced frontend- to maintain uniquenes)
*/


/*
NON-PREMITIVE DATA TYPES---   [REFRENCE]
ARRAY:
OBJECTS:
FUNCTIONS:
*/

// SYMBOL
const id = Symbol('123') ;
const anotherId = Symbol('123')
// console.log(id === anotherId);  ----> false  we use symbol to maintain uniqueness
// console.log(id);
// console.log(anotherId);

// const bigNumber = 2565566767655686n   /*  bigint*/
// console.log(typeof(bigNumber));

// array
// const vegitables = [onion, potato, tomato, ginger]


// onject - defined under  {}
// var  myIntro = {
//     name: "RANI PAL",
//     age:22,
//     edu:"btech"
// }

// function  (like variable)
// const myFunction = function(){
//     console.log("HELLO FUNCTION");
    
// }

// console.log(typeof myFunction);01_basics/04_datatypes.js
// console.log(typeof  myIntro);
// console.log(typeof vegitables);

// NOTE-- JO BHI NON PRIMITIVE DT H UNKA TYPEOF--- DATATYPE fuunction aata with obj