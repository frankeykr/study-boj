const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);

const calc = (A, B) => {
  if (A < B) {
    return "<";
  } else if (A > B) {
    return ">";
  } else if (A == B) {
    return "==";
  }
};

console.log(calc(a, b));