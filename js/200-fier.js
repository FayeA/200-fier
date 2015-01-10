
function clearstep1(){
	document.getElementById("step1form").value = "";
	location.reload();
}


function step1(){

	$(".content").append('<form class="form-horizontal" id="step2form"><label for="step2"><h2>Step 2 <small>Click the textboxes to copy the 200-fied texts. Paste them to their destination.</small></h2></label></form>');

	$("#step1button").prop('disabled', true);

	//get text from form
	var ourText = document.getElementById("step1form").value;

	var w = ourText.split("\n");
	console.log(w);
	for (k=0; k < w.length; k++){

		//split the text
		var x = null
		x = w[k].replace(/.{200}\S*\s+/g,"$&@").split(/\s+@/);

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


	//add value to step2 textareas

		for (j = 0; j < x.length; j++){
			var HTMLstep2 = '<div class="form-group"><div class="step2form" id="step2-%" onclick="ClipBoard(this)"></div><p class="instr">Length: ~ chars</p></div>';
			var xid = k+""+i+""+j;
			formattedStep2 = HTMLstep2.replace("%",xid).replace("~", x[j].length);
			$("#step2form").append(formattedStep2);
			
			//$(xid).text(x[j]);
			document.getElementById("step2-" + xid).innerText = x[j];
		}// end of for


		}// end for new line

} //end of function step1()



function ClipBoard(xx) {
  clipboardData.setData('text', xx.innerText);
}
