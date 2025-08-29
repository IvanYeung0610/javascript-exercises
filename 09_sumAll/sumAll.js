const sumAll = function(numA, numB) {
    let sum = 0;
    if (numA < 0 || numB < 0) return 'ERROR';
    if (numA !== Math.floor(numA) ||
        numB !== Math.floor(numB)) return 'ERROR';
    if (numA > numB) {
        [numA, numB] = [numB, numA];
    }
    for (let i = numA; i <= numB; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
