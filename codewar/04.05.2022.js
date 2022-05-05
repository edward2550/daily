//Array plus array
function arrayPlusArray(arr1, arr2) {
    let sum = arr1.concat(arr2);
    return sum.reduce(function(a,c){
      return a + c
    })
    
  }