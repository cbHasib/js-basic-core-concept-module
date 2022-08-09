var student = {
  id: 115,
  name: "solaiman khan",
  class: 9,
  marks: 98,
};

var mobile = {
  brand: "Samsung",
  price: 23000,
  ram: "8GB",
  rom: "128GB",
  camera: "50MP",
};

mobile.brand = "has";

// console.log(mobile["brand"]);

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 5,
};
// when i know the specific properties name use dot notaion to get name
// var penCount = shoppingCart.pen;
//alternative way. when i know the specific properties name use dot notaion to get name
// var penCount2 = shoppingCart['keyboard']
var propertyName = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart);

// console.log(propertyName);

function nameValue(proName, proValue) {
  for (var i = 0; i < proName.length; i++) {
    console.log(proName[i] + " = " + proValue[i]);
  }
}

// nameValue(propertyName, propertyValue);

// nameValue([23, 345, 345], ["hasib", "tanjil", "mahadi"]);

// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

// var num = []

function findOddSum(inputNum) {
  let oddSum = 0;

  for (var position = 0; position < inputNum.length; position++) {
    if (inputNum[position] % 2 == 0) {
      continue;
    } else {
      oddSum += inputNum[position];
    }
  }

  return oddSum;
}
var num = [5, 7, 8, 10, 45, 32, 34, 25, 57, 22, 445];
// console.log(findOddSum(num));





function oddEven(inpValue){
    if(inpValue%2==0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
console.log(oddEven(34));