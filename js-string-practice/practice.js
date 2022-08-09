// Ather Biswas Vaia
function printEven(isArray){
    for(let i =0; i<isArray.length; i++){
        if(isArray[i]%2==0){
            console.log(isArray[i]);
        }
    }
}
var isArray = [20,25, 30, 35, 40, 45, 60, 90, 100, 105];
printEven(isArray);