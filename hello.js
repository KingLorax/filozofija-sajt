var messages = ["Dobrodošli!", "Dobar dan!", "Volim Sofiju!"];
function changeText() {
	var curMessage = Math.floor(Math.random() * messages.length);
	document.getElementById("poruka").innerHTML = messages[curMessage];
}