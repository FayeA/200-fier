function step1(){

	//get text from form
	var ourText = document.getElementById("step1text").value;

	//split the text
	var x = ourText.replace(/.{200}\S*\s+/g,"$&@").split(/\s+@/);

	//ensure only 200 characters per array item
	//and if greater than 200 characters, fix
	for (i = 0; i < x.length; i++){

		while (x[i].length > 200){
			var y = null;
			var tempx = null;
			y = x[i].split(" ");
			tempx = y.pop();
			x[i] = y.join(" ");
			if (x[i+1] === undefined){
				x[i+1] = tempx;
			} else {
				x[i+1] = tempx + " " + x[i+1];
			} //end of if-else
		} //end of while
	} //end of for

	return x;

} //end of function step1()

