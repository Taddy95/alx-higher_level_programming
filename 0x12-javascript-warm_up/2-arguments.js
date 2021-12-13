#!/usr/bin/node
const argValue = process.argv;

if (argValue.length < 3)
{
	console.log('No argument');
} else if (argValue.length === 3) {
	console.log('Argument found');
} else {
	console.log('Arguments found');
}
