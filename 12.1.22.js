// we want to create a function that takes multple arrays and we want to create sub arrays that do not reapaet 
function solve(arr){
  //set -> unique values
  //map[1,2][5,6,6] =. 2,1,2
  //recduce =. 2*1*2
  return arr.map(subA => new Set(subA).size).reduce((a,c) => a*c,1)
}


const solve = arr => arr.reduce((a,c) => a * new Set(c).size,1)
