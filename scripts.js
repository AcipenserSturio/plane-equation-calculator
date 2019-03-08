function ipa(sound) {
    var path = "mp3\\";
    var snd = new Audio(path + sound + ".mp3");
    snd.play();
}

function gcd_rec(a, b) {
	if (a != 0 && b != 0) {
		if (b) {
			return gcd_rec(b, a % b);
		} else {
			return Math.abs(a);
		}
	} else {
		return a + b; // One of them is 0
	}
}

function rootChar(a) {
	if (a) {
		return "√";
	} else {
		return ""; 
	}
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
	
	var x1_root = document.getElementById("r1").checked;
	var y1_root = document.getElementById("r2").checked;
	var z1_root = document.getElementById("r3").checked;
	var x2_root = document.getElementById("r4").checked;
	var y2_root = document.getElementById("r5").checked;
	var z2_root = document.getElementById("r6").checked;
	var x3_root = document.getElementById("r7").checked;
	var y3_root = document.getElementById("r8").checked;
	var z3_root = document.getElementById("r9").checked;
	
	
	// Calculate some cool and new values
	var x = (y2 - y1) * (z3 - z1) - (z2 - z1) * (y3 - y1);
	var y = (z2 - z1) * (x3 - x1) - (x2 - x1) * (z3 - z1); // Not reversed!
	var z = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
	var d = -(x1 * x + y1 * y + z1 * z);
	
	// I don't like starting with a minus
	if (x < 0 || x == 0 && y < 0 || x == 0 && y == 0 && z < 0 || x == 0 && y == 0 && z == 0 && d < 0) {
		x = -x;
		y = -y;
		z = -z;
		d = -d;
	}
	
	// Let's see if any simplification has to take place
	var gcd = Math.abs(gcd_rec(gcd_rec(x,y), gcd_rec(z,d)));
	if (gcd != 1 && gcd != 0) {
		x = x/gcd;
		y = y/gcd;
		z = z/gcd;
		d = d/gcd;
	}
	
	// Point coordinates in proper string form
	var a_pt = "A(" + rootChar(x1_root) + x1 + ";&nbsp;" + rootChar(y1_root) + y1 + ";&nbsp;" + rootChar(z1_root) + z1 + ")";
	var b_pt = "B(" + rootChar(x2_root) + x2 + ";&nbsp;" + rootChar(y2_root) + y2 + ";&nbsp;" + rootChar(z2_root) + z2 + ")";
	var c_pt = "C(" + rootChar(x3_root) + x3 + ";&nbsp;" + rootChar(y3_root) + y3 + ";&nbsp;" + rootChar(z3_root) + z3 + ")";

	// Making the line with the equation
	var x_output;
	if (x == 0) {
		x_output = "";
	} else if (x == 1 || x == -1) {
		x_output = "x";
	} else if (x < 0) {
		x_output = -x + "x";
	} else {
		x_output = x + "x";
	}
	
	var y_output;
	if (y == 0) {
		y_output = "";
	} else if (y == 1 || y == -1) {
		y_output = "y";
	} else if (y < 0) {
		y_output = -y + "y";
	} else {
		y_output = y + "y";
	}
	
	var z_output;
	if (z == 0) {
		z_output = "";
	} else if (z == 1 || z == -1) {
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