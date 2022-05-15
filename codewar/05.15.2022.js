//input is a string of random letters , the output returns the respective letter repeated n times based on it's position in the string , first leeeter needs to be capitalized 
function accum(s){
    let arr = []
    for(let i = 0; i < s.length; i++){
        arr.push(format(s[i], i + 1))
    }
    return arr.join('-')
}

function format(s,num){
    let letter = s.toUpperCase()

    while(letter.length !== num){
        letter += s.toLowerCase()
    }
    return letter
}