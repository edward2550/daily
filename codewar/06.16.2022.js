function productFib(prod){
    var cache = {
      0: 0,
      1: 1
    }
    
    function fib(s){
      if(s == 0 || s == 1){return s;}
      if(s > 1){
        if(cache[s]){
          return cache[s];
        }else{
          cache[s] = fib(s - 1) + fib(s - 2)
          return fib(s - 1) + fib(s - 2);
        }
      }
    }
    
    let n = 0;
    while(fib(n) * fib(n + 1) < prod){
      n++;
    }
    if(fib(n) * fib(n + 1) == prod){
      return [fib(n), fib(n + 1), true]
    }else{
      return [fib(n), fib(n + 1), false]
    }
  }