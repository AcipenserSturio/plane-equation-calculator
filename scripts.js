class Root {
	constructor(sign, whole, irr) {
		this.sign = sign;
		this.whole = whole;
		this.irr = irr;
		if (sign == "") {
			this.raw = whole*whole*irr;
		} else {
			this.raw = -whole*whole*irr;
		}
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

function multiply(a, b) {
	return toRoot(a.raw * b.raw);
}

function swapSign(a) {
	if (a.sign == "") {
		a.sign = "-";
	} else {
		a.sign = "";
	}
	return a;
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
	document.getElementById("res2").innerHTML = "<p>"
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
	
	var y2z3 = multiply(y2_obj, z3_obj);
	var y1z3 = multiply(y1_obj, z3_obj);
	var y2z1 = multiply(y2_obj, z1_obj);
	var y1z1 = multiply(y1_obj, z1_obj);
	var z2y3 = multiply(z2_obj, y3_obj);
	var z1y3 = multiply(z1_obj, y3_obj);
	var z2y1 = multiply(z2_obj, y1_obj);
	var z1y1 = multiply(z1_obj, y1_obj);
	
	var z2x3 = multiply(z2_obj, x3_obj);
	var z1x3 = multiply(z1_obj, x3_obj);
	var z2x1 = multiply(z2_obj, x1_obj);
	var z1x1 = multiply(z1_obj, x1_obj);
	var x2z3 = multiply(x2_obj, z3_obj);
	var x1z3 = multiply(x1_obj, z3_obj);
	var x2z1 = multiply(x2_obj, z1_obj);
	var x1z1 = multiply(x1_obj, z1_obj);
	
	var x2y3 = multiply(x2_obj, y3_obj);
	var x1y3 = multiply(x1_obj, y3_obj);
	var x2y1 = multiply(x2_obj, y1_obj);
	var x1y1 = multiply(x1_obj, y1_obj);
	var y2x3 = multiply(y2_obj, x3_obj);
	var y1x3 = multiply(y1_obj, x3_obj);
	var y2x1 = multiply(y2_obj, x1_obj);
	var y1x1 = multiply(y1_obj, x1_obj);
	
	var y2z3x1 = multiply(y2z3, x1_obj);
	var y1z3x1 = multiply(y1z3, x1_obj);
	var y2z1x1 = multiply(y2z1, x1_obj);
	var y1z1x1 = multiply(y1z1, x1_obj);
	var z2y3x1 = multiply(z2y3, x1_obj);
	var z1y3x1 = multiply(z1y3, x1_obj);
	var z2y1x1 = multiply(z2y1, x1_obj);
	var z1y1x1 = multiply(z1y1, x1_obj);
	
	var z2x3y1 = multiply(z2x3, y1_obj);
	var z1x3y1 = multiply(z1x3, y1_obj);
	var z2x1y1 = multiply(z2x1, y1_obj);
	var z1x1y1 = multiply(z1x1, y1_obj);
	var x2z3y1 = multiply(x2z3, y1_obj);
	var x1z3y1 = multiply(x1z3, y1_obj);
	var x2z1y1 = multiply(x2z1, y1_obj);
	var x1z1y1 = multiply(x1z1, y1_obj);
	
	var x2y3z1 = multiply(x2y3, z1_obj);
	var x1y3z1 = multiply(x1y3, z1_obj);
	var x2y1z1 = multiply(x2y1, z1_obj);
	var x1y1z1 = multiply(x1y1, z1_obj);
	var y2x3z1 = multiply(y2x3, z1_obj);
	var y1x3z1 = multiply(y1x3, z1_obj);
	var y2x1z1 = multiply(y2x1, z1_obj);
	var y1x1z1 = multiply(y1x1, z1_obj);
	
	document.getElementById("res3").innerHTML = "<p>"
	+ "("
	+ y2z3.toString()
	+ y1z3.getSign(true) + y1z3.toString(true)
	+ y2z1.getSign(true) + y2z1.toString(true)
	+ y1z1.getSign()     + y1z1.toString(true)
	+ z2y3.getSign(true) + z2y3.toString(true)
	+ z1y3.getSign()     + z1y3.toString(true)
	+ z2y1.getSign()     + z2y1.toString(true)
	+ z1y1.getSign(true) + z1y1.toString(true)
	+ ")x <br />+ "
	+ "("
	+ z2x3.toString()
	+ z1x3.getSign(true) + z1x3.toString(true)
	+ z2x1.getSign(true) + z2x1.toString(true)
	+ z1x1.getSign()     + z1x1.toString(true)
	+ x2z3.getSign(true) + x2z3.toString(true)
	+ x1z3.getSign()     + x1z3.toString(true)
	+ x2z1.getSign()     + x2z1.toString(true)
	+ x1z1.getSign(true) + x1z1.toString(true)
	+ ")y <br />+ "
	+ "("
	+ x2y3.toString()
	+ x1y3.getSign(true) + x1y3.toString(true)
	+ x2y1.getSign(true) + x2y1.toString(true)
	+ x1y1.getSign()     + x1y1.toString(true)
	+ y2x3.getSign(true) + y2x3.toString(true)
	+ y1x3.getSign()     + y1x3.toString(true)
	+ y2x1.getSign()     + y2x1.toString(true)
	+ y1x1.getSign(true) + y1x1.toString(true)
	+ ")z <br />+ "
	
	
	+ y2z3x1.toString()
	+ y1z3x1.getSign()     + y1z3x1.toString(true)
	+ y2z1x1.getSign()     + y2z1x1.toString(true)
	+ y1z1x1.getSign(true) + y1z1x1.toString(true)
	+ z2y3x1.getSign()     + z2y3x1.toString(true)
	+ z1y3x1.getSign(true) + z1y3x1.toString(true)
	+ z2y1x1.getSign(true) + z2y1x1.toString(true)
	+ z1y1x1.getSign()     + z1y1x1.toString(true)
	+ "<br />"
	+ z2x3y1.getSign(true) + z2x3y1.toString(true)
	+ z1x3y1.getSign()     + z1x3y1.toString(true)
	+ z2x1y1.getSign()     + z2x1y1.toString(true)
	+ z1x1y1.getSign(true) + z1x1y1.toString(true)
	+ x2z3y1.getSign()     + x2z3y1.toString(true)
	+ x1z3y1.getSign(true) + x1z3y1.toString(true)
	+ x2z1y1.getSign(true) + x2z1y1.toString(true)
	+ x1z1y1.getSign()     + x1z1y1.toString(true)
	+ "<br />"
	+ x2y3z1.getSign(true) + x2y3z1.toString(true)
	+ x1y3z1.getSign()     + x1y3z1.toString(true)
	+ x2y1z1.getSign()     + x2y1z1.toString(true)
	+ x1y1z1.getSign(true) + x1y1z1.toString(true)
	+ y2x3z1.getSign()     + y2x3z1.toString(true)
	+ y1x3z1.getSign(true) + y1x3z1.toString(true)
	+ y2x1z1.getSign(true) + y2x1z1.toString(true)
	+ y1x1z1.getSign()     + y1x1z1.toString(true)
	+ " = 0"
	+ "</p>";
	
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