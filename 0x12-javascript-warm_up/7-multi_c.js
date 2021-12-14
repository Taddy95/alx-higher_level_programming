#!/usr/bin/node
const myVal = parseInt(process.argv[2]);
if (myVal) {
  for (let i = 0; i < myVal; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
