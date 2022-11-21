//the function is going to take in an array , the array has intergers and string ,we want to return the sum of all the array

function returnSum(x) {
    //first step is to return an array with only intergers , i'm going to use map method 
    let newArry = x.map(x => Number(x))
    // now i need to add the the items in the new array , i'm uuse the reduce method 
    //first i'm going to intails an empty varible to put my results
    let results = 0
    return newArry.reduce((acc, current) => acc + current, results)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  console.log(returnSum(['1',2,3]))
  //returnNum(['1','3','22']) [1,3,22]