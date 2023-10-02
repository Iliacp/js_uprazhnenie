const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (!Number.isInteger(number)) number = Number(number);
    let fiboNew = 1;
    let fiboOld = 0;
    for (let i = 1; i < number; i++) {
        fiboNew += fiboOld;
        fiboOld = fiboNew - fiboOld;
    }
    return fiboNew;
};

// Do not edit below this line
module.exports = fibonacci;
