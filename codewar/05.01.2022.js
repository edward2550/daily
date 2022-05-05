//Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:
function countGrade(scores){
    return {
      'S': scores.filter(function(x){return x == 100}).length,
      'A': scores.filter(function(x){return (x < 100 && x >= 90)}).length,
      'B': scores.filter(function(x){return (x < 90 && x >= 80)}).length,
      'C': scores.filter(function(x){return (x < 80 && x >= 60)}).length,
      'D': scores.filter(function(x){return (x < 60 && x >= 0)}).length,
      'X': scores.filter(function(x){return x == -1}).length,
    };
  }