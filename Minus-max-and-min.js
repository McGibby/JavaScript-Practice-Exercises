array = [1,5,3,5,9];

function sumArray(array) {
  array.sort();
  array.shift();
  array.pop();
  var sum = array.reduce(function(a,b){
	return a+b;},0);
  console.log(sum);
};

sumArray(array);
