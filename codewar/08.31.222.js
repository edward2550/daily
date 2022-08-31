function stringy(size){
    let result = '1';


    for (let i = 0; i < size - 1; i++){
        if(i % 2 === 0){
            result += '0';
        } else {
            result +='1';
        }
    }
    return result
}