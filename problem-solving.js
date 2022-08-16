/* 
1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of apples is tk 700.
*/
let momGaveMoney = 1000;
let expenceAmount = 700;
const backMoney = momGaveMoney - expenceAmount;
// console.log('Shopkeeper will return:', backMoney);

/* 
2) Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
*/
const mathematicsMarks = 87;
const biologyMarks = 45;
const chemistryMarks = 78;
const physicsMarks = 98;
const banglaMarks = 83;
const averageMarks =
  (mathematicsMarks +
    biologyMarks +
    chemistryMarks +
    physicsMarks +
    banglaMarks) /
  5;
// console.log(averageMarks);

/* 3) John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings(‘I am going to be’ and ‘an awesome web developer’) and print them in one line. Help John write the program. */
const firstVar = "I am going to be";
const secondVar = "an awesome web developer";
const result = firstVar + " " + secondVar;
console.log(result);

/* 4) Sarah's mother is teaching her mathematics. She gave Sarah the number 119 and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program. */
const inputNum = 119;
const remainder = 119 % 5;
// console.log(remainder);

/* 5) নিচের ভেরিয়েবল ডিক্লেয়ার এ কোনটার মধ্যে কি কি সমস্যা আছে। দেখত বের করতে পারো কি না?

    1. Var price = 33
    2. var name - Shabana
    3. var boxName = ‘Cocola;
    4. var 88_price = 34;
    5. var enum = -1;
    6. var _$box’78 = ‘Monika’;
    7. var home-address = “kochu khet”; 

Answer
    1. Var hobe na, var hobe and semiclone nei ";"
    2. equal sign nei. (var name = ..), and string inverted comma nei (""), and semiclone..
    3. string er inverted comma ache but ekpase. sese nei
    4. var name er suru tei number hobe na. interdem comman nei 
    5. enum is a reserve word
    6. var name a emn ' ' lekha thake a na
    7. dash hobe na

*/

/* 
6) You are given an array:
    var fruits = ['Apple', 'Banana', 'Orange'];
    a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
    b) Remove ‘Orange’ and add ‘Watermelon’.
*/
var fruits = ["Apple", "Banana", "Orange"];
const indexOfBanana = fruits.indexOf("Banana");
// console.log('Index of Banana:', indexOfBanana);
fruits[indexOfBanana] = "Mango"; // replace ‘Banana’ with ‘Mango’.
// console.log('Replace Banana with Mango:', fruits);
fruits.pop(); // Remove Orange
// console.log('Remove Orange:', fruits);
fruits.push("Watermelon"); // Add Watermelon
// console.log('Add Watermelon:', fruits);

/* 
7) You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40. The grading chart is
    80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less => F grade
Write a program to find your and your friends’ grades using
if-else. 
*/
const marks = 97;

if (marks >= 80 && marks <= 100) {
  // console.log('You got A Grade');
} else if (marks >= 60) {
  // console.log('You got B Grade');
} else if (marks >= 50) {
  // console.log('You got C Grade');
} else if (marks >= 40) {
  // console.log('You got D Grade');
} else if (marks < 40 && marks >= 0) {
  // console.log('You got F Grade');
} else {
  // console.log('Invalid Input');
}

/* 
8) You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.
*/
const num1 = 13;
const num2 = 79;
const num3 = 45;

if (num1 > num2 && num1 > num3) {
  //   console.log("Largest Number is:", num1);
} else if (num2 > num1 && num2 > num3) {
  //   console.log("Largest Number is:", num2);
} else {
  //   console.log("Largest Number is:", num3);
}

/* 
9) You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
            Isosceles => two sides are equal
*/
const side1 = 9;
const side2 = 8;
const side3 = 9;
if (side1 === side2 && side1 === side3) {
  // console.log('This is an Equilateral Triangle');
} else {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
    // console.log('This is an Isosceles Triangle');
  } else {
    // console.log('This is an Scalene Triangle');
  }
}

