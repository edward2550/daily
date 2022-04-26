//Disemvowel Trolls
//Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
   let arr = str.split('')
   let newArr = []
   for (let i = 0; i < arr.length; i++) {
     if (!vowel.includes(arr[i])) {
       newArr.push(arr[i])
     }
   }
   return newArr.join('')
 }