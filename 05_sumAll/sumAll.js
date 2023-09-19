    const sumAll = function(firstAddend, secondAddend) {
        let sum = BigInt(0);
        let smallAddend;
        let largeAddend;

            if(Number.isNaN(firstAddend + secondAddend) || typeof(firstAddend + secondAddend) == "string") {
                return "ERROR";
            }
            
            
            if (firstAddend < 0 || secondAddend < 0) {
                return "ERROR";
            }
            if (firstAddend > secondAddend) {
                largeAddend = firstAddend;
                smallAddend = secondAddend;
            }
            else {
                largeAddend = secondAddend;
                smallAddend = firstAddend;
            }
            for (let i = smallAddend; i <= largeAddend; i++) {
                sum = sum + BigInt(i);
            }

        return Number(sum);
    };

    console.log(sumAll(3,"I love chat gpt!"))
// Do not edit below this line
module.exports = sumAll;
