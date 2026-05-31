const removeFromArray = function(array,remove) {
    return array.filter(item => {if(item != remove) return item})
};

// Do not edit below this line
module.exports = removeFromArray;
