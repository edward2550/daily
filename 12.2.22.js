//find the nth  smallest element in this array of 

//notes 
//Arraly/list size is at least 3.

//array/list numbers could be a mixture of positives, negatives and zeros

function nthSmallest(arr,n){
    //sort arr
    //find nth num -> n -1
    return arr.sort((a,b) => a-b)[n-1]
  }
  