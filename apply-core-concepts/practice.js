// Text Practice 1
function celToFr(celInput) {
  let result = celInput * (9 / 5) + 32;
  return parseFloat(result);
}

// console.log(celToFr(234));

// Text Practice 2
function frToCel(frInput) {
  let result = (frInput - 32) * (5 / 9);

  return parseFloat(result);
}

// console.log(frToCel(435));

// Text Practice 3
function findGrade(marksInput) {
  if (marksInput >= 80 && marksInput <= 100) {
    return "Your Grade is A+";
  } else if (marksInput >= 70 && marksInput < 80) {
    return "Your Grade is A";
  } else if (marksInput >= 60 && marksInput < 70) {
    return "Your Grade is A-";
  } else if (marksInput >= 50 && marksInput < 60) {
    return "Your Grade is B";
  } else if (marksInput >= 40 && marksInput < 50) {
    return "Your Grade is C";
  } else if (marksInput >= 33 && marksInput < 40) {
    return "Your Grade is D";
  } else if (marksInput >= 0 && marksInput < 33) {
    return "Your Grade is F";
  } else {
    return "Input a Valid Marks";
  }
}

// console.log(findGrade(84));

// Interest Practice 4
function findInterestMoney(depositMoney, totalYear, rate) {
  let interestRate = rate; // in Parcentage
  let moneyReceive = 0;
  let interestMoney = 0;

  for (let i = 1; i <= totalYear; i++) {
    interestMoney = (depositMoney * interestRate) / 100;
    moneyReceive = depositMoney + interestMoney;
    depositMoney = moneyReceive;
  }
  return moneyReceive;
}
console.log(findInterestMoney(100, 5, 4));

// factorial

function findFactorial(factNum) {
  let factResult = 1;
  for (let i = factNum; i > 1; i--) {
    factResult *= i;
  }

  return factResult;
}

// console.log(findFactorial(5));

// Smallest number
function fintSmallest(arrNum) {
  let smallestNumber = arrNum[0];
  for (let i = 0; i < arrNum.length; i++) {
    if (smallestNumber > arrNum[i]) {
      smallestNumber = arrNum[i];
    }
  }
  return smallestNumber;
}
const randomNumbers = [
  24,
  2,
  4,
  5,
  545,
  57,
  234,
  ,
  0,
  12,
  45,
  324,
  354,
  6,
  6,
  2,
  56,
  678,
  1,
];
// console.log(fintSmallest(randomNumbers));

// Smallest Number from 3 input
function smallNum(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num3 < num2 && num3 < num2) {
    return num3;
  } else {
    return num2;
  }
}
// console.log(smallNum(32, 25, 12));

// Array Average
function fintArrayAverage(avrArray) {
  let arraySum = 0;

  for (let i = 0; i < avrArray.length; i++) {
    arraySum += avrArray[i];
  }
  const avgArrayresult = arraySum / avrArray.length;

  return avgArrayresult;
}
const avgArrayInput = [2, 4, 6, 0, 2, 2, 4, 4];
// console.log(fintArrayAverage(avgArrayInput));

// Area
function findArea(length, width) {
  const area = length * width;
  return area;
}

// console.log(findArea(4, 3));

// 2nd Largest number
function findSecondLargestNumber(arrNum) {
  let largestNumber = arrNum[0];
  let secondLNumber = arrNum[0];
  for (let i = 0; i < arrNum.length; i++) {
    if (largestNumber < arrNum[i]) {
      largestNumber = arrNum[i];
    }
  }
  arrNum[arrNum.indexOf(largestNumber)]=0;

  for (let i = 0; i < arrNum.length; i++) {
    if (secondLNumber < arrNum[i]) {
      secondLNumber = arrNum[i];
    }
  }

  return {secondLNumber, largestNumber};
}
const arrSec = [2, 63, 21, 3, 5, 45, 56, 22];
// console.log(findSecondLargestNumber(arrSec));





// Video Practice 1
function maxNum (num1, num2, num3){
    return Math.max(num1, num2, num3);
}

// console.log(maxNum(34, 66, 23));




function areaCircle(r){
  let circleArea = Math.pow(r, 2)*Math.PI;

  return circleArea;
}

// console.log(areaCircle(3));




// Grade Function 

function gradeFindOut (marks){
  if(marks >= 80 && marks <= 100){
    return 'You got A+'
  }

  else if(marks >= 70 && marks <80){
    return 'You got A'
  }

  
  else if(marks >= 60 && marks < 70){
    return 'You got A-'
  }

  
  else if(marks >= 50 && marks < 60){
    return 'You got B'
  }

  
  else if(marks >= 40 && marks < 50){
    return 'You got C'
  }

  
  else if(marks >= 33 && marks < 40){
    return 'You got D'
  }

  
  else if(marks >= 0 && marks < 33){
    return 'You Failed!'
  }


  else{
    return 'Invalid Input'
  }


}


console.log(gradeFindOut(82));


