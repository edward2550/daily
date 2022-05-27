function findUniq(arr) {
    let result = arr.filter((item,index) => arr.indexOf(item) !== index)
    return arr.filter((item) => item !== result[0])[0]
    }