/**
 *  Multiplication
 * @description All programming languages support the basic arithmetic operations of addition, subtraction, multiplication and division of numbers. The multiplication operator (*) produces the product of the operands.
 * @param {number} num1 It is the number one
 * @param {number} num2 It is the number two
 * @example  
 * multiply(3, 6)===18
 * multiply(4, 1)===5
 * multiply(-3, 2)===-6
 * multiply(-3,-3)===9
 
 * @returns {number} This gives the result multipied
 * 
 */

function multiply (num1, num2)
{ 
    if(typeof num1 !==  "number" || typeof num2 !== "number")
{
  return null ;
}
    return (num1 * num2);
}


module.exports= multiply;