/* 
10) ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া। তাদের grade তুমি জানো না। তবে তাদের নম্বর জানাো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে
দিতে পারবে?
১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.
২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.
৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.
৪) যারা ৭০ বা তার উপরে পেয়েছে , অথবা ৮০ এর নিচে পেয়েছে, তাদে র grade B.
৫) যারা ৮০ বা তার উপরে পেয়েছে , অথবা ৯০ এর নিচে পেয়েছে, তাদে র grade A.
৬) যারা ৯০ বা তার উপরে পেয়েছে , তাদের grade A+.
 */

const aliaMarks = 95;
const daliaMarks = 66;
const saliaMarks = 80;
const maliaMarks = 59;
const liliaMarks = 47;
const jalaiaMarks = 77;

const optainMarks = aliaMarks;

if (optainMarks >= 90 && optainMarks <= 100) {
  //   console.log('You got Golden A+ Grade');
} else if (optainMarks >= 80) {
  //   console.log('You got A Grade');
} else if (optainMarks >= 70) {
  //   console.log('You got B Grade');
} else if (optainMarks >= 60) {
  //   console.log('You got C Grade');
} else if (optainMarks >= 50) {
  //   console.log('You got D Grade');
} else if (optainMarks < 50 && optainMarks >= 0) {
  //   console.log('You got F Grade');
} else {
  //   console.log('Invalid Input');
}

/* 
11) তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো।  যে খানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে।
সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 
*/

const signal = "red";
if (signal === "red") {
  // console.log('Danger! Stop Here.');
} else if (signal === "yellow") {
  // console.log('You Should Stop Here!');
} else if (signal === "green") {
  // console.log('Cross the Road Now!');
} else {
  // console.log('Invalid Signal');
}

/* 
12) প্রতিদিন তোমার কাজ কি?
  ১) রাত ৮ টা বাজে মডিউল আনলক করো।
  ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো। 
  ৩) ভিডিও দেখতে দেখতে নোটস নাও। 
  ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো।
  ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে), সাপোর্ট সেশনে জয়েন করো
এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো।
*/

const myDailyTask = [
  "রাত ৮ টা বাজে মডিউল আনলক করো।",
  "ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো।",
  "ভিডিও দেখতে দেখতে নোটস নাও।",
  "মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো।",
  "কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে), সাপোর্ট সেশনে জয়েন করো",
];
for (let i = 0; i < 10; i++) {
  // console.log(myDailyTask);
}

/* 
13) আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো।
 */
let i = 0;
while (i < 10) {
  // console.log(myDailyTask);
  i++;
}

/* 
14) উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও।
*/
let j = 10;
while (i > 0) {
  // console.log(myDailyTask);
  i--;
}

/* 
15) উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও।
*/

for (let i = 10; i > 0; i--) {
  // console.log(myDailyTask);
}

/* 
16) তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ হাজার টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে, ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।
*/
const myBudget = 80000;
if (myBudget >= 80000) {
  // console.log('I will buy Mac');
} else if (myBudget >= 60000) {
  // console.log('I will buy a Gaming Laptop');
} else if (myBudget >= 40000) {
  // console.log('I will buy a Lenovo Yoga');
} else if (myBudget >= 20000) {
  // console.log('I will buy a Used Laptop');
} else {
  // console.log('Used your phone to work further');
}

/* 
17) আসকে আমার মন ভাল নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
*/
const monValaNai = "আসকে আমার মন ভাল নেই";
for (let i = 1; i <= 39; i++) {
  // console.log(monValaNai);
}

/* 
18) while লুপ কি ভাবে কাজ করে
*/

/* 
1. while লুপের জন্য আগে থেকেই একটি ভের কল করতে হয় কন্ডিশন অ্যাপ্লাই করতে। 
2. শুরুর কন্ডিশনে বলে দিতে হয় কত পর্যন্ত চলবে লুপটি।
3. while এর মধ্যে শেষে ইনক্রিমেন্ট/ডিসক্রিমেন্ট কন্ডিশন দিতে হবে নাহলে ইনফিনিট লুপ হয়ে যেতে পারে।

*/

