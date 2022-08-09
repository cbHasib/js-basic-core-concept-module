let age = 11;
age = 12;

var has = 12;
var has = 34;


const countryName = 'Bangladesh';
// countryName = 'chad'; // can't do it
// console.log(has,  age, countryName);



function findLeapyear(inpYear){
    var leapYear = [];
    for(var i=0; i<inpYear.length; i++){
        if(((inpYear[i]%4==0) && (inpYear%100!=0)) || (inpYear%400==0)){
            leapYear.push(inpYear[i]);
        }
        else{
            continue;
        }
    }

    return leapYear;
}

const inputYear = [2023,2024,2025,2028,2030];

// console.log(findLeapyear(inputYear));








var numList = [2, 12, 1, 5, 3, 7, 19, 20, 13, 4];




console.log(numList.sort(function(a, b){return a - b}));
 





