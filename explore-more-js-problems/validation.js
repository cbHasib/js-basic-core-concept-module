function add(num1, num2){
   if((typeof num1 !== 'number') || (typeof num2 !== 'number')){
    return 'Please enter a valid numbner';
   }
    return num1+num2;
}

console.log(add(3, '1'));