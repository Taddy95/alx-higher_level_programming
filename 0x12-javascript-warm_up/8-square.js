#!/usr/bin/node
const squareSize = parseInt(process.argv[2]);
if (squareSize) {
  for (let i = 0; i < squareSize; i++) {
    console.log('X'.repeat(squareSize));
  }
} else {
  console.log('Missing size');
}
