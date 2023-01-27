// low-hanging fruit

// useful/common score from 1 (not very) to 10 (very)

// do/while - 1

// let input;
// do {
// 	input = prompt("Enter a number greater than 10:");
// }
// while (input <= 10);
// console.log("Thank you for entering a valid number: " + input);

// for-of - 6 (2015)
const colors = ['green', 'yellow', 'orange', 'black', 'white'];
for (const color of colors) {
	console.log(`The word "${color}" has ${color.length} letter.`);
}

// for - (for arrays: 3, otherwise: 4)
console.log('---');
for (let i = 0; i < colors.length; i++) {
	const color = colors[i];
	console.log(`The word "${color}" has ${color.length} letter.`);
}

// HIGHER-ORDER FUNCTIONS (2015)
// these are all ARRAY functions
// this means: a function that takes a function as a parameter
// (based on ideas from the lodash library)

// find, filter, reduce, sort, forEach, map

// filter = fetches many items from array
// find = fetchs ONE item from array, often with id

// forEach - 9
console.log('---');
colors.forEach(color => {
	console.log(`The word "${color}" has ${color.length} letter.`);
});

console.log('---');
// -- forEach shortened syntax
colors.forEach(color => console.log(`The word "${color}" has ${color.length} letter.`));

console.log('---');
// -- forEach shortened syntax with "m"
colors.forEach(m => console.log(`The word "${m}" has ${m.length} letter.`));

// -- map - 10
// red --> (red)
console.log('---');
const parenthesesColors = colors.map(m => `(${m})`);
console.log(parenthesesColors);

// map
// map maps an array to another array
// it converts, es wandelt ein Array um zu einem neuen Array **mit den gleicher Zahl von Items**
// red --> { name: "red", length: 3}
console.log('---');
const colorObjs = colors.map(color => {
	return {
		name: color,
		length: color.length
	};
});
console.log(colorObjs);
