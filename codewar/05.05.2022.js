function findEvenIndex(arr){
  let equalIndex = -1
  arr.forEach((item,index) => {
      let leftSide = arr.slice(0,index).reduce((sum,item)=> sum + item,0)
      let rightSide = arr.slice(index + 1).reduce((sum,item)=> sum + item,0)
      if(leftSide == rightSide) {equalIndex = index }
      
  })
  return equalIndex
}


//loop through array and each something

//reduce left and right of each index

//get the subset array on each side of index  - slice 