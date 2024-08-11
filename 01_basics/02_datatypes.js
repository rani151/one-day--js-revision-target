// console.log(" datatypes")
let name = " Rani pal"   
let age = 22  
let isLoggenIn = false 
let state ="" 
/*
datatypes----
let name = " Rani pal" ->> string
let age = "22"  ->> number
let isLoggenIn = false  ->> boolean
bigint--- > to write bigger nums mostly use in stocks
null --[standlone value --- empty ]   let state =""
undefined -- koi value nhi h 
symbol -- (react , figma ) uniqueness 

*/

// console.log(typeof age);
// console.log(typeof null); -----> object
// console.log(typeof undefined);---> undefined

// COVERSIONS IN JS   (srting to number)

// let score = "77abc" ;
// let score = null ;
let score = true ;
// let score = undefined;
console.log(typeof(score));

// string to number
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

console.log(valueInNumber);
// console.log(valueInNumber);  --- NaN  -> in real  [note-- jaruri nhi string num m convert hone k baad uski value bhi no ho ]
// console.log(valueInNumber);  --- in case of [null] it gave  0 ;
 // console.log(valueInNumber);  --- in case of [undefined ] it gave  NaN ;
// number--> number
/* boolean 
1-> true
0-> false 
*/
