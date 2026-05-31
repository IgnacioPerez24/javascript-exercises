const sumAll = function(numInit,numEnd) {

    if(!Number.isInteger(numInit) || !Number.isInteger(numEnd)) return "ERROR"; 

    let total = 0;
    for(let i = numInit; i <= numEnd; i++)
    {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
