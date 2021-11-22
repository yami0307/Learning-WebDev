"use strict";
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');
*/

/*
function logger(){
    console.log('My name is Yami.');
}
logger();
logger();


function fruitProcessor(apples,oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3,2);
console.log(appleOrangeJuice);
*/


/*
//Function declaration - Can call the function before declaration.
//Not as systematic as function expression.
function calcAge1(birthYeah){
    return 2037 - birthYeah;
}

const age1 = calcAge1(2001);

//Function expression - Cannot call the function expression before declaration.
//Systematic
const calcAge2 = function(birthYeah){
    return 2037 - birthYeah;
}
const age2 = calcAge2(2001);

console.log(age1,age2);


//Arrow Functions

//Single Parameter.
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(2001);
console.log(age3);

// const yearsUntilRetirement = birthYeah =>{
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(2001));


//Double Parameters
const yearsUntilRetirement = (birthYeah, firstName) =>{
    const age = 2020 - birthYeah;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2001, 'Yami'));
console.log(yearsUntilRetirement(1998, 'Mohitesh'));
*/


//Functions calling functions
/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/

//return statement immediately terminates the function anything written after the 'return' keyword will not be executed.







//~~~~~~ARRAYS~~~~~~~
// When you use const to declare an array
//You can still mutate it i.e., you can change one or two elements in the array
// What you cannot do is assignment of a whole new array in you declared array.

/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const yami = ['Yami', 'Agarwal', 2020-2001, 'student', friends];
console.log(yami);
console.log(yami.length);
*/

// ~^~^~^~ ARRAY OPERATIONS ~^~^~^~

/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends.push('Jay')); //As push() is a functions it will return something
// Push return the length of the newly pushed array.
//Push adds element at the end of the array.
console.log(friends);

//To add element in front of the array we use unshift() method.
friends.unshift('John');
console.log(friends);

//To remove elements at the end use - pop()
//It returns the popped element.
console.log(friends.pop());
console.log(friends);

//To remove elements at the beginning  use - shift()
console.log(friends.shift());
console.log(friends);

//To know the index of a element in the array
//When the element is not present in the array then it returns -1
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

//includes return boolean values
//true if the element is present
//false if the element is absent
//includes checks with strict equality (===)
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push(21);
console.log(friends.includes('21')); //Strict Equality
*/




/*
// ~~~~~~~~~~~~~ OBJECTS ~~~~~~~~~~~~~~~

//object literal syntax
//In objects the order doesn't matter so much.(opposite from array.)
const yami = {
    firstName: 'Yami',
    lastName: 'Agarwal',
    age: 2020-2001,
    job: 'Student',
    friends: ['Brother', 'Mother', 'Father']
};
console.log(yami);

//Dot Notation
console.log(yami.lastName);
//Bracket Notation
console.log(yami['lastName']);

const namekey = 'Name';
//You cannot perform the following using dot notations
console.log(yami['first' + namekey]);
console.log(yami['last' + namekey]);

// const InterestedIn = prompt('What do you want to know about Yami? Choose between firstName, lastName, age, job, and friends')
// console.log(yami[InterestedIn]);//You cannot do that using dot notation.

//Adding elements to the objects
yami.location = 'India';
yami['instagram'] = '@digital_doodler';
console.log(yami);
 */
/*
const yami = {
    firstName: 'Yami',
    lastName: 'Agarwal',
    birthYeah: 2001,
    job: 'Student',
    friends: ['Brother', 'Mother', 'Father'],
    hasDriversLicense: true,

    calcAge: function (birthYeah) {
        return 2037 - birthYeah;
    }
};
console.log(yami.calcAge(2001));
console.log(yami['calcAge'](2001));



//this keyword

const yami = {
    firstName: 'Yami',
    lastName: 'Agarwal',
    birthYeah: 2001,
    job: 'Student',
    friends: ['Brother', 'Mother', 'Father'],

    calcAge: function(){
        console.log(this);
        return 2037 - this.birthYeah;
    }
};
console.log(yami.calcAge());
*/








//    !!!!!!!!!!! LOOOPS !!!!!!!!!!!
// var obj;
// console.log(obj);

//Looping Backwards and loops in loops

 
