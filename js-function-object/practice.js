// // Practice 1) Write a function called foo() which prints “foo” and a function called bar() which prints “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.

// function bar() {
//   console.log("bar");
// }

// function foo() {
//   console.log("foo");
//   bar();
// }

// // foo();

// // Practice 2
// function make_avg(num1, num2, num3) {
//   var average = (num1 + num2 + num3) / 3;
//   return average;
// }

// // console.log(make_avg(4, 6, 8));

// //  Practice 3
// function make_arr_avg() {
//   var sumTotal = 0;
//   for (var i = 0; i < arrAvg.length; i++) {
//     sumTotal += arrAvg[i];
//   }
//   console.log("Total input:", arrAvg.length);
//   console.log("Sum:", sumTotal);

//   var arrAverage = sumTotal / arrAvg.length;
//   console.log("Average:", parseFloat(arrAverage.toFixed(2)));
// }

// var arrAvg = [3, 6, 4, 8, 6, 7, 2, 2, 5];
// // make_arr_avg(arrAvg);

// // Practice 4

// // Has return + Has parameter
// function odd_even(oddEvenNumber) {
//   var checkNum = oddEvenNumber % 2;
//   if (checkNum == 0) {
//     return "This is an Even Number";
//   } else {
//     return "This is an Odd Number";
//   }
// }
// // console.log(odd_even(6));

// // no return + has parameter
// function odd_even2(numInput) {
//   if (numInput % 2 == 0) {
//     console.log("This is an Even Number");
//   } else {
//     console.log("This is an Odd Number");
//   }
// }

// // odd_even2(221.4);

// // Practice 5
// // var signal = "green";
// // switch (signal) {
// //   case "red":
// //     console.log("Traffic signal RED. You should stop now. You are in DANGER!");
// //     break;

// //   case "yellow":
// //     console.log("Traffic signal YELLOW. You should stop!");
// //     break;

// //   case "green":
// //     console.log("Traffic signal GREEN. You should cross the road now!");
// //     break;

// //   default:
// //     console.log("Input a signal");
// //     break;
// // }

// // Mukut Chakraborty vai
// var myBookPrice = [100, 150, 200, 220, 260, 130, 180, 190, 205];
// var i = 0;
// while (i < myBookPrice.length) {
//   var bookPrice = myBookPrice[i];

//   if (bookPrice > 200) {
//     i++;
//     continue;
//   } else {
//     console.log(bookPrice);
//     i++;
//   }
// }





// Practice Open
function namta (namtaDigit){
  for(var i = 1; i<=10; i++){
    var multiValue = namtaDigit*i;
    console.log(namtaDigit+' * '+ i + ' = '+ multiValue); 
  }
}
// namta(13);


// Practice
function lowerCaseName(userName){
  var lowerName = userName.toLowerCase();
  console.log(lowerName);
}

// lowerCaseName('HASIBUL Hasan');


// Practice
function fullName (firstName, lastName){
  var name = firstName +' '+lastName;
  return name;
}
// console.log(fullName('Hasibul', 'Hasan'));


// Practice
function sqValue (inputValue){
  var squareValue = (inputValue*inputValue);
  return squareValue;
}
// console.log(sqValue(5));



// Practice
const pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish', 
  serves: 2
 }

//  console.log(pizza.toppings[2]);


// Practice 4

// Has return + Has parameter
function odd_even(oddEvenNumber) {
  var checkNum = oddEvenNumber % 2;
  if (checkNum == 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(odd_even(5));



// Leap Year
function leapYear(year){
  if(year%4 ==0){
    return true;
  }

  else if(year%400==0 && year%100==0){
    return true;
  }

  else{
    return false;
  }
}

// console.log(leapYear(90));


// Hour to minutes
function hrToMin(hour){
  var minutes = hour*60;
  return minutes;
}
// console.log(hrToMin(1));


// Hour to Second
function hrToSec(hour){
  var seconds = hour*60*60;
  return seconds;
}
// console.log(hrToSec(4));




function oddNumber(numbers){
  const oddNumbers = []

  for(let i=0; i<numbers.length; i++){
    // console.log(numbers[i]);
    const element = numbers[i];
    if(element % 2 !==0){
      oddNumbers.push(numbers[i]);
    }

  
  }
  return oddNumbers;
}

const myOddNumber = [232, 4, 2, 45, 2345, 2, 44, 56, 335];
const oddNumbers = oddNumber(myOddNumber);
// console.log(oddNumbers);



var i = 0;
const arr = [2023, 2024, 2025, 2028, 2030], arrayLength = arr.length;
const arr1 = [];
function findLeapYear (arr){
  while(i<arrayLength){
    if(arr[i] % 4 == 0){
      arr1.push(arr[i]);
    }
    i++;
  }
  return arr1;
}
// console.log(findLeapYear(arr));



// for(var i = 0; i<20; i++){
//   if(i>15){
//     break;
//   }
//   console.log(i)
// }

















// Find unique Number
function findUnique(addNum){
  const uniqueNumberArray = [];
  for (let i = 0; i <= addNum.length; i++){
   if(uniqueNumberArray.indexOf(addNum[i]) == -1){
      uniqueNumberArray.push(addNum[i]);
    }
  }
  return uniqueNumberArray;

}

const randomNumber = [1, 3, 2, 4, 6, 2, 4, 3, 5, 6, 7, 4, 8, 3, 6];
// console.log(findUnique(randomNumber));

