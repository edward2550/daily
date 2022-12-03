//create a function that returns "(" for unique characters and if not return ")"

function convertString(str){
    //LowerCase first
     // split the string up , map , indexOf === lastIndexOF ? 
   
     return str.toLowerCase().split('').map((l,i,a) => a.indexOf(l) === a.lastIndexOf(l) ? '(' : ')').join('')
   }