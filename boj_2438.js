const fs = require('fs');
const input = fs.readFileSync('example.txt').toString();
let answer = '';

for (let i=1; i<=input; i++) {
  answer += '*'
  console.log(answer);
}