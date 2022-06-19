function orderWeight(strng) {
    // generate new obj
    let obj = {};
    // use truthy to check for value
    if (strng) {
        // split string and iterate over each index of integers
        strng.split(" ").forEach( (str) => {
            // convert the string into a number and reduce the numbers into one value
            let total = str.split('').map(Number).reduce((accumulator, currentValue) => accumulator + currentValue )
            // because JS only allows unique keys in objects, this lets us relate multiple 
            !obj[total] ? obj[total] = [str] : obj[total].push(str)
        });
    }
     
    let orderedObj = {};
    Object.keys(obj).sort().forEach( (key) => {
      orderedObj[key] = obj[key];
    });
     
    let finalArr = [];
    Object.keys(orderedObj).forEach( (key) => {
      orderedObj[key].length > 1 ? finalArr = [...finalArr, ...orderedObj[key].sort()] : finalArr.push(orderedObj[key][0])
    });
     
    return finalArr.join(' ')
}