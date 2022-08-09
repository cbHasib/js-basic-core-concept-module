const phones = [
    {
        name: 'Samsung', camera: 12, storage: '32gb', price: 36500, color: 'silver'
    },
    {
        name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'
    },
    {
        name: 'iPhone', camera: 106, storage: '32gb', price: 82000, color: 'silver'
    },
    {
        name: 'Xiaomi', camera: 15, storage: '32gb', price: 34500, color: 'silver'
    },
    {
        name: 'Oppo', camera: 12, storage: '32gb', price: 31500, color: 'silver'
    },
    {
        name: 'HTC', camera: 34, storage: '32gb', price: 14500, color: 'silver'
    }
    
];


function cheapestPhone(phones){
    let cheapPhone = phones[0];
    for(let i = 0; i < phones.length; i++){
        if(cheapPhone.camera < phones[i].camera){
            cheapPhone = phones[i];
        }
    }
    return cheapPhone;
}


console.log(cheapestPhone(phones));