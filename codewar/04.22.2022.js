//Calculate average
function find_average(array) {
    const sum = array.reduce((a,c) =>  a + c, 0)
    const avg = (sum / array.length) || 0
    return avg;
  }