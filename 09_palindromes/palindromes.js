const palindromes = function (string) {
    modifiedString = string.replaceAll(/\W/g, "").toLowerCase().split("")
    if (modifiedString.join() === modifiedString.reverse().join()) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
