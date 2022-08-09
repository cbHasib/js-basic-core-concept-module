/* 
Fixed: per item wood requirements
1. CHAIR --> 3cft
2. TABLE --> 10cft
3. BED   --> 50cft
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity*perChairWood;
    const tableWood = tableQuantity*perTableWood;
    const bedWood = bedQuantity*perBedWood;

    const totalWood = chairWood+tableWood+bedWood;

    return totalWood;
}

console.log('Total wood required:', woodCalculator(2, 4, 2), 'CFT');