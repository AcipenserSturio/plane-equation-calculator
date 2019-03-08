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
	var x = (y2 - y1) * (z3 - z1) - (z2 - z1) * (y3 - y1);
	var y = (z2 - z1) * (x3 - x1) - (x2 - x1) * (z3 - z1); // Not reversed!
	var z = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
	var d = -(x1 * x + y1 * y + z1 * z);
	
	// Point coordinates in proper string form
	var a_pt = "A(" + x1 + ";&nbsp;" + y1 + ";&nbsp;" + z1 + ")";
	var b_pt = "B(" + x2 + ";&nbsp;" + y2 + ";&nbsp;" + z2 + ")";
	var c_pt = "C(" + x3 + ";&nbsp;" + y3 + ";&nbsp;" + z3 + ")";

	// Making the line with the equation
	var x_output;
	if (x == 0) {
		x_output = "";
	} else if (x == 1) {
		x_output = "x";
	} else if (x < 0) {
		x_output = -x + "x";
	} else {
		x_output = x + "x";
	}
	
	var y_output;
	if (y == 0) {
		y_output = "";
	} else if (y == 1) {
		y_output = "y";
	} else if (y < 0) {
		y_output = -y + "y";
	} else {
		y_output = y + "y";
	}
	
	var z_output;
	if (z == 0) {
		z_output = "";
	} else if (z == 1) {
		z_output = "z";
	} else if (z < 0) {
		z_output = -z + "z";
	} else {
		z_output = z + "z";
	}
	
	var d_output;
	if ((x == 0) && (y == 0) && (z == 0) && (d == 0)) {
		d_output = "0";
	} else if (d == 0) {
		d_output = "";
	} else if (d < 0) {
		d_output = -d;
	} else {
		d_output = d;
	}
	
	var x_sign;
	if (x < 0) {
		x_sign = "- ";
	} else {
		x_sign = "";
	}
	
	var y_sign;
	if (y < 0) {
		y_sign = " - ";
	} else if ((y > 0) && (x != 0)) {
		y_sign = " + ";
	} else {
		y_sign = "";
	}
	
	var z_sign;
	if (z < 0) {
		z_sign = " - ";
	} else if ((z > 0) && (y != 0)) {
		z_sign = " + ";
	} else if ((z > 0) && (y == 0) && (x != 0)) {
		z_sign = " + ";
	} else {
		z_sign = "";
	}
	
	var d_sign;
	if (d < 0) {
		d_sign = " - ";
	} else if ((d > 0) && (z != 0)) {
		d_sign = " + ";
	} else if ((d > 0) && (z == 0) && (y != 0)) {
		d_sign = " + ";
	} else if ((d > 0) && (z == 0) && (y == 0) && (x != 0)) {
		d_sign = " + ";
	} else {
		d_sign = "";
	}
	
	// Concatenating it all
	var output_string = x_sign.concat(x_output, y_sign, y_output, z_sign, z_output, d_sign, d_output)
	
	// Display
	document.getElementById("res1").innerHTML = "<p>При " + a_pt + ", " + b_pt + ", " + c_pt + ":</p>";
	document.getElementById("res2").innerHTML = "<p>" + output_string + " = 0</p>";
}