"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];


function returnTheRemainder(a, b) { 
    return a % b; 
} 
const result = returnTheRemainder(5, 4); 
console.log(result);

function checkIfEven(number){
   return number % 2 === 0; 
}
console.log(checkIfEven(20));
console.log(checkIfEven(47));

function getTheFourthElement(array) { 
    return array[3]; 
}
const fourthElement = getTheFourthElement(lostNumbers);
console.log(fourthElement);

function render() {
    returnTheRemainder(a, b);
    checkIfEven(number);
    getTheFourthElement(array);
}

submissionBtn.addEventListener("click", function () {
    render();
});