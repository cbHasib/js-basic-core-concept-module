/* 
// Write a function that will taka an array and calculate
the sum of odd numbers greater than 10 and less than 50.
*/
function publicBusFare(peopleQuantity) {
  const perBusCapacity = 50;
  const perMicrocapacity = 11;
  const perPersonFare = 250;

  if (peopleQuantity >= perBusCapacity) {
    peopleQuantity = peopleQuantity % perBusCapacity;
  } 
   if (peopleQuantity >= perMicrocapacity) {
    peopleQuantity = peopleQuantity % perMicrocapacity;
  } 
  if(peopleQuantity < perMicrocapacity) {
    const totalBusFare = peopleQuantity * perPersonFare;
    return totalBusFare;
  }
}
// let mype

console.log(publicBusFare(365));


// function publicBusFare(peopleQuantity){
//   return true;
// }
