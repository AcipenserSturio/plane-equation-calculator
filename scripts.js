// Main program
function calc() {
	
	// Get input from HTML
	
	// Numerators
	
	var in01_str = document.getElementById("in01").value;
	var in02_str = document.getElementById("in02").value;
	var in03_str = document.getElementById("in03").value;
	var in04_str = document.getElementById("in04").value;
	var in05_str = document.getElementById("in05").value;
	var in06_str = document.getElementById("in06").value;
	
	var in13_str = document.getElementById("in13").value;
	var in14_str = document.getElementById("in14").value;
	var in15_str = document.getElementById("in15").value;
	var in16_str = document.getElementById("in16").value;
	var in17_str = document.getElementById("in17").value;
	var in18_str = document.getElementById("in18").value;
	
	var in25_str = document.getElementById("in25").value;
	var in26_str = document.getElementById("in26").value;
	var in27_str = document.getElementById("in27").value;
	var in28_str = document.getElementById("in28").value;
	var in29_str = document.getElementById("in29").value;
	var in30_str = document.getElementById("in30").value;
	
	// Denominators
	
	var in07_str = document.getElementById("in07").value;
	var in08_str = document.getElementById("in08").value;
	var in09_str = document.getElementById("in09").value;
	var in10_str = document.getElementById("in10").value;
	var in11_str = document.getElementById("in11").value;
	var in12_str = document.getElementById("in12").value;
	
	var in19_str = document.getElementById("in19").value;
	var in20_str = document.getElementById("in20").value;
	var in21_str = document.getElementById("in21").value;
	var in22_str = document.getElementById("in22").value;
	var in23_str = document.getElementById("in23").value;
	var in24_str = document.getElementById("in24").value;
	
	var in31_str = document.getElementById("in31").value;
	var in32_str = document.getElementById("in32").value;
	var in33_str = document.getElementById("in33").value;
	var in34_str = document.getElementById("in34").value;
	var in35_str = document.getElementById("in35").value;
	var in36_str = document.getElementById("in36").value;
	
	// Turn strings into numbers, taking placeholders into accont
	
	// Numerators
	
	if (in01_str == "") { var in01 = 1; } else { var in01 = Number(in01_str); }
	if (in02_str == "") { var in02 = 1; } else { var in02 = Number(in02_str); }
	if (in03_str == "") { var in03 = 1; } else { var in03 = Number(in03_str); }
	if (in04_str == "") { var in04 = 1; } else { var in04 = Number(in04_str); }
	if (in05_str == "") { var in05 = 1; } else { var in05 = Number(in05_str); }
	if (in06_str == "") { var in06 = 1; } else { var in06 = Number(in06_str); }
	
	if (in13_str == "") { var in13 = 1; } else { var in13 = Number(in13_str); }
	if (in14_str == "") { var in14 = 1; } else { var in14 = Number(in14_str); }
	if (in15_str == "") { var in15 = 1; } else { var in15 = Number(in15_str); }
	if (in16_str == "") { var in16 = 1; } else { var in16 = Number(in16_str); }
	if (in17_str == "") { var in17 = 1; } else { var in17 = Number(in17_str); }
	if (in18_str == "") { var in18 = 1; } else { var in18 = Number(in18_str); }
	
	if (in25_str == "") { var in25 = 1; } else { var in25 = Number(in25_str); }
	if (in26_str == "") { var in26 = 1; } else { var in26 = Number(in26_str); }
	if (in27_str == "") { var in27 = 1; } else { var in27 = Number(in27_str); }
	if (in28_str == "") { var in28 = 1; } else { var in28 = Number(in28_str); }
	if (in29_str == "") { var in29 = 1; } else { var in29 = Number(in29_str); }
	if (in30_str == "") { var in30 = 1; } else { var in30 = Number(in30_str); }
	
	// Denominators
	
	if (in07_str == "") { var in07 = 1; } else { var in07 = Number(in07_str); }
	if (in08_str == "") { var in08 = 1; } else { var in08 = Number(in08_str); }
	if (in09_str == "") { var in09 = 1; } else { var in09 = Number(in09_str); }
	if (in10_str == "") { var in10 = 1; } else { var in10 = Number(in10_str); }
	if (in11_str == "") { var in11 = 1; } else { var in11 = Number(in11_str); }
	if (in12_str == "") { var in12 = 1; } else { var in12 = Number(in12_str); }
	
	if (in19_str == "") { var in19 = 1; } else { var in19 = Number(in19_str); }
	if (in20_str == "") { var in20 = 1; } else { var in20 = Number(in20_str); }
	if (in21_str == "") { var in21 = 1; } else { var in21 = Number(in21_str); }
	if (in22_str == "") { var in22 = 1; } else { var in22 = Number(in22_str); }
	if (in23_str == "") { var in23 = 1; } else { var in23 = Number(in23_str); }
	if (in24_str == "") { var in24 = 1; } else { var in24 = Number(in24_str); }
	
	if (in31_str == "") { var in31 = 1; } else { var in31 = Number(in31_str); }
	if (in32_str == "") { var in32 = 1; } else { var in32 = Number(in32_str); }
	if (in33_str == "") { var in33 = 1; } else { var in33 = Number(in33_str); }
	if (in34_str == "") { var in34 = 1; } else { var in34 = Number(in34_str); }
	if (in35_str == "") { var in35 = 1; } else { var in35 = Number(in35_str); }
	if (in36_str == "") { var in36 = 1; } else { var in36 = Number(in36_str); }
	
	// Create root objects
	
	// Numerators
	
	var x1_numer = new Root(Math.sign(in01), Math.abs(in01), in02);
	var y1_numer = new Root(Math.sign(in03), Math.abs(in03), in04);
	var z1_numer = new Root(Math.sign(in05), Math.abs(in05), in06);
	
	var x2_numer = new Root(Math.sign(in13), Math.abs(in13), in14);
	var y2_numer = new Root(Math.sign(in15), Math.abs(in15), in16);
	var z2_numer = new Root(Math.sign(in17), Math.abs(in17), in18);
	
	var x3_numer = new Root(Math.sign(in25), Math.abs(in25), in26);
	var y3_numer = new Root(Math.sign(in27), Math.abs(in27), in28);
	var z3_numer = new Root(Math.sign(in29), Math.abs(in29), in30);
		
	// Denominators
	
	var x1_denom = new Root(Math.sign(in07), Math.abs(in07), in08);
	var y1_denom = new Root(Math.sign(in09), Math.abs(in09), in10);
	var z1_denom = new Root(Math.sign(in11), Math.abs(in11), in12);
	
	var x2_denom = new Root(Math.sign(in19), Math.abs(in19), in20);
	var y2_denom = new Root(Math.sign(in21), Math.abs(in21), in22);
	var z2_denom = new Root(Math.sign(in23), Math.abs(in23), in24);
	
	var x3_denom = new Root(Math.sign(in31), Math.abs(in31), in32);
	var y3_denom = new Root(Math.sign(in33), Math.abs(in33), in34);
	var z3_denom = new Root(Math.sign(in35), Math.abs(in35), in36);
	
	// Sanitise root objects
	
	// Numerators
	
	var x1_obj_numer = toRoot(x1_numer.raw);
	var y1_obj_numer = toRoot(y1_numer.raw);
	var z1_obj_numer = toRoot(z1_numer.raw);
	
	var x2_obj_numer = toRoot(x2_numer.raw);
	var y2_obj_numer = toRoot(y2_numer.raw);
	var z2_obj_numer = toRoot(z2_numer.raw);
	
	var x3_obj_numer = toRoot(x3_numer.raw);
	var y3_obj_numer = toRoot(y3_numer.raw);
	var z3_obj_numer = toRoot(z3_numer.raw);
	
	// Denominators
	
	var x1_obj_denom = toRoot(x1_denom.raw);
	var y1_obj_denom = toRoot(y1_denom.raw);
	var z1_obj_denom = toRoot(z1_denom.raw);
	
	var x2_obj_denom = toRoot(x2_denom.raw);
	var y2_obj_denom = toRoot(y2_denom.raw);
	var z2_obj_denom = toRoot(z2_denom.raw);
	
	var x3_obj_denom = toRoot(x3_denom.raw);
	var y3_obj_denom = toRoot(y3_denom.raw);
	var z3_obj_denom = toRoot(z3_denom.raw);
	
	// Output the points back into the page
	
	document.getElementById("points").innerHTML = "При А("
	+ getFractionFromRoots(x1_obj_numer, x1_obj_denom) + "; "
	+ getFractionFromRoots(y1_obj_numer, y1_obj_denom) + "; "
	+ getFractionFromRoots(z1_obj_numer, z1_obj_denom) + "), B("
	+ getFractionFromRoots(x2_obj_numer, x2_obj_denom) + "; "
	+ getFractionFromRoots(y2_obj_numer, y2_obj_denom) + "; "
	+ getFractionFromRoots(z2_obj_numer, z2_obj_denom) + "), C("
	+ getFractionFromRoots(x3_obj_numer, x3_obj_denom) + "; "
	+ getFractionFromRoots(y3_obj_numer, y3_obj_denom) + "; "
	+ getFractionFromRoots(z3_obj_numer, z3_obj_denom) + "):"
	
	// Get lcm from all of the denominators, in order to eventually get rid of them
	
	var denom_array = [x1_denom, y1_denom, z1_denom, x2_denom, y2_denom, z2_denom, x3_denom, y3_denom, z3_denom];
	var denom_lcm = getLcmFromArray(denom_array);
	var denom_lcm_root = toRoot(denom_lcm);
	
	// Multiply numerators by the lcm, divide them by their respective denominators
	
	var x1_obj = toRoot(x1_obj_numer.raw * denom_lcm / x1_obj_denom.raw);
	var y1_obj = toRoot(y1_obj_numer.raw * denom_lcm / y1_obj_denom.raw);
	var z1_obj = toRoot(z1_obj_numer.raw * denom_lcm / z1_obj_denom.raw);
	
	var x2_obj = toRoot(x2_obj_numer.raw * denom_lcm / x2_obj_denom.raw);
	var y2_obj = toRoot(y2_obj_numer.raw * denom_lcm / y2_obj_denom.raw);
	var z2_obj = toRoot(z2_obj_numer.raw * denom_lcm / z2_obj_denom.raw);
	
	var x3_obj = toRoot(x3_obj_numer.raw * denom_lcm / x3_obj_denom.raw);
	var y3_obj = toRoot(y3_obj_numer.raw * denom_lcm / y3_obj_denom.raw);
	var z3_obj = toRoot(z3_obj_numer.raw * denom_lcm / z3_obj_denom.raw);
	
	// Open the brackets by multiplying freaking everything. 
	// Create the roots for the new multiplied thingies.
	// Some of them are positive, some are negative.
	// Since we are working in a scaled version of 3d output space,
	// All of the d_ objects have to be scaled down by lcm,
	// Which is equivalent to scaling everything else up by lcm.
	var y2z3 = toRoot( y2_obj.raw * z3_obj.raw * denom_lcm);
	var y1z3 = toRoot(-y1_obj.raw * z3_obj.raw * denom_lcm);
	var y2z1 = toRoot(-y2_obj.raw * z1_obj.raw * denom_lcm);
	var y1z1 = toRoot( y1_obj.raw * z1_obj.raw * denom_lcm);
	var z2y3 = toRoot(-z2_obj.raw * y3_obj.raw * denom_lcm);
	var z1y3 = toRoot( z1_obj.raw * y3_obj.raw * denom_lcm);
	var z2y1 = toRoot( z2_obj.raw * y1_obj.raw * denom_lcm);
	var z1y1 = toRoot(-z1_obj.raw * y1_obj.raw * denom_lcm);
	
	var z2x3 = toRoot( z2_obj.raw * x3_obj.raw * denom_lcm);
	var z1x3 = toRoot(-z1_obj.raw * x3_obj.raw * denom_lcm);
	var z2x1 = toRoot(-z2_obj.raw * x1_obj.raw * denom_lcm);
	var z1x1 = toRoot( z1_obj.raw * x1_obj.raw * denom_lcm);
	var x2z3 = toRoot(-x2_obj.raw * z3_obj.raw * denom_lcm);
	var x1z3 = toRoot( x1_obj.raw * z3_obj.raw * denom_lcm);
	var x2z1 = toRoot( x2_obj.raw * z1_obj.raw * denom_lcm);
	var x1z1 = toRoot(-x1_obj.raw * z1_obj.raw * denom_lcm);
	
	var x2y3 = toRoot( x2_obj.raw * y3_obj.raw * denom_lcm);
	var x1y3 = toRoot(-x1_obj.raw * y3_obj.raw * denom_lcm);
	var x2y1 = toRoot(-x2_obj.raw * y1_obj.raw * denom_lcm);
	var x1y1 = toRoot( x1_obj.raw * y1_obj.raw * denom_lcm);
	var y2x3 = toRoot(-y2_obj.raw * x3_obj.raw * denom_lcm);
	var y1x3 = toRoot( y1_obj.raw * x3_obj.raw * denom_lcm);
	var y2x1 = toRoot( y2_obj.raw * x1_obj.raw * denom_lcm);
	var y1x1 = toRoot(-y1_obj.raw * x1_obj.raw * denom_lcm);
	
	var y2z3x1 = toRoot(-y2z3.raw * x1_obj.raw / denom_lcm);
	var y1z3x1 = toRoot(-y1z3.raw * x1_obj.raw / denom_lcm);
	var y2z1x1 = toRoot(-y2z1.raw * x1_obj.raw / denom_lcm);
	var y1z1x1 = toRoot(-y1z1.raw * x1_obj.raw / denom_lcm);
	var z2y3x1 = toRoot(-z2y3.raw * x1_obj.raw / denom_lcm);
	var z1y3x1 = toRoot(-z1y3.raw * x1_obj.raw / denom_lcm);
	var z2y1x1 = toRoot(-z2y1.raw * x1_obj.raw / denom_lcm);
	var z1y1x1 = toRoot(-z1y1.raw * x1_obj.raw / denom_lcm);
	
	var z2x3y1 = toRoot(-z2x3.raw * y1_obj.raw / denom_lcm);
	var z1x3y1 = toRoot(-z1x3.raw * y1_obj.raw / denom_lcm);
	var z2x1y1 = toRoot(-z2x1.raw * y1_obj.raw / denom_lcm);
	var z1x1y1 = toRoot(-z1x1.raw * y1_obj.raw / denom_lcm);
	var x2z3y1 = toRoot(-x2z3.raw * y1_obj.raw / denom_lcm);
	var x1z3y1 = toRoot(-x1z3.raw * y1_obj.raw / denom_lcm);
	var x2z1y1 = toRoot(-x2z1.raw * y1_obj.raw / denom_lcm);
	var x1z1y1 = toRoot(-x1z1.raw * y1_obj.raw / denom_lcm);
	
	var x2y3z1 = toRoot(-x2y3.raw * z1_obj.raw / denom_lcm);
	var x1y3z1 = toRoot(-x1y3.raw * z1_obj.raw / denom_lcm);
	var x2y1z1 = toRoot(-x2y1.raw * z1_obj.raw / denom_lcm);
	var x1y1z1 = toRoot(-x1y1.raw * z1_obj.raw / denom_lcm);
	var y2x3z1 = toRoot(-y2x3.raw * z1_obj.raw / denom_lcm);
	var y1x3z1 = toRoot(-y1x3.raw * z1_obj.raw / denom_lcm);
	var y2x1z1 = toRoot(-y2x1.raw * z1_obj.raw / denom_lcm);
	var y1x1z1 = toRoot(-y1x1.raw * z1_obj.raw / denom_lcm);
	
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
	document.getElementById("result").innerHTML = "<p>"
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

// ~~ Actions with root arrays ~~

// Sorts the array by the irrational part of the root object.
function sortRoots(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j].irr > arr[j+1].irr) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

