// Prevent us from attempting to use variables
// that are not declared
"use strict"
function greet (person1, person2)
{
    console.log('Hello ' + person1 + 'and ' + person2);
}
 let names = ('Leanna', 'Michael');
 greet(...names);

 function greet (name = 'Guest') 
 {
    console.log('Hello ' + name + '!');
 }
 greet();
 greet("Jenya");


function display (char1, char2, char3, char4) {
    console.log(char1, char2, char3, char4);
}
let letters = 'abcd';
display(...letters); 
//Question for the class - it seems my function did not work properly. What was wrong with a function on line 4?