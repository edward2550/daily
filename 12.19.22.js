function missingVowel(str){
    //list all vowels -> loop each vowel and see if str
    let vowels = 'aeiou'
    for(let i = 0; i < vowels.length; i++){
      if( str.indexOf(vowels[i]) === -1){
        return i
      }
    }
  }