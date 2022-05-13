function descendingOrder(n){
    // Im given a number and expecting a bumber back
      //as i want the highest number i should sort the number in descending way
      //can only call the sort if i convert the number into an array. but first i will have to convert the number to a string and only then can i split it
      //from the given example its reversed so call the reverse method 
      //then i want to join back to a number 
      let conN = n.toString()
      let newArray = conN.split('')
      let sortArray = newArray.sort();
      let reverseArray = sortArray.reverse()
      let joinArray = sortArray.join('')
      let backNumber = Number(joinArray)
      
      return backNumber;
    }