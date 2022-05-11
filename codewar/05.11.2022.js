//split strings
function solution(str){
    let newStr = "";
    if(str.length){
      if(str.length % 2 === 1){
       newStr = str + '_';
       return newStr.match(/.{2}/g)
     }else{
       return str.match(/.{2}/g)
     }
    }else{
      return [];
    }
     }
    