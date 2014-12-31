// var step1 = "Some jobs require more effort than skill. Bagging groceries, delivering packages, checking out customers -- the tasks are relatively easy. The difference is in the effort. All around you are people who work hard with little or no recognition. Vow to be the person who recognizes at least one of them every day. Do more than say thanks to a person who does a thankless job. Smile. Make eye contact. Exchange a kind word. Not only will you give respect, you'll also gain the best kind of respect -- the respect that comes from making a difference, however fleeting, in another person's life.";
// 589 characters
// 103 words

var step1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
// 1335 characters
// 220 words

if(step1.length <= 200){
	// can be copied. no issue!
} else {

	// let the splitting begin!

	// Is there are line break?
	// If line break, do A. If no line break, do B.
	
	// A here

	// B here

	// create x array that contains the words

		// Split the text into ~195-character strings 
		var x = step1.replace(/.{200}\S*\s+/g,"$&@").split(/\s+@/);

			// for test only: 
			console.log("For test only. Before check 200");
			for(i=0; i <x.length; i++){
				console.log("x" + i + ": " + x[i].length);
				console.log(x[i]);
			}
			// end test

		// Check the lengths
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
				}
			}
		}

			// for test only: 
			console.log("For test only. AFTER check 200")
			for(i=0; i < x.length; i++){
				console.log("x" + i + ": " + x[i].length);
				console.log(x[i]);
			}


}