/* 
19) একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দেখাও
*/
for (let i = 58; i <= 98; i++) {
  // console.log(i);
}

/* 
20) একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোড় সংখ্যা আছে সেগুলাকে দেখাও
*/
for (let i = 412; i <= 456; i += 2) {
  // console.log(i);
}

/* 
21) একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
*/
for (let i = 581; i <= 623; i += 2) {
  // console.log(i);
}

/* 
22) তুমি এতদিন যা যা জিনিস শিখছ সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।
*/
const myLearning = [
  "HTML",
  "HTML5",
  "CSS",
  "CSS3",
  "Bootstrap",
  "Tailwinds",
  "JavaScript",
];
for (let i = 0; i < myLearning.length; i++) {
  // console.log(myLearning[i]);
}

/* 
23) তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও।
*/
const myUsedPhone = [
  "Nokia C2",
  "iPhone 4",
  "Samsung Guru",
  "Nokia 6",
  "Honor Play",
  "Tecno Camon 19 Neo",
];
for (let i = 0; i < myUsedPhone.length; i++) {
  // console.log(myUsedPhone[i]);
}

/* 
24) একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
 */
for (let i = 30; i <= 86; i++) {
  // console.log(i);
  if (i == 44) {
    break;
  }
}

/* 
25) তোমার যত বই আছে সে গুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সে গুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদেরকে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।
*/
const myBookPrice = [
  34, 441, 344, 133, 108, 324, 743, 100, 150, 230, 190, 220, 160, 60, 90,
];
for (let i = 0; i < myBookPrice.length; i++) {
  if (myBookPrice[i] > 200) {
    continue;
  }
  // console.log(myBookPrice[i]);
}

/* 
26) Write a function called foo() which prints “foo” and a function called bar()
which prints “bar”. Call function bar() in the foo() function after printing. What
will be the output? Now call the foo() to see the output.
*/
function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}

// foo();

