function getMiddle(s){
    //geting a string
    //find the middle length of the string
      // return the the little if its odd and two if its even
      
      //example.kat.getmiddle"test' return 'es'
      
      
     const i = Math.floor(s.length / 2);
      let result = s[i]
      console.log(result)
      if(s.length % 2 === 0 && i > 0) {
        result = s[i-1] + result
      }
      return result
      
    }
    const action = getMiddle("c");
    console.log(action);
getMiddle("test") 
getMiddle("testing") 
getMiddle("middle") 
getMiddle("A")