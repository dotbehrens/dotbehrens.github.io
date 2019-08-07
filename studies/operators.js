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
 var i = 1
// * values can be reasigned
* i = 2
*		
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
// *	Binary Comparison Operators
// 		< , > , <=, >=
// 	 ==  losely equal to with compare 5 == "5"
// *	Strict Comparison Operators
// *		===  strictly equal to 
// *		!==   strictly not equal to


*Arithmetic
*	+, -, /, *
*	++  adds 1 to existing value
*	--   subtracts 1 from existing value


*Logical
*	&&     and; both conditions must be true
*	||     or; either condition may be true
*	!      bang; flips thruthiness of its value
*	!=	   not equal to 
    !==    not strictly equal to 
*	!!     double bang; makes a value boolean if it equaled 0, null, undefined now false else true

Unary Operators are operators with only one operend
Unary Operators include

Unary plus +	convert the operand into a number
Unary negation - Tries to convert the operand into a number and negates after
Logical Not !	Converts to boolean value then negates it
Increment ++	Adds one to its operand
Decrement --	Decrements by one from its operand
Bitwise not ~	Inverts all the bits in the operand and returns a number
typeof	Returns a string which is the type of the operand
delete	Deletes specific index of an array or specific property of an object
void	Discards a return value of an expression.


Binary Operators are operatros that take two operends.
Binary Operators include arithmetic and logical operators

Ternary Operators
A ternary operator takes three operentds. 
ternary operators are represented by ?

the use of it is equivalent to an if statement such as:

if ( condition ) {
  value if true;
} else {
  value if false;
}

Using a ternary operator the code can look like:
condition ? value if true : value if false