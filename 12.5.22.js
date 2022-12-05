function stringTransformer(str) {

    //  let newStr = str.split('').reverse().join('')
    // let results = newStr.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
    //   return results
      return str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
    
    }