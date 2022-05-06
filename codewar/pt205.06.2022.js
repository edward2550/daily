function toCamelCase(str){
    //need something to check for - and _ then we can split it and capitliaze and join them 
       return str.split(/[,_-]+/).map( (s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
    }