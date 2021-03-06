function towerBuilder(nFloors) {
    let result = [];
    let maxLength = 2*nFloors-1;
    
    for (let i = nFloors; 0 < i; i--) {
      let ele = '*'.repeat(2*i-1);
      ele = ele.length < maxLength ? ' '.repeat((maxLength-ele.length)/2) + ele + ' '.repeat((maxLength-ele.length)/2) : ele;
      result.unshift(ele);
    }
    return result
  }