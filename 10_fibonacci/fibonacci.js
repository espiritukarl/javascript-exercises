const fibonacci = function (number) {
    if (number > 0) {
        number--;
        return (process(number));
    } else return "OOPS";

};

let process = (number) => {
    if (number == 0) {
        return 1;
    } else if (number == 1) {
        return 1;
    } else {
        return process(number - 1) + process(number - 2);
    }
}

// Do not edit below this line
module.exports = fibonacci;
