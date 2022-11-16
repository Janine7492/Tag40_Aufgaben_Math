function roundTo(Zahl, Genauigkeit) {
    let num = Zahl;
    let roundedNum = num.toFixed(Genauigkeit);
    return roundedNum;
}

console.log(roundTo(3.1415926535, 5)); 