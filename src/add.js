//@ts-check

/**
 * 
 *  Addition 
 *   
 * @param {number} num1 This is the first number
 * @param {number} num2 This is the second number
 * @example 
 * add(1,5)===6
 * add(6,5)===11
 * add(-2,4)===2
 * add(0,3)===3s
 * add(-5,-5)===-10
 * add(a, 4)=== null
 * add(c, b)=== null
 * add([], 4)=== null
 * @returns {number} This function will add the numbers 
 * @description All programming languages support the basic arithmetic operations of addition, subtraction, multiplication and division of numbers. 
 * The addition operator is also used to add two numbers.
 * 
 */




function add(num1, num2)
{if(typeof num1 !==  "number" || typeof num2 !== "number")
{
    return null ;
}
// eslint-disable-next-line
return num1 + num2;


}

 

 
module.exports= add; 


// function multiply (num1, num2)
// {
//     return (num1 * num2);
// }
// module.exports= {add,multiply};



