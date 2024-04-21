function countWaysToChooseThree(cards) {
    // Sort the array to make sure we are looking at all combinations
    cards.sort((a, b) => a - b);
    
    let count = 0;
    const len = cards.length;
  
    for (let i = 0; i < len - 2; i++) {
      // For each card, find the next two cards that satisfy the condition
      let j = i + 1;
      let k = i + 2;
  
      while (k < len) {
        // Check if the difference between adjacent cards is less than or equal to 2
        if (cards[k] - cards[j] <= 2) {
          count++;
          // Move k to the next valid card
          k++;
        } else {
          // Move j and k to the next set of cards
          j++;
          k++;
        }
      }
    }
  
    return count;
  }
  
  function countWays() {
    const inputN = document.getElementById("inputN");
    const N = parseInt(inputN.value);
  
    const cards = [];
    for (let i = 1; i <= N; i++) {
      cards.push(i);
    }
  
    const ways = countWaysToChooseThree(cards);
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Number of ways to choose three cards: ${ways}`;
  }
  