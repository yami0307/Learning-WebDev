const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);


const calcAvg = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}

console.log(calcAvg(totals));
console.log(calcAvg(tips));
console.log(calcAvg(bills));
