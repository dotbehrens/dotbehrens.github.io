/*
*/
//  String Manipulation
// * Strings are simple data types which are immutable, cannot be changed. Howerver strings can be manipulated.
// * 
// * We can manipulate a string with the + operator. This actions is called concatination.
// * 
// * Ex
 console.log('Yogi + "Berra');
//  --- logs to the console 'YogiBerra'

//  to include a space we must also concatinate the space.
 console.log('Yogi' + ' ' + 'Berra');
// --- logs to the console "Yogi Berra"


// * Strings are accessed in indices ( start with 0) like arrays
var string = 'Dog';
console.log(string(0));
// --- returns 'D'
 
// Strings can be manipulated with methods.

 string.toUpperCase;
// * -- returns 'DOG'
 string.toLowerCase;
// * -- retuns 'dog'

// to ony capitalize the first letter
 string.charAt(0).toUpperCase();

 string.length;
// * --- gives length of string, returns 3
// .join(' ') 
'this is a sentence'.join(' ');

// -- Joins at what is in the parentheses should return 'thisisasentence'

string.Split('');

// --- Splits string at what is in the parenthesis, splits string into array

// -- returns [ 'D', 'o', 'g']
