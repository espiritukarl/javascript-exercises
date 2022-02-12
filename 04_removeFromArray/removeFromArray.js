const removeFromArray = function (testArray, ...args) {
    let array = Array.from(args);

    for (element of array) {
        if (testArray.includes(element) != 0) {
            testArray = testArray.filter(r => r != element)
        }
    }

    return testArray;

}


// Do not edit below this line
module.exports = removeFromArray;
