//calculates total amount saved including compound interest, based on current amount saved and added amount

function interest(currentSaved,newSaved){
	var newTotal = currentSaved + newSaved;
  		if (newTotal>3000){
     		newTotal = newTotal+(newTotal*(3/100));
        console.log(newTotal);}
  	 else if (newTotal>1000){
     		newTotal = newTotal+(newTotal*(2/100));
        console.log(newTotal);}
     else {
			 console.log(newTotal);}
}

interest(400,200);