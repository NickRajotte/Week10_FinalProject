// These are the variables declared to check to see if they have clicked on the links
	var Link1;
	var Link2; 
		$(document).ready(function ()
	{
		//This is a jquery function used to disable the continue button until the requirements are met
		$("#submitAgreement").attr("disabled", true); 
		scrollCheck();
		continueButton();
		//This is pulling the ID from the HTML for the first link and setting another jquery function to check if it was clicked and sending a true once it has
		$("#agreeLink1").click(function(e) {
			Link1 = true; 
			checkAll(Link1);
	});
		//This does the same as the above only for link 2
		$("#agreeLink2").click(function(e){
			Link2 = true; 
			checkAll(Link2);
		});
	});
	//This is setting a variable and pulling the information fromt the HTML ID in this case
	// the agree Scroll ID where all the jibberish text is
	var objDiv = document.getElementById("agreeScroll");
	
	//this eventlistener runs the scrollCheck Function
	objDiv.addEventListener("scroll", scrollCheck);
	//before this scroll check can work the above links have to be clicked
	//if they have not clicked the links the rest wont work it must be completed in a step by step process
	function scrollCheck() {
		if(Link1 == true && Link2 == true){
		
		//this is saying once the variable declared above which started at the top of the scroll bar
		//reaches the bottom  it will activate the 2 radio buttons agree and not agree
		if (objDiv.scrollTop == (objDiv.scrollHeight-objDiv.offsetHeight)) { 
			
			$("#agree").attr("disabled", false); 
			$("#notagree").attr("disabled", false); 
		
		}
	}
}
	
	
//This is setting variables to get information from the radio buttons getting the HTML ID
//that was given to the radio buttons
var accept = document.getElementById("agree");
var decline = document.getElementById("notagree");

//These event listeners are what track when they click the button and run the approiate statement
//if they click accept if runs the first if statment if decline is selected it goes to the
//else if statement where it will pop up an alert and keep the continue button disabled
accept.addEventListener("click", continueButton);
decline.addEventListener("click", continueButton);

//This is the function that is called into use in the above eventlisteners
function continueButton(){
//if they selected accept they will see the Continue button become available for click
if (accept.checked){
	$("#submitAgreement").attr("disabled", false); 
}
//if they click decline i have it set up to pop up an alert letting them know they can not continue
//unless they agree to all the terms above.  if they click accept afterwards it will activate the button
else if (decline.checked) {
    alert("You have not agreed to the terms and conditions\n You Can not Continue Until You Agree to the Terms\n\n\n Press OK to Continue");
	$("#submitAgreement").attr("disabled", true); 
}
	//This is for the confirmation page once the continue button is clicked it will run this function
	document.getElementById('submitAgreement').onclick = function() {
		//this is the varible set to get the information from the continue button HTML ID
		var Continue = document.getElementById("submitAgreement");
	//If it is clicked it brings you to a new page and gets the element ID's that are saved for this special occassion of the continue button clicking
	if(Continue.click)
	{
		var confirmation = document.getElementById('confirmation');					
			confirmation.style.display = "block";
		var section_1 = document.getElementById('section1');
			section_1.style.display = "none";	
		var section_2 = document.getElementById('section2');
			section_2.style.display = "none";	
	}
}
	

	}
