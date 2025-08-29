const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        let index = array.indexOf(arg);
        while (index != -1) {
            array.splice(index, 1);
            index = array.indexOf(arg);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
