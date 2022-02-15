const findTheOldest = function (people) {

    for (index of people) {
        if (!("yearOfDeath" in index)) {
            index.yearOfDeath = new Date().getFullYear();
        }
    }

    const yearsAlive = people.sort((a, b) =>
        (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1
    );

    return yearsAlive[0]
}



// Do not edit below this line
module.exports = findTheOldest;
