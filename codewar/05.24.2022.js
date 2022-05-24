function duplicationCount(text){
    return text.toLowerCase().split('').filter((value, i, arr) => {
        return arr.indexOf(value) !== i && arr.lastIndexOf(value) === i;
    }).length 
}