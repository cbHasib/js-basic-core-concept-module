const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babus', 'babul', 'abul', 'kabul', 'cabul', 'babul', 'abul', 'abul'];

function remoteDublicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        if(unique.includes(names[i]) === false){
            unique.push(names[i]);
        }
    }
    return unique;
}
console.log(remoteDublicate(names));