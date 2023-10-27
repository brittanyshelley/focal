const printItems = function(array) {
  for (let item of array) {
    console.log(item);
  }
}

const printItems2 = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}
const printItems3 = function(array) {
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement)=> {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
}

const array = ["A", "B", "C", "D", "E"];
const array1 = ["A", ["B", "C"], "D", "E"];
printItems(array);
printItems(array1);
printItems2(array);
printItems2(array1);
printItems3(array);
printItems3(array1);