// function foo(x) {
// 	y++;
// 	z = x * y;
// }

// state
// var y = 5, z;

// x is a param for state
// z is an output

// foo(20);
// z;		// 120

// foo(25);
// z;		// 175

// wrap and pass in the entire universe of state

function bar(x, y){
	// define this here, don't pass
	var z;
	foo(x);
	return [y, z];
	// don't have to pass in x, because of closures
	function foo(x){
		y += 1;
		z = x * y;
	}
}

console.log(bar(20, 5));
console.log(bar(25, 6));