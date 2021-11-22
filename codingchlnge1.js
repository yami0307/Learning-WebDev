let dolp1 = 85, dolp2 = 54, dolp3 = 41;
let koala1 = 23, koala2 = 34, koala3 = 27;

const calcAverage = (x, y, z) => (x + y + z)/3;

const avgDolphins = calcAverage(dolp1, dolp2, dolp3);
const avgKoala = calcAverage(koala1, koala2, koala3);
console.log(avgDolphins, avgKoala);

function checkWinner(a, b){
    if(a >= b*2) console.log(`Dolphins win (${a} vs. ${b})`);
    else if(b >= a*2) console.log(`Koalas win (${b} vs. ${a})`);
    return;
}
checkWinner(avgDolphins, avgKoala);