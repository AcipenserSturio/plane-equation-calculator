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

function multiply(a, b) {
	return toRoot(a.raw * b.raw);
}

function swapSign(a) {
	a.sign = a.sign * -1;
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
		return new Root(Math.sign(a), Math.abs(a), 1);
	}
}

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

function calcsum() {
	// Get input from HTML
	var x1_whole = Number(document.getElementById("n1").value);
	var x1_irrat = Number(document.getElementById("n2").value);
	var x2_whole = Number(document.getElementById("n3").value);
	var x2_irrat = Number(document.getElementById("n4").value);
	var x3_whole = Number(document.getElementById("n5").value);
	var x3_irrat = Number(document.getElementById("n6").value);
	
	var x1_sign = document.getElementById("r1").checked;
	var x2_sign = document.getElementById("r2").checked;
	var x3_sign = document.getElementById("r3").checked;
	
	if (x1_sign) {
		var r1 = new Root(-1, x1_whole, x1_irrat);
	} else {
		var r1 = new Root(1, x1_whole, x1_irrat);
	}
	if (x2_sign) {
		var r2 = new Root(-1, x2_whole, x2_irrat);
	} else {
		var r2 = new Root(1, x2_whole, x2_irrat);
	}
	if (x3_sign) {
		var r3 = new Root(-1, x3_whole, x3_irrat);
	} else {
		var r3 = new Root(1, x3_whole, x3_irrat);
	}
	
	var root1 = toRoot(r1.raw);
	var root2 = toRoot(r2.raw);
	var root3 = toRoot(r3.raw);
	
	var rootArray = [root1, root2, root3];
	rootArray = addRoots(rootArray);
	
	var rootArrayString = rootArray[0].toString();
	for (i = 1; i < rootArray.length; i++) {
		rootArrayString = rootArrayString + rootArray[i].getSign() + rootArray[i].toString(true);
	}
	
	document.getElementById("res1").innerHTML = "<p>Сумма " + rootArrayString + "</p>";
	
	
}

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
	return arrNew;
}

function rootArrayToString(arr) {
	var rootArrayString = arr[0].toString();
	for (i = 1; i < arr.length; i++) {
		rootArrayString = rootArrayString + arr[i].getSign() + arr[i].toString(true);
	}
	return rootArrayString;
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
	/*document.getElementById("res2").innerHTML = "<p>"
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
	+ " = 0</p>";*/

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
	
	var x_array = [y2z3, y1z3, y2z1, y1z1, z2y3, z1y3, z2y1, z1y1];
	var y_array = [z2x3, z1x3, z2x1, z1x1, x2z3, x1z3, x2z1, x1z1];
	var z_array = [x2y3, x1y3, x2y1, x1y1, y2x3, y1x3, y2x1, y1x1];
	var d_array = [y2z3x1, y1z3x1, y2z1x1, y1z1x1, z2y3x1, z1y3x1, z2y1x1, z1y1x1, z2x3y1, z1x3y1, z2x1y1, z1x1y1, x2z3y1, x1z3y1, x2z1y1, x1z1y1, x2y3z1, x1y3z1, x2y1z1, x1y1z1, y2x3z1, y1x3z1, y2x1z1, y1x1z1];
	x_array = addRoots(x_array);
	y_array = addRoots(y_array);
	z_array = addRoots(z_array);
	d_array = addRoots(d_array);
	
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
	
	
	
	
	/*document.getElementById("res3").innerHTML = "<p>"
	+ ""
	+ rootArrayToString(x_array);
	+ "x "
	+ rootArrayToString(y_array);
	+ "y "
	+ rootArrayToString(z_array);
	+ "z "
	+ rootArrayToString(d_array);
	+ "</p>";*/
	/*
	document.getElementById("res3").innerHTML = "<p>"
	+ "("
	+ y2z3.toString()
	+ y1z3.getSign() + y1z3.toString(true)
	+ y2z1.getSign() + y2z1.toString(true)
	+ y1z1.getSign() + y1z1.toString(true)
	+ z2y3.getSign() + z2y3.toString(true)
	+ z1y3.getSign() + z1y3.toString(true)
	+ z2y1.getSign() + z2y1.toString(true)
	+ z1y1.getSign() + z1y1.toString(true)
	+ ")x <br />+ "
	+ "("
	+ z2x3.toString()
	+ z1x3.getSign() + z1x3.toString(true)
	+ z2x1.getSign() + z2x1.toString(true)
	+ z1x1.getSign() + z1x1.toString(true)
	+ x2z3.getSign() + x2z3.toString(true)
	+ x1z3.getSign() + x1z3.toString(true)
	+ x2z1.getSign() + x2z1.toString(true)
	+ x1z1.getSign() + x1z1.toString(true)
	+ ")y <br />+ "
	+ "("
	+ x2y3.toString()
	+ x1y3.getSign() + x1y3.toString(true)
	+ x2y1.getSign() + x2y1.toString(true)
	+ x1y1.getSign() + x1y1.toString(true)
	+ y2x3.getSign() + y2x3.toString(true)
	+ y1x3.getSign() + y1x3.toString(true)
	+ y2x1.getSign() + y2x1.toString(true)
	+ y1x1.getSign() + y1x1.toString(true)
	+ ")z <br /> "
	
	
	+ y2z3x1.getSign() + y2z3x1.toString(true)
	+ y1z3x1.getSign() + y1z3x1.toString(true)
	+ y2z1x1.getSign() + y2z1x1.toString(true)
	+ y1z1x1.getSign() + y1z1x1.toString(true)
	+ z2y3x1.getSign() + z2y3x1.toString(true)
	+ z1y3x1.getSign() + z1y3x1.toString(true)
	+ z2y1x1.getSign() + z2y1x1.toString(true)
	+ z1y1x1.getSign() + z1y1x1.toString(true)
	+ "<br />"
	+ z2x3y1.getSign() + z2x3y1.toString(true)
	+ z1x3y1.getSign() + z1x3y1.toString(true)
	+ z2x1y1.getSign() + z2x1y1.toString(true)
	+ z1x1y1.getSign() + z1x1y1.toString(true)
	+ x2z3y1.getSign() + x2z3y1.toString(true)
	+ x1z3y1.getSign() + x1z3y1.toString(true)
	+ x2z1y1.getSign() + x2z1y1.toString(true)
	+ x1z1y1.getSign() + x1z1y1.toString(true)
	+ "<br />"
	+ x2y3z1.getSign() + x2y3z1.toString(true)
	+ x1y3z1.getSign() + x1y3z1.toString(true)
	+ x2y1z1.getSign() + x2y1z1.toString(true)
	+ x1y1z1.getSign() + x1y1z1.toString(true)
	+ y2x3z1.getSign() + y2x3z1.toString(true)
	+ y1x3z1.getSign() + y1x3z1.toString(true)
	+ y2x1z1.getSign() + y2x1z1.toString(true)
	+ y1x1z1.getSign() + y1x1z1.toString(true)
	+ " = 0"
	+ "</p>";*/
	
	
}