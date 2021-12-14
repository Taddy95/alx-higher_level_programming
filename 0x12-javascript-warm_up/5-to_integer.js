#!/usr/bin/node

const myVal = parseInt(process.argv[2]);
if (myVal) {
  console.log('My number: ' + myVal);
} else {
  console.log('Not a number');
}
