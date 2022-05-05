function squareDigits(num){
    let number = num.toString()
   let results = []

   for(let i = 0; i < number.length; i++){
       results[i] = number[i] * number[i]
   }
   return Number(results.join(''))
  }


  squareDigits(1324)
  console.log(squareDigits(123415))