//so take in an array - number only - want to fge the average of the array - return a whole number 

function getAverage(x) {
    // add the sum of the array use reduce
    let add = x.reduce((acc, currentvalue) => acc + currentvalue)
    //now we need to divide by the length
    //use Math to make it a whole number 
    let sum = Math.floor(add / x.length)
    return console.log(sum)
  
  }
  
  
  
  
  
  getAverage([2, 2, 2, 2])
  getAverage([1, 2, 3, 4, 5]), 3
  getAverage([1, 1, 1, 1, 1, 1]), 1