/** Explain while, for, and for-in loops
 * 
 * Loops are used to itterate over collections of Data, allows to repeat code as many times as we want 
 * For loops- best for itterating over everything else
 * While Loops will run as long as the condition is not met. This is useful for counting.
 * For In Loops - best to iterate over objects
 */
//  * For loops 
//  * for (var i = 0; <--- where the loop will begin
//  * for (var i =0; i<5:  <----- loop will continue as long as i is less than 5
//  * for( var i = 0; i<5; i++) <----- I will increment by 1 until the stopping condition is met
 
 

 for (var i = 0; i < 5; i++) {
       console.log(i);
 }
 
 for (var j = 18; j > 0; j--){
     console.log(j);
 }
 
 var array = [ 'this', 'is', 'an', 'array'];
  
 for(var k = 0; k < array.length; k++){
     console.log(array[k]);
 }
//  * To loop backwards over an array: start at the last position in the array, increment down by one each iteratation
 
  
  for (var m = array.length - 1; m > -1; m--) {
    console.log(array[m]);
  }
 
 
//  * For in loop : best for looping over objects
//  * for (var key in object)<---- creates variable key and declares which object it is in
//  * for (var key in object){
//      console.log(key);  <----- logs the key strings within the object
//      console.log(object[key]) <--- logs the value of the keys within the object
//  }
var object = { key: 'value'};

for (var key in object){
     console.log(object[key]);
}
 
 
//  * While Loop
//  * will run as long as a condition is not met
//  * var count = 0 <---- create variable to loop into
//  * while(count< 5){   <------ will continue until count is less than 5
//      console.log(count);
//      count++;
 
 var count = 0;
 while(count < 5){
      console.log(count);
      count ++;
 }
//  -- will log 0 1 2 3 4 
 



