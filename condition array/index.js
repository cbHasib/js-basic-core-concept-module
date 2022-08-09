var  numbers = [45, 56, 34, 3456, 345, 346];

// 1. get element value by index
var second = numbers[1]
// console.log(second);

// 2. set element value by index
numbers[1] = 99;
numbers[3] = 44444;
// console.log(numbers);

// 3. Find index of an element
var positionIndex = numbers.indexOf(342);
console.log(positionIndex);