const palindromes = function (word) {
    word = word.toLowerCase();
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    const unpunctuated = word.replace(regex, '');

    const reverseString = function (str) {
        let strReversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            strReversed += str[i];
        }
        return strReversed;
    };

    return reverseString(unpunctuated) == unpunctuated;
};

// Do not edit below this line
module.exports = palindromes;
