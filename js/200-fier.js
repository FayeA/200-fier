
function clearstep1(){
	document.getElementById("step1form").value = "";
	location.reload();
}

function step1(){

	$(".content").append('<form class="form-horizontal" id="step2form"><label for="step2"><h2>Step 2 <small>Click the textboxes to copy the 200-fied texts. Paste them to their destination.</small></h2></label></form>');

	$("#step1button").prop('disabled', true);

	//get text from form
	var ourText = document.getElementById("step1form").value;

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

	//add value to step2 textareas

	for (j = 0; j < x.length; j++){
		var HTMLstep2 = '<div class="form-group"><textarea class="step2form" id="step2-%" type="text" row="3" onclick="ClipBoard(this)" readonly></textarea><p>Click the textbox to copy. Length: ~ characters</p></div>';
		formattedStep2 = HTMLstep2.replace("%",j).replace("~", x[j].length);
		$("#step2form").append(formattedStep2);
		document.getElementById("step2-"+j).value = x[j];
	}// end of for

} //end of function step1()


function ClipBoard(x) {
  clipboardData.setData('text', x.innerText);
}