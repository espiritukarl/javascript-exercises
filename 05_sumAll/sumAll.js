const sumAll = function (num1, num2) {
    if ((typeof (num1) === 'number') && (typeof (num2) === 'number') && (num1 >= 0) && (num2 >= 0)) {
        if (num1 > num2) {
            return sum(num1, num2);
        } else {
            return sum(num2, num1);
        }
    } else {
        return "ERROR";
    }
}
function sum(bigger, smaller) {
    let results = 0;
    for (smaller; bigger >= smaller; smaller++) {
        results += smaller;
    }
    return results;
}
// Do not edit below this line
module.exports = sumAll;
