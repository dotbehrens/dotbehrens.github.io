/**
 * DATATYPES:
 * 
 * Data types are how data is catagorized in javascript. There are both complex and simple datatypes. Simple data types are limited
 * in their size and are immutible(meaning they cannot be changed). Complex data types are infinite in size, can hold both simple and complex data types within them and 
 * are mutable (meaning they can be changed.)
 * How data is catagorized in javascript
 * 
 * 
 *Primitive Datatypes
 */ 
 // * Number: numeric data 

 var number = 5;
 
 // String: character data
  var string = 'String5432!';
  
  // Boolean:
  // a boollean value is a true or false value. 
 var boolean = true || false;
 
  // NaN: not a number
  NaN;
 
 
 // undefined: no value, the value that is being evaluated is not assigned as anything
 undefined;
 
  // null: no value, nullified by programer
 null;
 // Complex Datatypes: hold other values and can be infinate in size, are mutable, can be more than 8 bytes in size. 
 
 //  Object: Can contain strings, numbers, functions, arrays or other objects. Contained in key:value pairs, wraped in curly brackets {}
 //  Key is always a string. 
   
 // Ex.
 
 var dotObj = 
     {
         Name: 'Dot',
         numberOfPets: 5,
         NamesOfPets: ['Maggie', 'Orbit', 'Yogi', 'Tribble', 'Padfoot']
     };
 
//  * Array: 
//  *  Ex. ;
 var array = [ 'String' , 5, ['string', 5, 6,]];
 
 
//  * Function: Functions encapsulate a block of repeatable code. Can be considered logic data.
//  * declaration/definition: using keyword 'function' to declare a function

   // Ex. 
 function thisIsMyFunction (){
     
 }

 // Infinity and Negative Infinity
 // Infinity and -Infinity are properties of the global opject. 
 // Inifinity represents a number that is greater than any value.
 // -Infinfity represents a number that is less than any value.
 // These can be referenced as:
 Number.POSITIVE_INFINITY;
 Number.NEGATIVE_INFINITY;
 
 
 // Copy by Value vs Copy by Reference
 // Primitive Datatypes are copied by value. This means that when a primitive data type is referred to a copy of it is made.
 // Any changes that are made from there are only made to the copy not the original.
 
 var str = 'tribble';
 // starting with a string of 'tribble' that we want to make all uppercase
 str.toUpperCase();
 // here we reference str but we are creating a copy of the original str
 console.log(str.toUpperCase());
 // if we console.log str.toUpperCase() 'TRIBBLE' will be logged to the console.
 console.log(str);
 // but if we console.log(str) the original string will be logged to the console, unchanged
 
 // Complex Data types are coppied by referrence. This is due to the potential size of the datatype.
 // When a complex data type is refferenced no copy is made. When the refference changes the datatype it changes the original datatype.
 
 var pups = {
  orbit: 'poodle',
  yogi: 'poodle',
  tribble: 'poodle',
  maggie: 'poodle'
 };
 
 // We can refference the pup object and change maggie to 'boxer'
pups.maggie = 'polar bear';

// this changes the original object.
console.log(pups);
 // -- logs {
 //  orbit: 'poodle',
 //  yogi: 'poodle',
 //  tribble: 'poodle',
 //  maggie: 'polar bear'
 // }
 
 // If we assign the variable truth to the variable pups there is only one object, no copy is created.
 // Changing the maggie value in the truth object will also change the pups object.Accounts
 
 var truth = pups;
 // truth.maggie = 'boxer'
 console.log(truth);
 // -- logs { 
 //  orbit: 'poodle',
 //  yogi: 'poodle',
 //  tribble: 'poodle',
 //  maggie: 'boxer'
 // }
 console.log(pups);
 // -- logs  {
 //  orbit: 'poodle',
 //  yogi: 'poodle',
 //  tribble: 'poodle',
 //  maggie: 'boxer'
 // }