function count (string) {  

    // The function code should be he
    let countObj = {}
    
   for(const i of string){
     if(countObj[i]){
       countObj[i]++
     }else{
       countObj[i] = 1
     }
   }
    return countObj
  }