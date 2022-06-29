function score( dice ) {
    // Business rules of the game:
    //  v: the dice value
    //  c: the number of dice required to trigger the rule
    //  p: the points added each time the rule is triggered
    const scoringRules = [
      {v: 1, c: 3, p: 1000},
      {v: 6, c: 3, p: 600},
      {v: 5, c: 3, p: 500},
      {v: 4, c: 3, p: 400},
      {v: 3, c: 3, p: 300},
      {v: 2, c: 3, p: 200},
      {v: 1, c: 1, p: 100},
      {v: 5, c: 1, p: 50}
    ]
  
    // returns the score given a histogram mapping a dice value to the number of dice with that value
    const scoreForHistogram = counts => {
      let score = 0
      for (const {v, c, p} of scoringRules) {
        const ruleCount = Math.floor((counts[v] || 0) / c);
        counts[v] -= ruleCount * c;
        score += ruleCount * p;
      }
      return score;
    };
  
    // Generate the histogram required by scoreForHistogram
    const counts = [...Array(7)].map(v=>0);// note that the rest of the logic uses 1-indexed arrays, so we need 7 entries to get a valid counts[6] entry
    for (const v of dice) counts[v]++;
  
    return scoreForHistogram(counts)
  }