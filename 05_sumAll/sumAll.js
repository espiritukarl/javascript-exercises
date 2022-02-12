const sumAll = function (num1, num2) {
    if ((typeof (num1) === 'number') && (typeof (num2) === 'number') && (num1 >= 0) && (num2 >= 0)) {
        let biggerNumber;
        let smallerNumber;
        let sum = 0;

        if (num1 > num2) {
            biggerNumber = num1
            smallerNumber = num2
        } else {
            biggerNumber = num2
            smallerNumber = num1
        }
        for (let i = smallerNumber; i <= biggerNumber; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
