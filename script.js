function randomise(){
	var colour="";
	for(var i=0;i<3;i++){
		colour+=getRandomNumber();
	}
	colour=colour.toUpperCase();
	document.body.style.backgroundColor="#"+colour;
	document.getElementById("blackText").innerHTML="The chosen colour is #"+colour;
	document.getElementById("whiteText").innerHTML="The chosen colour is #"+colour;
}

function getRandomNumber(){ //Returns a number between 00 and FF (hex)
	var number=(Math.random()*255);
	number=Math.round(number);
	number=number.toString(16);
	while(number.length<2){//Deals with Leading 0
		number="0"+number;
	}
	return number;
}