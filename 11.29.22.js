//create a function that takes in array and we want to return the sum of numbers that only occurs once ?
//no string correct and whole integers



function repeats(arr) {
    //fisrt filter single values => reduce 
    //index of num is last inddex of num
    //we use indexOf to look at the whole array with our argument number then we check it using lastIndexOf becuase lastIndexOf will look for the same integer at the last spot , meaning if the integer repeats it will return false becuase indexOf looks for the integer from the front of the array will lastIndexOf will look from the back if there different it return false , then we add it using reduce 
    return console.log(arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c) => a + c , 0 ))
  }














repeats([4, 5, 7, 5, 4, 8])
repeats([9, 10, 19, 13, 19, 13], 19)
repeats([10, 10, 11, 12, 12, 15, 16])