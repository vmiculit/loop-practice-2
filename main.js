// Write a loop that prints the given output

// Ex:

console.log("<----EX:")

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for(var i=0; i<animals.length; i++) {
 console.log(animals[i]);
}

// 1. 
// rat
// cat
// butterfly
// marmot

console.log("<----1.:")

for (var i = 0; i<animals.length-1; i++) {
	console.log(animals[i])
}

// 2. 
// rat
// butterfly
// ocelot

console.log("<----2.:")

for (var i = 0; i<animals.length; i += 2) {
	console.log(animals[i])
}

// 3. 
// ocelot
// marmot
// butterfly
// cat
// rat

console.log("<----3.:")

for (var i = animals.length; i >= 0; i--) {
	console.log(animals[i])
}

// 4. 
// rat
// cat
// cat
// butterfly
// butterfly
// marmot
// marmot
// ocelot

console.log("<----4.:")

for (var i = 0; i<animals.length; i ++) {

	if (i > 0 && i < animals.length - 1) {
		console.log(animals[i])
		console.log(animals[i])
	} else {
		console.log(animals[i])
	}
}

