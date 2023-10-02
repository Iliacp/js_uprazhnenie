const findTheOldest = function (array) {
    function getAge(person) {
        let referenceYear = new Date();
        referenceYear = !("yearOfDeath" in person) ? referenceYear.getFullYear() : person.yearOfDeath;
        return referenceYear - person.yearOfBirth;
    }

    return array[array.reduce((oldest, person, index) => {
        if (getAge(person) > getAge(array[oldest])) return index;
        else return oldest;
    }, 0)];
};

// Do not edit below this line
module.exports = findTheOldest;
