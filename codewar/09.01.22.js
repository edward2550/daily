function modifyMultiply (str,loc,num) {
  
    let arr = [];
    let get = str.split(' ')
    let word = get[loc]
    let count = 0;
    
      while(count<num){
        arr.push(word)
        count++
      }
    
    return arr.join('-')  
    } 