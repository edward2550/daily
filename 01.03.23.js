//create a function that taskes in a string retunnr the the string with case letting and reversed

function reverseStr(str){
    return str.split(' ').reverse().join(' ').split('').map(w => w == w.toUpperCase() ? toLowerCase() : toUpperCase()).join('')
}