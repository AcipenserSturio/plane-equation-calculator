class Root {
	constructor(sign, whole, irr) {
		this.sign = sign;
		this.whole = whole;
		this.irr = irr;
	}
	toString(noSign) {
		if (noSign) {
			if (this.irr == 1) {
				return this.whole;
			} else if (this.whole == 1) {
				return "√" + this.irr;
			} else {
				return this.whole + "√" + this.irr;
			}
		} else {
			if (this.irr == 1) {
				return this.sign + this.whole;
			} else if (this.whole == 1) {
				return this.sign + "√" + this.irr;
			} else {
				return this.sign + this.whole + "√" + this.irr;
			}
		}
	}
	getSign(reverse) {
		if (reverse) {
			if (this.sign == "") {
				return "&nbsp;-&nbsp;";
			} else {
				return "&nbsp;+&nbsp;";
			}
		} else {
			if (this.sign == "") {
				return "&nbsp;+&nbsp;";
			} else {
				return "&nbsp;-&nbsp;";
			}
		}
	}
}


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

function rootOrNumber(a, isRoot) {
	if(isRoot) {
		return toRoot(a);
	} else {
		var sign = "";
		if (a < 0) {
			sign = "-"
		}
		return new Root(sign, Math.abs(a), 1);
	}
}

function toRoot(a) {
	var sign = "";
	if (a < 0) {
		sign = "-";
	}
	a = Math.abs(a);
	if (a == 0) {
		return new Root("", 0, 1);
	} else {
		for (var i = Math.ceil(Math.sqrt(a)); i > 0; i--) {
			if (a % (i*i) == 0) {
				return new Root(sign, i, a / (i*i));
			}
		}
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
	
	var x1_obj = rootOrNumber(x1, x1_root);
	var y1_obj = rootOrNumber(y1, y1_root);
	var z1_obj = rootOrNumber(z1, z1_root);
	var x2_obj = rootOrNumber(x2, x2_root);
	var y2_obj = rootOrNumber(y2, y2_root);
	var z2_obj = rootOrNumber(z2, z2_root);
	var x3_obj = rootOrNumber(x3, x3_root);
	var y3_obj = rootOrNumber(y3, y3_root);
	var z3_obj = rootOrNumber(z3, z3_root);
	
	var a_pt = "A(" 
	+ x1_obj.toString() + ";&nbsp;" 
	+ y1_obj.toString() + ";&nbsp;" 
	+ z1_obj.toString() + ")";
	var b_pt = "B(" 
	+ x2_obj.toString() + ";&nbsp;" 
	+ y2_obj.toString() + ";&nbsp;" 
	+ z2_obj.toString() + ")";
	var c_pt = "C(" 
	+ x3_obj.toString() + ";&nbsp;" 
	+ y3_obj.toString() + ";&nbsp;" 
	+ z3_obj.toString() + ")";
	
	document.getElementById("res1").innerHTML = "<p>При " + a_pt + ", " + b_pt + ", " + c_pt + ":</p>";
	document.getElementById("res1").innerHTML = "<p>"
	+ "(("
	+ y2_obj.toString() + y1_obj.getSign(true) + y1_obj.toString(true) + ")(" 
	+ z3_obj.toString() + z1_obj.getSign(true) + z1_obj.toString(true) + ") - (" 
	+ z2_obj.toString() + z1_obj.getSign(true) + z1_obj.toString(true) + ")(" 
	+ y3_obj.toString() + y1_obj.getSign(true) + y1_obj.toString(true) + "))(x"
	+ x1_obj.getSign(true) + x1_obj.toString(true) 
	+ ") +<br />+ " + "(("
	+ z2_obj.toString() + z1_obj.getSign(true) + z1_obj.toString(true) + ")(" 
	+ x3_obj.toString() + x1_obj.getSign(true) + x1_obj.toString(true) + ") - (" 
	+ x2_obj.toString() + x1_obj.getSign(true) + x1_obj.toString(true) + ")(" 
	+ z3_obj.toString() + z1_obj.getSign(true) + z1_obj.toString(true) + "))(y"
	+ y1_obj.getSign(true) + y1_obj.toString(true)
	+ ") +<br />+ " + "(("
	+ x2_obj.toString() + x1_obj.getSign(true) + x1_obj.toString(true) + ")(" 
	+ y3_obj.toString() + y1_obj.getSign(true) + y1_obj.toString(true) + ") - (" 
	+ y2_obj.toString() + y1_obj.getSign(true) + y1_obj.toString(true) + ")(" 
	+ x3_obj.toString() + x1_obj.getSign(true) + x1_obj.toString(true) + "))(z"
	+ z1_obj.getSign(true) + z1_obj.toString(true) + ")" 
	+ " = 0</p>";
	/*
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
	*/
}