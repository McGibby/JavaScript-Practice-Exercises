//removes the smallest and largest numbers of an array and then returns the sum of the remaining numbers

array = [1,5,3,5,9];

function sumArray(array) {
  array.sort(); //sort in lowest to highest
  array.shift(); //remove first number
  array.pop(); //remove last number
  var sum = array.reduce(function(a,b){
	return a+b;},0); //reduce remaining numbers to single number
  console.log(sum);
};

sumArray(array);
