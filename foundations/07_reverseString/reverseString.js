const reverseString = function(word) {
    let revWord = "";
    let arrWord = word.split("");
    let revArr = arrWord.reverse();
    return revWord = revArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
