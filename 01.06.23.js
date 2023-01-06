// No String or Array Methods (well brute force it first, but then no methods)! 
//store all the leter in the string , increment the letter that appears the most 
  //loop through the str check if the character exisit if it does add one to the value if it doesnt make it one

  let charMap = {},
    count = 0,
    maxChar = null

  for(const char of str){
    charMap[char] = charMap[char] + 1 || 1
  }

  for(const char in charMap){
    if(charMap[char] > count){
      count = charMap[char]
      maxChar = char 
    }
  }
return maxChar
  
  
  
}