function balancingParentheses(string) {
    let missing = 0;
    let openings = 0;
  
    for (let i = 0; i < string.length; ++i) {
      if (string[i] === '(') {
        ++openings;
        continue;
      }
  
      if (openings > 0) {
        --openings;
      } else {
        ++missing;
      }
    }
  
    return missing + openings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// function takes in string, and splits it into individual characters
// those individual characters are put into an array, which is iterated over
// increases count of variables to count opening and closing parenthesis
// once the loop is done, subtracts the whichever number is smaller and returns that number