/* 
27) Write a function called make_avg() which will take an three integers and
return the average of those values.
*/
function make_avg(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
// console.log(make_avg(4, 8, 3));

/* 
28) Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
function make_avr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = sum / arr.length;
  return avg;
}

const arrayAvg = [4, 8, 34, 234, 2, 4, 1, 4, 23, 34];
// console.log(make_avr(arrayAvg));




/* 
29) Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
      ● Has return + Has parameter
      ● No return + Has parameter
*/
// Has return + Has parameter
function odd_even_hasReturn(number) {
  if (typeof number !== "number") {
    return "Please Enter a Number";
  } else {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
}
// console.log(odd_even_hasReturn(226));



// No return + Has parameter
function odd_even_hasNoReturn(number) {
  if (typeof number !== "number") {
    console.log("Please Enter a Number");
  } else {
    if (number % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
}
// odd_even_hasNoReturn(63);





/* 
30) You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.
*/
// Solution: 11 No Problem (169 Line)




/* 
31) একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে ।
*/
function multiplicationTable(num){
  for(let i = 1; i <= 10; i++){
    // console.log(num + ' * ' + i + ' = ' + num*i);
  }
}
// multiplicationTable(13);



/* 
32) একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
*/
function convertToLowerCase(username){
  return username.toLowerCase();
} 
// console.log(convertToLowerCase('HasiBul Hasan'));



/* 
33) fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবেদিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।
*/
function fullName(fName, lName){
  return (fName + ' '+ lName);
}
// console.log(fullName('Hasibul', 'Hasan'));



/* 
34) একটা ফাংশন লিখবা যে টাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।
*/
function numSquare(number){
  return (number*number);
}
// console.log(numSquare(5));



/* 
35) Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.
*/
function hrToMin(hour){
  return hour*60;
}
// console.log(hrToMin(2));



/* 
36) Write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.
*/
function findLeapYear(yearArray){
  const leapYearArray = [];
  for(let i = 0; i < yearArray.length; i++){
    if(yearArray[i] % 400 === 0 || yearArray[i] % 100 !== 0 && yearArray[i] % 4 === 0){
      leapYearArray.push(yearArray[i]);
    }
  }
  return leapYearArray;
}
const yearArr = [2023, 2024, 2025, 2028, 2030];
// console.log(findLeapYear(yearArr));




/* 
37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.
*/
function findOddSum(oddSumArray){
  let sum = 0;
  for(let i = 0; i < oddSumArray.length; i++){
    if(oddSumArray[i] % 2 !== 0){
      sum += oddSumArray[i];
    }
  }
  return sum;
}
const oddSum = [5, 7, 8, 10, 45, 30];
// console.log(findOddSum(oddSum));




/* 
38) leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
*/
function leapYear(year){
  if(year % 400 === 0 || year % 100 !== 0 && year % 4 === 0){
    return true;
  }
  else{
    return false;
  }
}
// console.log(leapYear(2023));


/* 
39) তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
*/
function ageOddEven(age){
  if(age % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}
// console.log(ageOddEven(24));



/* 
40) এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
*/
// Solution: 35 No Problem (473 Line)


/* 
41) একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে.
*/
for(let i = 1; i <= 100; i++){
  // console.log(i);
}


/* 
42) ৫০ থেকে ৮০ এর মধ্যে যত বিজড় সংখ্যা আছে সেগুলাকে দেখাবে.
*/
for(let i = 51; i < 80; i+=2){
  // console.log(i);
}


/* 
43) তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো
*/
function sumThreeNum (num1, num2, num3){
  return num1+num2+num3;
}
// console.log(sumThreeNum(32, 234, 12));



/* 
44) তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে.
 */
function cToF(celcius){
  const fValue = (celcius * (9/5)) + 32;
  return fValue;
}
// console.log(cToF(35));


/* 
45) একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।
*/
function fToC(fahrenheit){
  const cValue = (fahrenheit - 32) * (5/9);
  return cValue;
}
// console.log(fToC(122));



/* 
46) কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।
*/
function gradeCheck(marks){
  if(marks > 100 || marks < 0){
    return 'Invalid Marks';
  }
  else if(marks >= 80 && marks <= 100){
    return 'Your Grade is: A+'
  }
  else if(marks >= 70){
    return 'Your Grade is: A'
  }
  else if(marks >= 60){
    return 'Your Grade is: A-'
  }
  else if(marks >= 50){
    return 'Your Grade is: B'
  }
  else if(marks >= 40){
    return 'Your Grade is: C'
  }
  else if(marks >= 33){
    return 'Your Grade is: D'
  }
  else if(marks >= 0){
    return 'Your Grade is: F'
  }
}
const optMarks = 97;
// console.log(gradeCheck(optMarks));





/* 
47) সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভাল না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কি ভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা কর।
*/
function calculateInterest(depositMoney, year, interestRate){
  let totalInterest = 0;
  let totalReceiveMoney = depositMoney;
  const rate = (interestRate/100)  // Input as parcentage. Here we devide
  for(let i=1; i <= year; i++){
    totalInterest = totalReceiveMoney*rate;
    totalReceiveMoney += totalInterest;
  }
  return totalReceiveMoney;
}
// console.log(calculateInterest(30000, 10, 4));




/* 
48) Suppose, you have an array with 8 elements. Find the smallest element of that array.
Now for the previous array, try to find the second largest element.
*/
const numArr = [23, 24, 62, 20, 14, 4, 56, 5] ;
let smallestNum = numArr[0];
let largestNum = numArr[0];

for(let i = 0; i < numArr.length; i++){
  if(smallestNum > numArr[i]){
    smallestNum = numArr[i];
  }
}
// console.log(smallestNum);

for(let i = 0; i < numArr.length; i++){
  if(largestNum < numArr[i]){
    largestNum = numArr[i];
  }
}
// console.log(largestNum);

// Now find 2nd Largest number
let secondLargestNum = numArr[0];
numArr.splice(numArr.indexOf(largestNum), 1);
for(let i = 0; i < numArr.length; i++){
  if(secondLargestNum < numArr[i]){
    secondLargestNum = numArr[i];
  }
}
// console.log(secondLargestNum);





/* 
49) Write a function and take an array as a parameter. Find the average of all the elements of that array and return this average.
*/
function findArrayAverage(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum/array.length;
}
const arrAvg = [2, 4, 6, 8];
// console.log(findArrayAverage(arrAvg));




/* 
50) Write a function which takes the height and width of a rectangle as parameters. Find out the area of that rectangle and print the result.
*/
function findRectangleArea(height, width){
  const area = height*width;
  return area;
}
// console.log(findRectangleArea(4, 6));




/* 
51) একটা কোড লিখো যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।
*/
const numArray = [3, 24, 62, 20, 14, 24, 56, 5, 52, 1] ;
let smallestNumber = numArray[0];

for(let i = 0; i < numArray.length; i++){
  if(smallestNumber > numArray[i]){
    smallestNumber = numArray[i];
  }
}
// console.log(smallestNumber);


/* 
52) একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।
*/
const num_1 = 63;
const num_2 = 23;
const num_3 = 21;

if (num_1 < num_2 && num_1 < num_3) {
    // console.log("Lowest Number is:", num_1);
} else if (num_2 < num_1 && num_2 < num_3) {
    // console.log("Lowest Number is:", num_2);
} else {
    // console.log("Lowest Number is:", num_3);
}



/* 
53) একটা ফাংশন লিখ. সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 
*/

// Solution: 28 No Problem (Line: 366)



/* 
54) একটা ফাংশন লিখ। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।
*/
// Solution: 50 No Problem (Line: 707)




/* 
55) (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।
*/
// Solution: 48 No problem (Line: 655)




/* 
56) একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই  ফর্মুলা গুগল থেকে খুঁজে বের করো।
 */
function areaTriangle(side1, side2, side3){
  const s = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
  return area.toFixed(2);
}
// console.log(areaTriangle(3, 6, 7));



/* 
57) কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।
*/
function checkPrimeNumber (number){
  if(typeof number === 'number'){
    let check = 0;
    for(let i = 1; i <= number; i++){
      if(number % i == 0){
        check++;
      }
    }
    if(check === 2){
      return 'It is a Prime Number';
    }
    else{
      return 'It is not a Prime Number';
    }
  }
  else{
    return 'Please enter a number.'
  }
}
// console.log(checkPrimeNumber(29));





/* 
58) দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, % এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।
*/
const inputNum_1 = 35;
const inputNum_2 = 5;
const sum = inputNum_1 + inputNum_2;
const subtract = inputNum_1 - inputNum_2;
const multiplication = inputNum_1 * inputNum_2;
const divition = inputNum_1 / inputNum_2;
const remain = inputNum_1 % inputNum_2;
// console.log('Sum: ', sum + '\nSubtract: ', subtract + '\nMultiplication: ', multiplication + '\nDivition: ', divition + '\nRemain: ', remain);





/* 
59) তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সে কেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান, ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চি হ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
*/
const compare_num1 = 34; 
const compare_num2 = 24; 
if(compare_num1 > compare_num2){
  // console.log(compare_num1, 'is Bigger than other one');
}
else if(compare_num2 > compare_num1){
  // console.log(compare_num2, 'is Bigger than other one');
}
else if(compare_num1 === compare_num2){
  // console.log('Both are same number');
}
// এভাবেই বাকি গুলো





/* 
60) তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যে কোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।
*/
const conditionApply_num1 = 44;
const conditionApply_num2 = 44;
const conditionApply_num3 = 24;
if(conditionApply_num1 > conditionApply_num2 && conditionApply_num1 > conditionApply_num3){
  // console.log('Example of and Condition');
}
else if(conditionApply_num2 > conditionApply_num1 || conditionApply_num2 > conditionApply_num3){
  // console.log('Example of or condition')
}
else{
  // console.log('Other');
}




/* 
61) তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো।
*/
const conditionCheck_1 = 'green';
const conditionCheck_2 = 'green';
if(conditionCheck_1 === conditionCheck_2){
  // console.log('Both are same');
}
else{
  // console.log('Both are different');
}





/* 
62) তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।
*/
let startVar = 7;
while(startVar <= 19){
  // console.log(startVar);
  startVar++;
}




/* 
63) তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করতে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।
*/
const arrayValue = [34, 56, 23, 24, 62, 35, 51, 12, 43, 34];
// console.log('Total Element in this Array:', arrayValue.length);
// console.log('4th position element:', arrayValue[3]);
arrayValue[3] = 45;
// console.log('4th position change:', arrayValue);
const sumOfTwo = arrayValue[1] + arrayValue[2];
// console.log('Sum of two element: ', sumOfTwo);
arrayValue.pop();
// console.log('Delete last element: ', arrayValue); 




/* 
64) তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।
*/
const nameArray = ['Hasib', 'Marzia', 'Rowshan Ara', 'Rakib', 'Sumaya', 'Mahadi', 'Jawad'];
for(let i = 0; i < nameArray.length; i++){
  // console.log(nameArray[i]);
}




/* 
65) তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
*/
const arrayNumber = [234, 44, 24, 45, 2423, 23, 23, 234, 234, 546, 345, 232, 67, 45, 234, 26, 89, 97];
for(let i = 0; i < arrayNumber.length; i++){
  if(arrayNumber[i] > 80){
    // console.log(arrayNumber[i]);
  }
}



/* 
66) তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।
*/
function multiplyThree(num1, num2, num3){
  return num1*num2*num3;
}
// console.log(multiplyThree(3, 6, 4));





/* 
67) একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রপার্টি এর মান চেইঞ্জ করবা।
*/
const objectProperty = {
  username: 'Hasibul Hasan',
  age: 20,
  institution: 'University of Rajshahi',
}
// console.log(objectProperty);
objectProperty.age = 23;
// console.log(objectProperty);



/* 
68) সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch। অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
 */
function feetToInch(feet){
  return feet*12;
}
// console.log(feetToInch(3));



/* 
69) একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।
*/
function centimeterToMeter(centimeter){
  return centimeter/100;
}
// console.log('Meter value is:', centimeterToMeter(425));



/* 
70) আরেকটা ফাংশন লিখবে যেটার নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। এইবার ভালো করে খেয়াল করো। 
    প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা। 
    সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
    তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে, সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। উত্তর হিসেবে সংখ্যা রিটার্ন করবে।
 */
function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity){
  const firstBookNeedPage = firstBookQuantity * 100;
  const secondBookNeedPage = secondBookQuantity * 200;
  const thirdBookNeedPage = thirdBookQuantity * 300;
  const totalPageNeeded = firstBookNeedPage + secondBookNeedPage + thirdBookNeedPage;
  return totalPageNeeded;
}
// console.log('Total Page Needed:', paperRequirements(2, 3, 5));






/* 
71) একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
*/
function bestFriend(friends){
  let friend = friends[0];
  for(let i = 0; i < friends.length; i++){
    if(friend.length < friends[i].length){
      friend = friends[i];
    }
  }
  return friend;
}
const friends = ['Hasib', 'Marzia', 'Anik', 'Mahi', 'Mahim', 'Ferdous'];
// console.log(bestFriend(friends));




/* 
72) এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যাগুলা একটার পর একটা করে চেক করা। এবং সংখ্যাগুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সে গুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়, তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
*/
function findPositiveNumber(randomNumberArray){
  const positiveNumberArray = [];
  for(let i=0; i<randomNumberArray.length; i++){
    if(randomNumberArray[i] < 0){
    break;
    }
    positiveNumberArray.push(randomNumberArray[i]);
  }
  return positiveNumberArray;
}
const arrayRandomNumber = [23, 53, 0, 23, 54, 8, 323, 435, 354, 56, -34, 43, -72, 5, 456, 345];
console.log(findPositiveNumber(arrayRandomNumber));

// Done