//Counting sheep...
function countSheeps(arrayOfSheep) {
    var num=0;
      for(var i=0; i<arrayOfSheep.length; i++)
      {  
        if(arrayOfSheep[i]==true){ num++; }
      }
      return num;
  }