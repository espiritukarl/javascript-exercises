const repeatString = function (hey, num) {

    let multipleHey = '';

    for (let i = 0; i < num; i++) {
        multipleHey = `${multipleHey}${hey}`;
    }

    if (num < 0) {
        multipleHey = "ERROR"
    }

    return multipleHey;


};

// Do not edit below this line
module.exports = repeatString;
