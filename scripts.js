function ipa(sound) {
    var path = "mp3\\";
    var snd = new Audio(path + sound + ".mp3");
    snd.play();
}
function calc() {
	// Get input from HTML
	var x1 = Number(document.getElementById("n1").value);
	var y1 = Number(document.getElementById("n2").value);
	var z1 = Number(document.getElementById("n3").value);
	var x2 = Number(document.getElementById("n4").value);
	var y2 = Number(document.getElementById("n5").value);
	var z2 = Number(document.getElementById("n6").value);
	var x3 = Number(document.getElementById("n7").value);
	var y3 = Number(document.getElementById("n8").value);
	var z3 = Number(document.getElementById("n9").value);
	
	// Calculate some cool and new values
	var sum = x1 + y1 + z1 + x2 + y2 + z2 + x3 + y3 + z3;
	var x = (y2 - y1) * (z3 - z1) - (z2 - z1) * (y3 - y1);
	var y = (z2 - z1) * (x3 - x1) - (x2 - x1) * (z3 - z1); // Not reversed!
	var z = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
	var d = -(x1 * x + y1 * y + z1 * z);
	
	// Display
	document.getElementById("res1").innerHTML = "<p>При A(" + x1 + "; " + y1 + "; " + z1 + "), B(" + x2 + "; " + y2 + "; " + z2 + "), C(" + x3 + "; " + y3 + "; " + z3 + "):</p>";
	document.getElementById("res2").innerHTML = "<p>" + x + "x + " + y + "y + " + z + "z + " + d + " = 0</p>";
}