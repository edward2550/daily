//function that takes in array of strings , we want to return the a new array with the medium length of each string

function medArray(arr) {
    // get avg legnth => roundede
    let avgLength = Math.round(arr.join('').length / arr.length)
    //create new arr using each letter the avgLength amount
    return arr.map(str => str[0].repeat(avgLength))
  }
  
  console.log(medArray(['uu','uu']))