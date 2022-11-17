//write a function that takes in an interger as para,eter 
//print out everynumber from 1 to the givin number , im going to need a loop
//if the interger is divisble by 3 print the console fizz
//if is idivible by 5 print out buzz
//if divisible by both 5 and 3 print out fizzbuzz


function fizzbuzz(number) {
    for (let i = 1; i < number.length; i++) {
      if (i % 3 && i % 5) {
        console.log("fizzbuzz")
      } else if (i % 3) {
        console.log('fizz')
      } else if (i % 5) {
        console.log('buzz')
      } else (console.log(i))
    }
  }
  
  
  
  fizzbuzz(3)//fizz
  fizzbuzz(5)//buzz
  fizzbuzz(15)//fizzbuzz