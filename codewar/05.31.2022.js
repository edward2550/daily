var uniqueInOrder=function(arr){
    var result = []
     var last
     
     for (var i = 0; i < arr.length; i++) {
       if (arr[i] !== last) {
         result.push(last = arr[i])
       }
     }
     
     return result
   }