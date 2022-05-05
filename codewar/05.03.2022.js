function highAndLow(numbers){
    let number = numbers.split(' ')
   return Math.max(...number)+" "+ Math.min(...number)
  }