// Takes an array of roots and adds them up where possible.
function addRoots(arr) {
	// Sort the array first
	arr = sortRoots(arr);
	
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
	// Then sort the array, because the order might have been broken.
	arr = sortRoots(arr);
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

// Creates an output HTML string, representing a fraction or a/b.
function getFractionFromRoots(a, b) {
	if (b.raw == 1) {
		return a.toString();
	} else {
		return "<div class=\"frac\"><span>"
		+ a.toString() + "</span><span class=\"symbol\"></span><span class=\"bottom\">" 
		+ b.toString() + "</span></div>";
	}
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

// ~~ LCM stuff ~~

// Returns the least common multiple of two numbers. 
// If one of the numbers is zero, it returns the other one
function lcm_rec(a, b) { 
	return (a*b) / gcd_rec(a, b);
}

function getLcmFromArray(arr) {
	if (arr.length == 0) { 
		// Welp, there isn't anything here 
		// Actually, this should never be the case, but shh
		return 0;
	} else if (arr.length == 1) {
		// Welp, there is one thing here
		return Math.abs(arr[0].raw);
	} else {
		// Yay, some actual maths
		var lcm = lcm_rec(Math.abs(arr[0].raw), Math.abs(arr[1].raw));
		for (var i = 2; i < arr.length; i++) {
			lcm = lcm_rec(lcm, Math.abs(arr[i].raw))
		}
		return lcm;
	}
}