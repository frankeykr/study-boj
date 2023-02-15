const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split('\n');
const count = Number(input[0]);

for (let i=1; i<=count; i++){
  let numbers = input[i].split(' ');
  let answer = Number(numbers[0]) + Number(numbers[1]);
  console.log(`Case #${i}: ${answer}` );
}