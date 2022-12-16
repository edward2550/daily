// string array dup
//recive an array of string , return the strings without dups
//mao through the array and filter the strings checking if it matches the pervios character
//map()
//split() filter() join()
function dup(arr){
return arr.map(word => word.split('').filter((w,i,a) => w != a[i-1]).join(''))
}