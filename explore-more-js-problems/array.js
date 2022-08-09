const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 226, class: 11, name: 'Hasib'};
const friends = [13, 14, 11, 434, 23, 234, 32, 12, 24, 45];
function add(num1, num2){
    return num1+num2;
}


console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);


// --------------
console.log(friends.includes(23));
console.log(friends.includes(233));

if(friends.indexOf(19) !== -1){

}


// concat : array together
const newFriendAge = [ 12, 14, 13, 45, 23, 65];
const allFriends = newFriendAge.concat(friends);

console.log(allFriends);
