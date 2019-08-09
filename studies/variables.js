/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// Hoisting
// variables are hoisted to the top of the scope when an a code is run. The value of the variable is not hoisted.


console.log(name);
var name = 'Dot';

//hoisted:
// var name;
// console.log(name)
// name = 'Dot'
// the code logs undefined because when console.log is called the name variable has not been defined yet. 
// if the variable had not yet been initialized then we would get a reference error, but because the variable is hoisted, 
// the variable is initialized before the console.log is called.

// let and const are not hoisted

console.log(dotsName);
let dotsName = "Dot";

// -- returns a reference error because let name has not been initialized

// the same goes for const

console.log(dotName);
const dotName = "Dot";

// -- also returns a reference error because const name has not been initalized

