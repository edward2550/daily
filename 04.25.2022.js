//Vowel Count
function getCount(str) {
    var vowelsCount = Array.from(str).filter(letter => 'aeiou'.includes(letter)).length
  
    return vowelsCount;
  }
  //Convert the string to an array using the Array.from() method, then use the Array.prototype.filter() method to filter the array to contain only vowels, and then the length property will contain the number of vowels.
  
  