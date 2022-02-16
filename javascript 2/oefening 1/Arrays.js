var familieleden = ['Johan', 'Brigitte', 'Jimmy', 'Sander', 'Bart'];
console.log(familieleden);
console.log(familieleden[0] + familieleden[2] + familieleden[4]);

const voegnaamtoe = () => {
    let nieuwenaam = window.prompt('Geef een nieuwe naam');
    familieleden.push(nieuwenaam);
}

