const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();
let answer = 0;

for (let i=1; i<=input; i++ ) {
  // answer = answer + i
  answer += i;
}
console.log(answer);