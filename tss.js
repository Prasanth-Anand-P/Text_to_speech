function speech(){
	var text = document.getElementById('txt').value;
	responsiveVoice.speak(text);
}