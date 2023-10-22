function average(list) {
  var sum = 0;

  for( var i = 0; i < list.length; i++) {
    sum += parseInt( list[i], 10 );
  }

  return sum / list.length;
};  

console.log(average([3, 5, 7]));
