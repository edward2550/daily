function validParentheses(parens){
    let stack = [];
    let map = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
    }
    
    for (var s of parens) {
     if (s === '(' || s === '{' || s === '[' ) {stack.push(s)}
     else {let last = stack.pop(); if(s !== map[last]){return false}; } 
   }
    if(stack.length !== 0) {return false}
    return true;
  }