// recieve an array pf strings and remove all dup letters from each string 

function returnStr(str){
    //easy way to reverse str
     // return console.log(str.split('').reverse().join(''))
  
    //now use brute force
    //empty string
    // let reverseStr = ''
    // //loop add each char
    // for(let char of str){
    //   reverseStr = char + reverseStr
    // }
    // return console.log(reverseStr)
    //use map to create a new set of array and each one is going to make it easier to handle the elements 
    // return console.log(str.map(word => word.split('').filter((w,i,a) => w != a[i-1]).join('')))
    // let revStr = ''
    // for(let char of str){
    //   revStr = revStr + char
    // }
    // return console.log(revStr)
    let vowels = 'aeiou'
    for(let i = 0 ; i < str.length; i++){
      if(str.indexOf(vowels[i] === -1)){
        return console.log(i)
      }
    }
  }
  
  
  // returnStr(["abracadabra","allottee","assessee"]) 
  // returnStr('work')
  returnStr('John Doe hs seven red pples under his bsket')