// MEMORY IN JS 

// primitive -- >    stack memory (copy milta hi value ki)
// non-primitive ---> heap memory  (refrence milta h )

//  primitive

let myName = "RANI PAL" ;
let secondName = myName ;
secondName = "RIYA PAL" ;
// console.log(myName);--RANI PAL
// console.log(secondName);RIYA PAL

//  non-primitive
let user1 ={
    email:"rani@12",
    upi:"rani@upi"
}

let user2 = user1;
user2.email = "user@12"

// console.log(user1 )   both have same value deu to {same refrence}
// console.log(user2 )

// ########################################### string ####################################################


const name = "rani pal" ;
const age = 22
// console.log(name + age );    bad method  not use in morden era

console.log(` hello my name is  ${name} and my age is  ${age}  ` )  //use  `  `  backtack

const gname =  new String("raniii-palll")
// console.log(gname);

// string property in backend or hidden {charAt, toUppercase,  indexOf,  etc}   -->   console m mil jaegii
// console.log(gname.length);
// console.log(gname.__proto__)
// console.log(gname.charAt(5));
// console.log(gname.indexOf('p'));
// console.log(gname.toUpperCase());

const newName =  gname.substring(0, 6);  //0 to 5 index lega last nhi leta h 
// console.log(newName);

const anotherName = gname.slice(-8, 6) ;  //slice m - value lete to reverse count krta h
// console.log(anotherName);

// trim   imp [trim- unnecceray space ko remove krta memory save]

const password = "           hjvvvvvvvvvvvvvvvvvvvv         "
// console.log(password);
// console.log(password.trim());

// replace  
console.log(gname.replace('-', '&'));

// include -- khuch add krna ho to -- >>   true / false
console.log(gname.includes('pal'));

// split  -->(- se)  alg alg kr dega , like   [ 'raniii', 'palll' ]
console.log(gname.split('-'));


