const whatToDoForLunch = function(hungry, availableTime) {
  if (!hungry) {
    console.log("Wait until your hungry");
  } else if (availableTime < 20) {
    console.log("Pick up a snack or grab something from home!");
  } else if (availableTime >= 20 && availableTime <= 30) {
    console.log("You deserve a break and should take time to cook a tasty meal!");
  } else {
    console.log("This is an intense program after all and you should probably reconsider taking a long lunch");
  }
};

/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");