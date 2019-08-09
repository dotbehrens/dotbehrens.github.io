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
 var dogName = 'Scotty';
 
  if (dogName === "Orbit"){ 
     console.log("tail does not wag");
 }
 else if (dogName === "Yogi") {
     console.log("tail tic - toc wags");
 }
 else if (dogName === "Tribble") {
     console.log("fastest tail in the wild, wild west");
 }
 else if (dogName === "Maggie") {
     console.log("tail will knock you down");
 }
 else {
 //   ^^covers every other possibility in one default 
     console.log("who is this dog?");
 }
 /* 
 *If the variable of dogName is found to be strictly equal to the condition then the code beneath it will run. Since the variable dogName
 *is not strictly equal to any of the conditionals the else statement will run. 'who is this dog' will be logged to the console.
  
 * Switch Statements
 *Switch Statments are used much like if-else if statements. Instead of writing out if(dogname === 'Orbit') the switch statement checks the cases to see which case cooresponds to dogName
 *if no case cooresponds to dogName then the default case will run.
 
 *to create a switch statement begin with the keyword switch

   switch
 
 *follow with the expression that is to be evaluated and open the code block with a curly brace.
 
   switch (expression)
 
 *Then create a case which is a possible answer to the expression. Start with the keyword case then follow with the possible expression and a colon. 
 
   case"some expression" :
 
 *after the colon the action place the action which you wish the code to perform if the expression is equal to the case.
 
 console.log('this will be logged to the console')
 
 *On the next line use the keyword break and a semi- colon to show that the case has ended.
 
   break
   
*Follow with as many cases as you wish and end with a default statement to act
*as your catchall. Use the keyword default followed by a colon and continue the case as you did the others.

   default:
 console.log(catch-all);
 }

 *close out the switch statement with a curly bracket.
 

 
*Why use switch statements?
* Switch statements can be useful as they may be faster and less verbose than if statements. A switch statement will check every case instead
*of stopping at the first one that resolves to true like an if statement. Switch staments are good for evaluating fixed values where as an if statement is better
* at checking expressions that result in boolean values.
*/
//Example: 
 
var dogNames;
 
 switch (dogNames) {
    
     case"Orbit":
         
         console.log("loves pumpkin");
         
         break;
         
     case"Yogi":
         
         console.log("loves to hide");
         
         break;
         
     case"tribble":
         
         console.log("loves belly rubs");
         
         break;
         
     default:
         
         console.log("who is this dog ? ");
         
 }
 
 
 