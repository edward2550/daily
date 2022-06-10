String.prototype.sort = function() {
    return this.split("").sort().join("");
  };
  
  function anagrams(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
  }