"use strict";
function add(num1, num2) {
    // we can types on variable and parameter to make it clear which kind of value is accepted here ex : number type,string type,boolean type , object type  , array types
    return num1 + num2;
}
console.log(add(1, 2));
const num1Element = document.getElementById('num1'); //HERE I DEFINE THE TYPES 
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button'); //ignore the null case and take the other value 
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value; //value always return number 
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    console.log(result);
});
