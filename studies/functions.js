/** 
 * Function: 
 * Functions encapsulate a block of repeatable code. Functions can be considered logic data.
 

 * To create a function you must first use the declare a function with the keyword function.
 * The name of the function should follow the function keyword and be written in camelCase. 
 * After the name of the function the parameters of the function should be contained in parenthesis. 
 * Following the parameters is the code body of the function which is held in curly braces. 
 */
// * declaration/definition: where you create the function
// * invocation/calling: is when you call the function to be used

// Ex. 

 function thisIsMyFunction(parameter1, parameter2) {
     return parameter1 + parameter2

 }
 
 
 // A function's parameters are optional. Depending on the code being written a function does not need parameters or return statements.
 // If a function has a parameter but its call has no argument the arguments are undefined.
 
 function thisIsMyFunction(){
     var a = 6
 }

 // To call a function we use the functions name followed by the arguments to be passed into the function.
 
//  * Ex
    thisIsMyFunction(1, 2)
// -- will return  3

 // functions can also be created as function expressions by assigning a function to a variable. 
 
 var thisIsMyFunction = function(parameter1, parameter2){
     return parameter1 - parameter2
 }
 
// Functions can contain closures which keep a parameter from the outer function alive within the inner function. 
function ourFunc(y) {
  return (x) => {
    return x * y;
  };
}

// The inner function is referencing the y parameter of the outer function. This function contains 1 closure. 

