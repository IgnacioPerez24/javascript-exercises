const repeatString = function(word, number) {

    let repetedString = "";
    if(number < 0) return "ERROR";

    for(let i = 0 ; i < number; i++){
        repetedString += word;
    }
    return repetedString;
};

// Do not edit below this line
module.exports = repeatString;
