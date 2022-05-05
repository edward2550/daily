array = [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26]
number = 2

function evenNumbers(array, number) {
    let answer =  array.filter(numbers => numbers % 2 === 0)
    console.log(answer)
    console.log(answer.length)
    console.log(number)
    console.log(answer.length - number)
    return answer.splice(answer.length - number, number )
     
    }

evenNumbers(array,number)