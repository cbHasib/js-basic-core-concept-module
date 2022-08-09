/*
1. if ticket num less than 100, per ticket price: 100
2. if ticket num more than 100 but less thgan 200, First 100 ticket 100/ticket. rest ticket will be 90 taka per piece
3. if purchase more than 200
    first 100 --> 100tk
    1001-200 --> 90tk
    200+ --> 70tk
*/

function ticketPrice(ticket){

    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;


    if(ticket>200){
       return ((ticket-200)*above200Price) + (100*second100Price) + (100*first100Price);
    }
    else if(ticket<=200 && ticket > 100){
       return ((ticket-100)*second100Price) + (100*first100Price);
    }
    else if(ticket<=100 && ticket >= 0){
       return ticket*first100Price;
    }
    else{
        return 'Invalid Input'
    }
}
const ticket = 50;
const normalPrice = ticket*100;
const ticketDiscount = ticketPrice(ticket);
const discount = normalPrice - ticketDiscount;
console.log('Total Amount:', normalPrice + '\nDiscount:', discount +'\nYou need to Pay:', ticketDiscount);