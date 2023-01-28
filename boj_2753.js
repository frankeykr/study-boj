const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const year = parseInt(input[0]);

// 윤년 계산법
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(1);
} else {
    console.log(0);
}