//Print Fibonacci's number up to 1000

var number = 1;
var newNumber = 1;
console.log(number);


for (var i = 0; i < 100; i++) { 
      number = number + newNumber;
      newNumber =  number - newNumber;
      console.log(number);
      if (number>1000) {
	   break;}
}
	