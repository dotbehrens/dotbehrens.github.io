/**
 * Control-flow
 * Conditional Statements
 * 
 * Control-flow or conditional statements are statements that decide if code runs based on boolean values. 
 * If statements will act on the first true statement is runs across and will not continue to read the rest of the statements.
 * To create an if statement we begin with the keyword if.
 * The condition which we are testing goes in parenthesis after the if statement.
 * This is followed by curly braces.
 * The code we wish to run if the conditional statement is true is held within the curly braces.
 * If statements can be followed by else if and else statements. Else statements are used as a catchall. If none of the previous 
 * conditions are met the else code will run. 
 * 
 * 
 * 
 *If -else if - else
 *Example
 */
 var dogName = 'Scotty'
 
 If(dogName === ‘Orbit’) {
     console.log(‘tail does not wag’)
 }
 else if (dogName === ‘Yogi’) {
     console.log(‘tail tic - toc wags’)
 }
 else if (dogName === ‘Tribble’) {
     console.log(‘fastest tail in the wild wild west’)
 }
 else if (dogName === ‘Maggie’) {
     console.log(‘tail will knock you down’)
 }
 else {
 //   ^^covers every other possibility in one default 
     Console.log(‘who is this dog ? ’) *
 }
  
 // If the variable of dogName is found to be strictly equal to the condition then the code beneath it will run. Since the variable dogName
 // is not strictly equal to any of the conditionals the else statement will run. 'who is this dog' will be logged to the console.
  
 * Switch
 * ex
 * Var dogName;
 *
 switch (dogName) {
     *
     case‘ Orbit’:
         *
         console.log(‘loves pumpkin’);
         *
         break;
         *
     case‘ yogi’:
         *
         console.log(‘loves to hide’);
         *
         break;
         *
     case‘ tribble’:
         *
         console.log(‘loves belly rubs’);
         *
         break;
         *
     default:
         *
         console.log(‘who is this dog ? ’);
         *
 }
 
 *
 