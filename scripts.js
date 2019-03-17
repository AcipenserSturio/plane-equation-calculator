// Main program
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
	
	// Create root objects based on the inputs
	var x1_obj = rootOrNumber(x1, x1_root);
	var y1_obj = rootOrNumber(y1, y1_root);
	var z1_obj = rootOrNumber(z1, z1_root);
	var x2_obj = rootOrNumber(x2, x2_root);
	var y2_obj = rootOrNumber(y2, y2_root);
	var z2_obj = rootOrNumber(z2, z2_root);
	var x3_obj = rootOrNumber(x3, x3_root);
	var y3_obj = rootOrNumber(y3, y3_root);
	var z3_obj = rootOrNumber(z3, z3_root);
	
	// Output the three points
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

	// Open the brackets by multiplying freaking everything. 
	// Create the roots for the new multiplied thingies.
	// Some of them are positive, some are negative.
	var y2z3 = multiply(y2_obj, z3_obj);
	var y1z3 = swapSign(multiply(y1_obj, z3_obj));
	var y2z1 = swapSign(multiply(y2_obj, z1_obj));
	var y1z1 = multiply(y1_obj, z1_obj);
	var z2y3 = swapSign(multiply(z2_obj, y3_obj));
	var z1y3 = multiply(z1_obj, y3_obj);
	var z2y1 = multiply(z2_obj, y1_obj);
	var z1y1 = swapSign(multiply(z1_obj, y1_obj));
	
	var z2x3 = multiply(z2_obj, x3_obj);
	var z1x3 = swapSign(multiply(z1_obj, x3_obj));
	var z2x1 = swapSign(multiply(z2_obj, x1_obj));
	var z1x1 = multiply(z1_obj, x1_obj);
	var x2z3 = swapSign(multiply(x2_obj, z3_obj));
	var x1z3 = multiply(x1_obj, z3_obj);
	var x2z1 = multiply(x2_obj, z1_obj);
	var x1z1 = swapSign(multiply(x1_obj, z1_obj));
	
	var x2y3 = multiply(x2_obj, y3_obj);
	var x1y3 = swapSign(multiply(x1_obj, y3_obj));
	var x2y1 = swapSign(multiply(x2_obj, y1_obj));
	var x1y1 = multiply(x1_obj, y1_obj);
	var y2x3 = swapSign(multiply(y2_obj, x3_obj));
	var y1x3 = multiply(y1_obj, x3_obj);
	var y2x1 = multiply(y2_obj, x1_obj);
	var y1x1 = swapSign(multiply(y1_obj, x1_obj));
	
	var y2z3x1 = swapSign(multiply(y2z3, x1_obj));
	var y1z3x1 = multiply(y1z3, x1_obj);
	var y2z1x1 = multiply(y2z1, x1_obj);
	var y1z1x1 = swapSign(multiply(y1z1, x1_obj));
	var z2y3x1 = multiply(z2y3, x1_obj);
	var z1y3x1 = swapSign(multiply(z1y3, x1_obj));
	var z2y1x1 = swapSign(multiply(z2y1, x1_obj));
	var z1y1x1 = multiply(z1y1, x1_obj);
	
	var z2x3y1 = swapSign(multiply(z2x3, y1_obj));
	var z1x3y1 = multiply(z1x3, y1_obj);
	var z2x1y1 = multiply(z2x1, y1_obj);
	var z1x1y1 = swapSign(multiply(z1x1, y1_obj));
	var x2z3y1 = multiply(x2z3, y1_obj);
	var x1z3y1 = swapSign(multiply(x1z3, y1_obj));
	var x2z1y1 = swapSign(multiply(x2z1, y1_obj));
	var x1z1y1 = multiply(x1z1, y1_obj);
	
	var x2y3z1 = swapSign(multiply(x2y3, z1_obj));
	var x1y3z1 = multiply(x1y3, z1_obj);
	var x2y1z1 = multiply(x2y1, z1_obj);
	var x1y1z1 = swapSign(multiply(x1y1, z1_obj));
	var y2x3z1 = multiply(y2x3, z1_obj);
	var y1x3z1 = swapSign(multiply(y1x3, z1_obj));
	var y2x1z1 = swapSign(multiply(y2x1, z1_obj));
	var y1x1z1 = multiply(y1x1, z1_obj);
	
	// Arrange the roots into four arrays: x, y, z, d.
	var x_array = [y2z3, y1z3, y2z1, y1z1, z2y3, z1y3, z2y1, z1y1];
	var y_array = [z2x3, z1x3, z2x1, z1x1, x2z3, x1z3, x2z1, x1z1];
	var z_array = [x2y3, x1y3, x2y1, x1y1, y2x3, y1x3, y2x1, y1x1];
	var d_array = [y2z3x1, y1z3x1, y2z1x1, y1z1x1, z2y3x1, z1y3x1, z2y1x1, z1y1x1, z2x3y1, z1x3y1, z2x1y1, z1x1y1, x2z3y1, x1z3y1, x2z1y1, x1z1y1, x2y3z1, x1y3z1, x2y1z1, x1y1z1, y2x3z1, y1x3z1, y2x1z1, y1x1z1];
	
	// Try to add them up.
	x_array = addRoots(x_array);
	y_array = addRoots(y_array);
	z_array = addRoots(z_array);
	d_array = addRoots(d_array);
	
	// Find the greatest common divisor of every root in order to try and simplify.
	var x_gcd = getGcdFromArray(x_array);
	var y_gcd = getGcdFromArray(y_array);
	var z_gcd = getGcdFromArray(z_array);
	var d_gcd = getGcdFromArray(d_array);
	var fullGcd = gcd_rec(gcd_rec(x_gcd, y_gcd), gcd_rec(z_gcd, d_gcd));
	if (fullGcd != 1 && fullGcd != 0) {
		var gcdRoot = toRoot(fullGcd);
		
		// Well, now let's try to simplify, eh.
		x_array = reduceArray(x_array, fullGcd);
		y_array = reduceArray(y_array, fullGcd);
		z_array = reduceArray(z_array, fullGcd);
		d_array = reduceArray(d_array, fullGcd);
	}
	
	// Output the result.
	document.getElementById("res2").innerHTML = "<p>"
	+ "("
	+ rootArrayToString(x_array)
	+ ")x + "
	+ "("
	+ rootArrayToString(y_array)
	+ ")y + "
	+ "("
	+ rootArrayToString(z_array)
	+ ")z + ("
	+ rootArrayToString(d_array)
	+ ") = 0"
	+ "</p>";
}

