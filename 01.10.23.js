//write a function that takes in a argument - interger - print to the console Fizz when it is divisible by 3 , print out Buzz when divisible by 5, FizzBuzz when is divisble by both 3 and 5 lsaldfaf;;;;/asdf.asfllll222update

function fizzBuzz(num){
    //loop through the length of the num and have condiditons 
    let answer = []
    // console.log(num)
    for(let i = 0; i <= num; i++){
      if(i % 15 === 0 ){
       console.log('FizzBuzz')
      } else if(i % 3 === 0){
        console.log('Fizz')
      } else if(i % 5 === 0){
        console.log('Buzz')
      } else {
        console.log(i)
      }
    }
    console.log(answer)
  
  }
  
  
  fizzBuzz(100)