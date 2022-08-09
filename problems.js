/* 
Exersice-1: 
    Write a function to check odd or even number.
    You need to do it in 2 ways- has return and no return. 
 */

// Has return
 function findOddEven(checkNum){
    if(checkNum%2==0){
        return 'Even';
    }
    else {
        return 'Odd';
    }
 }   
//  console.log(findOddEven(532));


// Has No return
 function findOddEvenNoReturn(checkNum){
    if(checkNum%2==0){
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
 }   
//  findOddEvenNoReturn(43);









/* 
Exersice-2:
    Write a function which will take 3 integers and return the largest number. You need to do it in 2 ways- has return and no return. 
*/

// Has Return
function largeNum (num1, num2, num3){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
        return 'Please Enter Number Only';
    }
    else{
        if(num1>num2 && num1> num3){
            return num1;
        }
    
        else if(num2>num1 &&  num2>num3){
            return num2;
        }
        else{
            return num3;
        }
    }
}
// console.log('Large number is:', largeNum(32, 24, 74));


// Has no Return
function largeNumNoReturn (num1, num2, num3){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
        console.log('Please Enter Number Only');
    }
    else{
        if(num1>num2 && num1> num3){
            console.log('Large number is:', num1);
        }
    
        else if(num2>num1 &&  num2>num3){
            console.log('Large number is:', num2);
        }
        else{
            console.log('Large number is:', num3);
        }
    }
}
// largeNumNoReturn(32, 24, 23);







/* 
Exersice-3:
    Write a program to find the total price of those product object.
*/

const shoppingTotal = [
    { name: 'Laptop', color: "black", price: 12000 },
{ name: 'Monitor', color: 'gray', price: 5000 },
{ name: 'Mobile', color: 'black', price: 2500 }
];

let totalPrice = 0;
for(let i = 0; i < shoppingTotal.length; i++){
    totalPrice += shoppingTotal[i].price;
}
// console.log('Total Price:', totalPrice);



/* 
Problem-1
    Write a function that will take a radius of a circle and will return the area of circle. 
    [ Hint: Area of Circle = 𝝅𝒓𝟐 ]
 */

function circleArea(radius){
    const area = Math.PI*radius*radius;
    return area;
}
// console.log('Area of Circle is:', circleArea(5).toFixed(2));





/* 
Problem-2:
    Write a function that will take feet as the input parameter and will convert it into inch and will return the result in inch.
*/
function feetToInch(inputFeet){
    return [(inputFeet*12), 5];
}
console.log('Inch:', feetToInch(3)[0]);