// This is a class that stores a "root object": A mathematical expression in the form of ± a √ b.
class Root {
	constructor(sign, whole, irr) {
		this.sign = sign;
		this.whole = whole;
		this.irr = irr;
		this.raw = sign*whole*whole*irr;
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

			if (this.sign == -1) {
				var signStr = "-";
			} else {
				var signStr = "";
			}
			
			if (this.irr == 1) {
				return signStr + this.whole;
			} else if (this.whole == 1) {
				return signStr + "√" + this.irr;
			} else {
				return signStr + this.whole + "√" + this.irr;
			}
		}
	}
	getSign(reverse) {
		if (reverse) {
			if (this.sign == -1) {
				return "&nbsp;+&nbsp;";
			} else {
				return "&nbsp;-&nbsp;";
			}
		} else {
			if (this.sign == -1) {
				return "&nbsp;-&nbsp;";
			} else {
				return "&nbsp;+&nbsp;";
			}
		}
	}
}

// ~~ Actions with roots ~~

// Returns the same root, but multiplied by -1
function swapSign(a) {
	a.sign = a.sign * -1;
	return a;
}

// Returns the root you get by multiplying two other roots
function multiply(a, b) {
	return toRoot(a.raw * b.raw);
}

// Takes an array of roots and adds them up where possible.
function addRoots(arr) {
	
	// Sort the array first
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j].irr > arr[j+1].irr) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	
	// Then add the elements with the same root
	var arrNew = [];
	arrNew[0] = arr[0];
	var k = 0;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i-1].irr != arr[i].irr) {
			k++;
			arrNew[k] = arr[i];
		} else {
			var whole = arrNew[k].sign * arrNew[k].whole + arr[i].sign * arr[i].whole;
			arrNew[k] = new Root(Math.sign(whole), Math.abs(whole), arr[i].irr);
		}
	}
	
	// And remove the "zero" elements
	var arrClean = [];
	k = 0;
	for (var i = 0; i < arrNew.length; i++) {
		if (arrNew[i].whole != 0) {
			arrClean[k] = arrNew[i];
			k++;
		}
	}
	if (arrClean.length == 0) { // Whoops, the entire array is zero
		arrClean[0] = new Root(0, 0, 1); // I guess I'll allow just one zero object
	} 
	return arrClean;
}

// Reduces every root in the array by the gcd.
function reduceArray(arr, gcd) {
	// Divide every root by gcd
	for (var i = 0; i < arr.length; i++) {
		var temp = arr[i];
		arr[i] = toRoot(Math.floor(temp.raw / gcd));
	}
	return arr;
}

// ~~ Create roots ~~

// Creates the root object based on the given value. 
// The boolean determines whether the input is under the square root or not
function rootOrNumber(a, isRoot) {
	if(isRoot) {
		return toRoot(a);
	} else {
		return new Root(Math.sign(a), Math.abs(a), 1);
	}
}

// Creates the root object from (raw) number.
function toRoot(a) {
	var sign = Math.sign(a);
	a = Math.abs(a);
	if (a == 0) {
		return new Root(0, 0, 1);
	} else {
		for (var i = Math.ceil(Math.sqrt(a)); i > 0; i--) {
			if (a % (i*i) == 0) {
				return new Root(sign, i, a / (i*i));
			}
		}
	}
}

// ~~ Create output ~~

// Creates an output string based on the array of roots.
function rootArrayToString(arr) {
	var rootArrayString = arr[0].toString();
	for (i = 1; i < arr.length; i++) {
		rootArrayString = rootArrayString + arr[i].getSign() + arr[i].toString(true);
	}
	return rootArrayString;
}

// ~~ GCD stuff ~~

// Returns the greatest common divisor of two numbers. 
// If one of the numbers is zero, it returns the other one
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

function getGcdFromArray(arr) {
	if (arr.length == 0) { 
		// Welp, there isn't anything here 
		// Actually, this should never be the case, but shh
		return 0;
	} else if (arr.length == 1) {
		// Welp, there is one thing here
		return Math.abs(arr[0].raw);
	} else {
		// Yay, some actual maths
		var gcd = gcd_rec(Math.abs(arr[0].raw), Math.abs(arr[1].raw));
		for (var i = 2; i < arr.length; i++) {
			gcd = gcd_rec(gcd, Math.abs(arr[i].raw))
		}
		return gcd;
	}
}