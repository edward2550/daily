function moveZeros(arr) {
    const zeros = arr.filter((elm) => elm === 0).length;
   const result = arr.filter((elm) => elm !== 0);
   
   for (let i = 0; i < zeros; i += 1) {
     result.push(0);
   }
   
   return result;
 }