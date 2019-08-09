/**
 * Operators
 * 
 * 
 * Operators perform cations on data, they can be arithmetic, assignment, logical or comparison 

*
* 
* Assignment Operators
* Assignment Operators assign a value
*/ 

// the  = operator assigns values to something
 var i = 1;
// * values can be reasigned
     i = 2;
	
// *       +=  ---- adds to the existing value and asigns the new value to the existing value at the same time
count = 0
count += 1
count = 1

// *       -=  ---- subtracts from the existing value and asigns the new value to the existing value at the same time
count = 5
count -= 2
count = 3
// *       /=  ---- divides the existing value and asigns the new value to the existing value at the same time

count = 15
count /= 5
count = 3
// *       *=  ---- multiplys the existing value and asigns the new value to the existing value at the same time

count = 3
count *= 3
count = 9

// *Comparison Operators evaluate to true or false.
// *	Binary Comparison Operator
// 		< , > , <=, >=
5 < 6
5 > 4
5 <= 5
5 >= 2
// 	 ==  losely equal to will compare unlike data types
"5" == 5
// *	Strict Comparison Operators
// *		===  strictly equal to 
5 === 5
// *		!==   strictly not equal to
5 !== 6
5 !== '5'


// *Arithmetic
// *	+, -, /, *
 1 + 1
//  --- return 2
 1 - 1
//  --- return 0
 1 / 1
//  --- return 1
 1 * 1 
//  --- return 1


//  ++  adds 1 to existing value , useful for incrementing and counting
 var count = 0
 count++
 console.log(count)
//  ---  return 1


//  --   subtracts 1 from existing value
var count2 = 1
count2 --
console.log(count2)
//  --- returns 0


// *Logical

var a;
var b;
var c;
// *	&&  and; both conditions must be true
if( a === b && b === c){
    console.log('a is equal to c');
}

// *	||     or; either condition may be true
if(a === 0 || b === 0){
    console.log('there is a 0');
}

// *	!      bang; flips thruthiness of its value
if(!a){
    a = 0;
}
//  --- reads if there is no a variable then a is assigned to 0

// *	!=	   not equal to 

if('5' != 5){
    return false;
}
    // !==    not strictly equal to 
if('apples' !== 'oranges'){
    return true;
}    

// *	!!     double bang; makes a value boolean if it equaled 0, null, undefined now false else true

// Unary Operators are operators with only one operend
// Unary Operators include

// Unary plus +	convert the operand into a number
// Unary negation - Tries to convert the operand into a number and negates after
// Logical Not !	Converts to boolean value then negates it
// Increment ++	Adds one to its operand
// Decrement --	Decrements by one from its operand
// Bitwise not ~	Inverts all the bits in the operand and returns a number
// typeof	Returns a string which is the type of the operand
// delete	Deletes specific index of an array or specific property of an object
// void	Discards a return value of an expression.


// Binary Operators are operatros that take two operends.
// Binary Operators include arithmetic and logical operators

// Ternary Operators
// A ternary operator takes three operentds. 
// ternary operators are represented by ?

// the use of it is equivalent to an if statement such as:

// if ( condition ) {
//   value if true;
// } else {
//   value if false;
// }

// Using a ternary operator the code can look like:
// condition ? value if true : value if false
a === b ? c = 5: c = 7;
// --- if a is stricly equal to b, c will be assigned to 5, otherwise c will be assigned to 7