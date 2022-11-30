function evenNumbers(array, number) {
    // write a function that takes in array and the length of numbner 
    //return an even list with the legnth givien 
    //first use filter on the array to return even numbers 
    return array.filter(n => n % 2 === 0).slice(-number)
  }