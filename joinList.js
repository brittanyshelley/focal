/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const conceptList2 = []

const joinList = function(arr) {
  let string = ' ';
  //Checking if string is empty and returning an empty string if it is
  if (arr.length === 0) {
    return "";
  }
  //iterating through the string and adding a cooma and space after each item
  for (var i = 0; i < arr.length; i++) {
    string += arr[i] + ', ';
  }
  //outputting the new string without the last comma
  return string.substring(1, string.length - 2);
}
// Test / Driver Code below...

const concepts = joinList(conceptList);
const concepts2 = joinList(conceptList2);
console.log(`Today I learned about ${concepts}.`);
