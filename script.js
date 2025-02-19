const makeChange = (c) => {

	// const obj=[
	// 	{"p":1},
	// 	{"n":5},
	// 	{"d":10},
	// 	{"q":25},
	// 		]


	const arr = new Array();
	
	arr.push({"q":math.floor(c/25)});
	c%=25;
	
	arr.push({"d":math.floor(c/10)});
	c%=10;
	arr.push({"n":math.floor(c/5)})
	c%=5;
	arr.push({"p":math.floor(c/1)});
	return arr;
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
