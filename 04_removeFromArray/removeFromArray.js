const removeFromArray = function(inputArray, ...itemsToRemove) {

    const returnArray = [...inputArray];
    let loopNumber = 0;
    function removeMatchingItems(element, index) {
      let itemFromReturnArray = element;
      itemsToRemove.forEach(function(element) {
        if (element === itemFromReturnArray) {
          returnArray.splice(index - loopNumber++, 1);
        }
      })
    }
  
    inputArray.forEach(removeMatchingItems);
    return returnArray;

};

// Do not edit below this line
module.exports = removeFromArray;
